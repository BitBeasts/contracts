/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMultiRoyalty, IMultiRoyaltyInterface } from "../IMultiRoyalty";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "multiRoyaltyInfo",
    outputs: [
      {
        internalType: "address[]",
        name: "receivers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "royaltyAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IMultiRoyalty__factory {
  static readonly abi = _abi;
  static createInterface(): IMultiRoyaltyInterface {
    return new utils.Interface(_abi) as IMultiRoyaltyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMultiRoyalty {
    return new Contract(address, _abi, signerOrProvider) as IMultiRoyalty;
  }
}
