# Dynamic Global Wallet Package

This repository provides the base configuration for building a wallet package powered by Dynamic Global Wallet, supporting both EVM and Solana ecosystems.

## Getting Started

Follow these steps to set up your wallet package:

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Your Wallet Package**

   Update the following fields to customize your wallet package:

   ### In `package.json`

   - `wallet-package-name`: Your wallet package’s name.
   - `wallet-description`: A brief description of your wallet.
   - `wallet-author`: The author’s name or organization.

   ### In `src/lib/config.ts`

   - `wallet-name`: Display name of the wallet.
   - `wallet-icon`: URL or base64 encoded image of your wallet’s icon.
   - `wallet-url`: URL of your wallet’s configured domain in the [Dynamic dashboard](https://app.dynamic.xyz/).
   - `environment-id`: Environment ID of your project in the [Dynamic dashboard](https://app.dynamic.xyz/).

Once completed, your wallet package is configured and ready for testing and publishing.

---

## Testing Your Wallet

After configuring your wallet package, test it locally using a Wallet SDK of your choice. This example demonstrates testing with the `create-dynamic-app` package:

1. **Build Your Wallet Package**

   ```bash
   npm run build
   ```

2. **Create a New Project**
   In a separate directory, initialize a new project:

   ```bash
   npx create-dynamic-app@latest
   ```

   Select **ReactJS** or **NextJS** as your project type.

3. **Install Your Wallet Package**

   ```bash
   npm install <path-to-your-wallet-package>
   ```

4. **Import Your Wallet**

   - For **EVM Wallet**:

     ```javascript
     import "<wallet-package-name>/eip6963";
     ```

   - For **Solana Wallet**:
     ```javascript
     import "<wallet-package-name>/solana-standard";
     ```

5. **Use Your Wallet**
   Your wallet is now ready to use within the project.

---

## Publishing Your Wallet

When your wallet package is ready for distribution, follow these steps:

1. **Update Package Version**

   ```bash
   npm version patch  # for bug fixes
   # or
   npm version minor  # for new features
   # or
   npm version major  # for breaking changes
   ```

2. **Build Your Wallet Package**

   ```bash
   npm run build
   ```

3. **Publish Your Wallet Package**
   ```bash
   npm publish
   ```

Ensure your package meets the [npm publishing guidelines](https://docs.npmjs.com/cli/v7/commands/npm-publish) before publishing.

---

For more details or support, refer to the documentation or contact the Dynamic Global Wallet team.
