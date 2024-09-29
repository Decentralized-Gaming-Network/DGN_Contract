import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

// Load environment variables
const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    // Sepolia testnet configuration
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    // Ethereum mainnet configuration
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

export default config;
