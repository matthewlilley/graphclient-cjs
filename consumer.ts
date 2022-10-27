import { getBuiltGraphSDK } from "./.graphclient";

const sdk = getBuiltGraphSDK({
  chainId: 1,
  subgraphName: "sushiswap/exchange",
});

sdk
  .getLiquidityPositions({
    first: 2500,
    skip: 0,
    where: { user: "0x5ad6211cd3fde39a9cecb5df6f380b8263d1e277" },
  })
  .then(({ liquidityPositions }) => {
    console.log(
      "this will succeed and find > 1000 liquidity positions",
      liquidityPositions.length
    );
  });

sdk
  .getLiquidityPositions({
    first: 2500,
    where: { user: "0x5ad6211cd3fde39a9cecb5df6f380b8263d1e277" },
  })
  .catch((error) => {
    console.log("this will fail with error", error);
  });
