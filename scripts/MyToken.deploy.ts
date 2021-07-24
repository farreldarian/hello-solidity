import { ethers } from "hardhat"

async function main() {
  const [deployer] = await ethers.getSigners()

  const tokenFactory = await ethers.getContractFactory('MyToken', deployer)
  const token = await tokenFactory.deploy()

  await token.deployed()

  console.log('My Token deployed to:', token.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
