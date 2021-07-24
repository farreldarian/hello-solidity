import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import '@nomiclabs/hardhat-etherscan'
import 'hardhat-gas-reporter'
import { HardhatUserConfig, task } from 'hardhat/config'

require('dotenv').config()

const PRIVATE_KEY = process.env.PRIVATE_KEY || ''
const PROVIDER_API = process.env.PROVIDER_API || ''

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.4',
    settings: { optimizer: { enabled: true, runs: 200 } },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS?.toLowerCase() === 'true' ? true : false,
    currency: 'USD',
    coinmarketcap: process.env.COINMARKETCAP_API,
  },
  etherscan: { apiKey: process.env.ETHERSCAN_API },
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${PROVIDER_API}`,
      accounts: [PRIVATE_KEY],
    },
  }
}

export default config
