import { expect } from "chai"
import { BigNumber } from "ethers"
import { parseEther } from "ethers/lib/utils"
import { ethers } from "hardhat"
import { MyToken } from "../typechain"

describe("Contract: MyToken", function () {

  let token: MyToken

  beforeEach(async function () {
    const [deployer] = await ethers.getSigners()

    const tokenFactory = await ethers.getContractFactory('MyToken', deployer)
    token = await tokenFactory.deploy()

    await token.deployed()
  })

  it('has correct name', async function () {
    expect(await token.name()).to.be.equal('My First Token')
  })

  it('has correct symbol', async function () {
    expect(await token.symbol()).to.be.equal('FIRST')
  })

  it('has correct initial supply', async function () {
    const initialSupply = BigNumber.from(parseEther('1000000'))
    expect(await token.totalSupply()).to.be.equal(initialSupply)
  })
})