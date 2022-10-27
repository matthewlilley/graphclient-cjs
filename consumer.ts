import { getBuiltGraphSDK } from "./.graphclient";
import chalk from "chalk";

const log = (...text: any[]) => console.log(chalk.blue(text));

const sdk = getBuiltGraphSDK({
  chainId: 1,
  subgraphName: "sushiswap/exchange",
});

sdk
  .getLiquidityPositions({
    first: 2500,
    where: { user: "0x5ad6211cd3fde39a9cecb5df6f380b8263d1e277" },
  })
  .catch(() => {
    log("without skip set initially it fails");
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
