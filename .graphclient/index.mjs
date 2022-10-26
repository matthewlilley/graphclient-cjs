import { gql } from '@graphql-mesh/utils';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';
import GraphqlHandler from "@graphql-mesh/graphql";
import PrefixTransform from "@graphql-mesh/transform-prefix";
import AutoPaginationTransform from "@graphprotocol/client-auto-pagination";
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
        case ".graphclient/sources/Exchnage/introspectionSchema.json":
            return import("./sources/Exchnage/introspectionSchema.json");
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
    const exchnageTransforms = [];
    const additionalTypeDefs = [];
    const exchnageHandler = new GraphqlHandler({
        name: "Exchnage",
        config: { "endpoint": "https://api.thegraph.com/subgraphs/name/sushiswap/exchange" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("Exchnage"),
        logger: logger.child("Exchnage"),
        importFn,
    });
    exchnageTransforms[0] = new PrefixTransform({
        apiName: "Exchnage",
        config: { "value": "Exchange_", "includeRootOperations": true },
        baseDir,
        cache,
        pubsub,
        importFn
    });
    exchnageTransforms[1] = new AutoPaginationTransform({
        apiName: "Exchnage",
        config: { "validateSchema": true },
        baseDir,
        cache,
        pubsub,
        importFn
    });
    sources[0] = {
        name: 'Exchnage',
        handler: exchnageHandler,
        transforms: exchnageTransforms
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
                    document: ExchangeLiquidityPositionsDocument,
                    get rawSDL() {
                        return printWithCache(ExchangeLiquidityPositionsDocument);
                    },
                    location: 'ExchangeLiquidityPositionsDocument.graphql'
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
export const ExchangeLiquidityPositionsDocument = gql `
    query ExchangeLiquidityPositions($first: Int = 1000, $skip: Int = 0, $orderBy: Exchange_LiquidityPosition_orderBy, $orderDirection: Exchange_OrderDirection, $where: Exchange_LiquidityPosition_filter, $block: Exchange_Block_height) {
  liquidityPositions: Exchange_liquidityPositions(
    first: $first
    skip: $skip
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    liquidityTokenBalance
    pair {
      id
      totalSupply
      reserveUSD
      token0 {
        id
        symbol
        name
        decimals
      }
      token1 {
        id
        symbol
        name
        decimals
      }
    }
  }
}
    `;
export function getSdk(requester) {
    return {
        ExchangeLiquidityPositions(variables, options) {
            return requester(ExchangeLiquidityPositionsDocument, variables, options);
        }
    };
}
