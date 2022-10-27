import { gql } from '@graphql-mesh/utils';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';
import GraphqlHandler from "@graphql-mesh/graphql";
import AutoPaginationTransform from "@graphprotocol/client-auto-pagination";
import AutoTypeMergingTransform from "@graphprotocol/client-auto-type-merging";
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');
const importFn = (moduleId) => {
    const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/legacy/introspectionSchema.json":
            return import("./sources/legacy/introspectionSchema.json");
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "json",
}), {
    readonly: true,
    validate: false
});
export const rawServeConfig = undefined;
export async function getMeshOptions() {
    const pubsub = new PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new DefaultLogger("GraphClient");
    const cache = new MeshCache({
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
    const legacyHandler = new GraphqlHandler({
        name: "legacy",
        config: { "endpoint": "https://api.thegraph.com/subgraphs/name/sushiswap/exchange" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("legacy"),
        logger: logger.child("legacy"),
        importFn,
    });
    legacyTransforms[0] = new AutoPaginationTransform({
        apiName: "legacy",
        config: { "validateSchema": true, "limitOfRecords": 10 },
        baseDir,
        cache,
        pubsub,
        importFn
    });
    legacyTransforms[1] = new AutoTypeMergingTransform({
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
    const merger = new BareMerger({
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
                        return printWithCache(GetLiquidityPositionsDocument);
                    },
                    location: 'GetLiquidityPositionsDocument.graphql'
                }
            ];
        },
        fetchFn,
    };
}
export function createBuiltMeshHTTPHandler() {
    return createMeshHTTPHandler({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
let meshInstance$;
export function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
export const execute = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));
export const subscribe = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK(globalContext) {
    const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
    return getSdk((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export const getLiquidityPositionsDocument = gql `
    query getLiquidityPositions($skip: Int = 0, $first: Int = 100, $where: LiquidityPosition_filter) {
  liquidityPositions(skip: $skip, first: $first, where: $where) {
    id
  }
}
    `;
export function getSdk(requester) {
    return {
        getLiquidityPositions(variables, options) {
            return requester(getLiquidityPositionsDocument, variables, options);
        }
    };
}
