# Eth Safe Ownership Proof

Eth Safe Ownership Proof is a Node.js library that allows you to safely verify the ownership of an Ethereum wallet. It does this by generating a unique authentication code for a given Ethereum wallet address and checking if this code appears in the user's OpenSea bio, making the verification process safe and risk-free as it does not require any wallet connection or Ethereum message signing.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Eth Safe Ownership Proof.

```bash
npm install eth-safe-ownership-proof
```

## Usage

```javascript
const EthSafeOwnershipProof = require('eth-safe-ownership-proof');

const ethOwnershipProof = new EthSafeOwnershipProof({
  authRetryInterval: 30,  // Optional. Default is 30 seconds.
  authMaxRetries: 10  // Optional. Default is 10 retries.
});

const walletAddress = "0xAbC...";

// Generate a unique authentication code for the given wallet address
const authCode = ethOwnershipProof.generateUniqueCode(walletAddress);
console.log(authCode);  // Outputs the generated authentication code.

// Verify the ownership of the wallet address
const isOwner = await ethOwnershipProof.verifyAuthCode(walletAddress);
console.log(isOwner);  // Outputs true if the wallet address owner is verified, false otherwise.
```

## Issues and Contributions

Please report any issues you find. Contributions are very welcome – just make a pull request with a detailed description of your changes!

## License

Eth Safe Ownership Proof is licensed under the [MIT License](https://raw.githubusercontent.com/git/git-scm.com/main/MIT-LICENSE.txt).