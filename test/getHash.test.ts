
import { ethers } from "hardhat";
import { expect } from "chai";
import { advanceBlockTo } from "./utilities"

describe("getHash", function () {
  before(async function () {

    this.getHash = await ethers.getContractFactory("getHash")
  })

  beforeEach(async function () {
    this.getHash = await this.getHash.deploy()
    await this.getHash.deployed()
  })

  it("should set correct state variables", async function () {

    const codeHash = await this.getHash.getInitHash()
    console.log(codeHash);
  })
})
