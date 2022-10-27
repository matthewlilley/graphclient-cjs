const { getBuiltGraphSDK } = require("./.graphclient");

const chalk = require("chalk");

const log = (...text) => console.log(chalk.blue(text));

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
    log(
      "this will succeed and find > 1000 liquidity positions",
      liquidityPositions.length
    );
  });
