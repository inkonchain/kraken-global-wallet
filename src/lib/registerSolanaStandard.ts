import { registerWallet } from "@wallet-standard/wallet";
import Wallet from "./wallet";
import { createSolanaWallet } from "@dynamic-labs/global-wallet-client/solana";
import { config } from "./config";

export const registerSolanaStandard = () => {
  registerWallet(
    createSolanaWallet(
      {
        icon: config.walletIcon as any,
        name: config.walletName,
      },
      Wallet
    )
  );
};
