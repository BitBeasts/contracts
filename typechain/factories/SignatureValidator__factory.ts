/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SignatureValidator,
  SignatureValidatorInterface,
} from "../SignatureValidator";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "ERC1271_RETURN_VALID_SIGNATURE",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e561002f600b82828239805160001a6073146000811461001f57610021565bfe5b5030600052607381538281f300730000000000000000000000000000000000000000301460806040526004361060555763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639890cdca8114605a575b600080fd5b60606095565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b7f20c13b0b00000000000000000000000000000000000000000000000000000000815600a165627a7a72305820d9a8d3b94e375c28bd5b04b0ab5c85238f5a34339052be0d6d975f123af22b610029";

export class SignatureValidator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SignatureValidator> {
    return super.deploy(overrides || {}) as Promise<SignatureValidator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SignatureValidator {
    return super.attach(address) as SignatureValidator;
  }
  connect(signer: Signer): SignatureValidator__factory {
    return super.connect(signer) as SignatureValidator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignatureValidatorInterface {
    return new utils.Interface(_abi) as SignatureValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignatureValidator {
    return new Contract(address, _abi, signerOrProvider) as SignatureValidator;
  }
}