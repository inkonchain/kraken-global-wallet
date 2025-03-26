import type { DataURIImage } from "@dynamic-labs/global-wallet-client";

type Config = {
  walletName: string;
  walletIcon: DataURIImage;
  walletUrl: string;
  environmentId: string;
  eip6963: {
    rdns: string;
  };
};

export const config: Config = {
  // Wallet name will be seen as the Wallet name
  walletName: "<wallet-name>",
  // Wallet icon will be seen as the Wallet icon
  walletIcon: "<wallet-icon>",
  // URL of your wallet domain (e.g. https://dynamic.example.com)
  walletUrl: "<wallet-url>",
  // Environment ID of your wallet (e.g. 1234567890)
  environmentId: "<environment-id>",
  // EIP6963 configuration
  eip6963: {
    // RDNS of your wallet (e.g. com.example.wallet)
    rdns: "<rdns>",
  },
};
