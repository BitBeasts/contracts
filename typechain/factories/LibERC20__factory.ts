/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibERC20, LibERC20Interface } from "../LibERC20";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a3b91ce603cc268dbe0b50ea647ace12832645056c553c3568df53cfcd50f4d564736f6c63430008010033";

export class LibERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibERC20> {
    return super.deploy(overrides || {}) as Promise<LibERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibERC20 {
    return super.attach(address) as LibERC20;
  }
  connect(signer: Signer): LibERC20__factory {
    return super.connect(signer) as LibERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibERC20Interface {
    return new utils.Interface(_abi) as LibERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibERC20 {
    return new Contract(address, _abi, signerOrProvider) as LibERC20;
  }
}