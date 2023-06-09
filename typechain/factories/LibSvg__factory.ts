/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibSvg, LibSvgInterface } from "../LibSvg";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "svgType",
            type: "bytes32",
          },
          {
            internalType: "uint256[]",
            name: "sizes",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct LibSvg.SvgTypeAndSizes[]",
        name: "_typesAndSizes",
        type: "tuple[]",
      },
    ],
    name: "StoreSvg",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "svgType",
            type: "bytes32",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "sizes",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct LibSvg.SvgTypeAndIdsAndSizes[]",
        name: "_typesAndIdsAndSizes",
        type: "tuple[]",
      },
    ],
    name: "UpdateSvg",
    type: "event",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e82a4765f70789289992a6212cad34dd539e2308dc5dab0de15878ee0479bd1564736f6c63430008010033";

export class LibSvg__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibSvg> {
    return super.deploy(overrides || {}) as Promise<LibSvg>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibSvg {
    return super.attach(address) as LibSvg;
  }
  connect(signer: Signer): LibSvg__factory {
    return super.connect(signer) as LibSvg__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibSvgInterface {
    return new utils.Interface(_abi) as LibSvgInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): LibSvg {
    return new Contract(address, _abi, signerOrProvider) as LibSvg;
  }
}
