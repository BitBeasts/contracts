/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LibXPAllocation,
  LibXPAllocationInterface,
} from "../LibXPAllocation";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_xpValues",
        type: "uint256[]",
      },
    ],
    name: "GrantExperience",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_propId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_gotchiId",
        type: "uint256",
      },
    ],
    name: "XPClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_propId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_xpAmount",
        type: "uint256",
      },
    ],
    name: "XPDropCreated",
    type: "event",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201663943d0c9656670a9f1390fd5c0c6367106e6ab423d34c21960d0edd893ba964736f6c63430008010033";

export class LibXPAllocation__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibXPAllocation> {
    return super.deploy(overrides || {}) as Promise<LibXPAllocation>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibXPAllocation {
    return super.attach(address) as LibXPAllocation;
  }
  connect(signer: Signer): LibXPAllocation__factory {
    return super.connect(signer) as LibXPAllocation__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibXPAllocationInterface {
    return new utils.Interface(_abi) as LibXPAllocationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibXPAllocation {
    return new Contract(address, _abi, signerOrProvider) as LibXPAllocation;
  }
}
