"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.getLiquidityPositionsDocument = exports.getBuiltGraphSDK = exports.subscribe = exports.execute = exports.getBuiltGraphClient = exports.createBuiltMeshHTTPHandler = exports.getMeshOptions = exports.rawServeConfig = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("@graphql-mesh/utils");
const utils_2 = require("@graphql-mesh/utils");
const utils_3 = require("@graphql-mesh/utils");
const cache_localforage_1 = tslib_1.__importDefault(require("@graphql-mesh/cache-localforage"));
const fetch_1 = require("@whatwg-node/fetch");
const graphql_1 = tslib_1.__importDefault(require("@graphql-mesh/graphql"));
const client_auto_pagination_1 = tslib_1.__importDefault(require("@graphprotocol/client-auto-pagination"));
const client_auto_type_merging_1 = tslib_1.__importDefault(require("@graphprotocol/client-auto-type-merging"));
const merger_bare_1 = tslib_1.__importDefault(require("@graphql-mesh/merger-bare"));
const utils_4 = require("@graphql-mesh/utils");
const http_1 = require("@graphql-mesh/http");
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const cross_helpers_1 = require("@graphql-mesh/cross-helpers");
const baseDir = cross_helpers_1.path.join(typeof __dirname === 'string' ? __dirname : '/', '..');
const importFn = (moduleId) => {
    const relativeModuleId = (cross_helpers_1.path.isAbsolute(moduleId) ? cross_helpers_1.path.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/legacy/introspectionSchema.json":
            return Promise.resolve().then(() => tslib_1.__importStar(require("./sources/legacy/introspectionSchema.json")));
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new store_1.MeshStore('.graphclient', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "json",
}), {
    readonly: true,
    validate: false
});
exports.rawServeConfig = undefined;
async function getMeshOptions() {
    const pubsub = new utils_2.PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new utils_3.DefaultLogger("GraphClient");
    const cache = new cache_localforage_1.default({
        ...{},
        importFn,
        store: rootStore.child('cache'),
        pubsub,
        logger,
    });
    const sources = [];
    const transforms = [];
    const additionalEnvelopPlugins = [];
    const legacyTransforms = [];
    const additionalTypeDefs = [];
    const legacyHandler = new graphql_1.default({
        name: "legacy",
        config: { "endpoint": "https://api.thegraph.com/subgraphs/name/sushiswap/exchange" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("legacy"),
        logger: logger.child("legacy"),
        importFn,
    });
    legacyTransforms[0] = new client_auto_pagination_1.default({
        apiName: "legacy",
        config: { "validateSchema": true, "limitOfRecords": 10 },
        baseDir,
        cache,
        pubsub,
        importFn
    });
    legacyTransforms[1] = new client_auto_type_merging_1.default({
        apiName: "legacy",
        config: true,
        baseDir,
        cache,
        pubsub,
        importFn
    });
    sources[0] = {
        name: 'legacy',
        handler: legacyHandler,
        transforms: legacyTransforms
    };
    const additionalResolvers = [];
    const merger = new merger_bare_1.default({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
    });
    return {
        sources,
        transforms,
        additionalTypeDefs,
        additionalResolvers,
        cache,
        pubsub,
        merger,
        logger,
        additionalEnvelopPlugins,
        get documents() {
            return [
                {
                    document: GetLiquidityPositionsDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(GetLiquidityPositionsDocument);
                    },
                    location: 'GetLiquidityPositionsDocument.graphql'
                }
            ];
        },
        fetchFn: fetch_1.fetch,
    };
}
exports.getMeshOptions = getMeshOptions;
function createBuiltMeshHTTPHandler() {
    return (0, http_1.createMeshHTTPHandler)({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
exports.createBuiltMeshHTTPHandler = createBuiltMeshHTTPHandler;
let meshInstance$;
function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => (0, runtime_1.getMesh)(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
exports.getBuiltGraphClient = getBuiltGraphClient;
const execute = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));
exports.execute = execute;
const subscribe = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
exports.subscribe = subscribe;
function getBuiltGraphSDK(globalContext) {
    const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
    return getSdk((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
exports.getBuiltGraphSDK = getBuiltGraphSDK;
exports.getLiquidityPositionsDocument = (0, utils_1.gql) `
    query getLiquidityPositions($skip: Int = 0, $first: Int = 100, $where: LiquidityPosition_filter) {
  liquidityPositions(skip: $skip, first: $first, where: $where) {
    id
  }
}
    `;
function getSdk(requester) {
    return {
        getLiquidityPositions(variables, options) {
            return requester(exports.getLiquidityPositionsDocument, variables, options);
        }
    };
}
exports.getSdk = getSdk;
