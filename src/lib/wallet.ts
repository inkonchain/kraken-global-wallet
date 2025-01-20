import {
  createGlobalWalletClient,
  GlobalWalletClient,
} from "@dynamic-labs/global-wallet-client";
import { config } from "./config";

const Wallet: GlobalWalletClient = createGlobalWalletClient({
  environmentId: config.environmentId,
  popup: {
    url: config.walletUrl,
  },
});

export default Wallet;
