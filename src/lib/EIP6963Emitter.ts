import {
  announceEip6963Provider,
  createEIP1193Provider,
} from "@dynamic-labs/global-wallet-client/ethereum";
import Wallet from "./wallet";
import { config } from "./config";

export const EIP6963Emitter = () => {
  announceEip6963Provider({
    info: {
      icon: config.walletIcon as any,
      name: config.walletName,
      rdns: config.eip6963.rdns,
      uuid: config.environmentId,
    },
    provider: createEIP1193Provider(Wallet),
  });
};
