/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WearableSetsFacet,
  WearableSetsFacetInterface,
} from "../WearableSetsFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_wearableIds",
        type: "uint256[]",
      },
    ],
    name: "findWearableSets",
    outputs: [
      {
        internalType: "uint256[]",
        name: "wearableSetIds_",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getWearableSet",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint8[]",
            name: "allowedCollaterals",
            type: "uint8[]",
          },
          {
            internalType: "uint16[]",
            name: "wearableIds",
            type: "uint16[]",
          },
          {
            internalType: "int8[5]",
            name: "traitsBonuses",
            type: "int8[5]",
          },
        ],
        internalType: "struct WearableSet",
        name: "wearableSet_",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWearableSets",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint8[]",
            name: "allowedCollaterals",
            type: "uint8[]",
          },
          {
            internalType: "uint16[]",
            name: "wearableIds",
            type: "uint16[]",
          },
          {
            internalType: "int8[5]",
            name: "traitsBonuses",
            type: "int8[5]",
          },
        ],
        internalType: "struct WearableSet[]",
        name: "wearableSets_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalWearableSets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b13806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806349f7edd2146100515780636ce624ed1461006f578063ab6f446d14610084578063efa787e0146100a4575b600080fd5b6100596100c4565b6040516100669190610a99565b60405180910390f35b6100776100ca565b6040516100669190610994565b6100976100923660046107c3565b610312565b60405161006691906109f4565b6100b76100b2366004610832565b61051c565b6040516100669190610a7f565b60075490565b60606000600701805480602002602001604051908101604052809291908181526020016000905b82821015610309578382906000526020600020906004020160405180608001604052908160008201805461012490610aa2565b80601f016020809104026020016040519081016040528092919081815260200182805461015090610aa2565b801561019d5780601f106101725761010080835404028352916020019161019d565b820191906000526020600020905b81548152906001019060200180831161018057829003601f168201915b505050505081526020016001820180548060200260200160405190810160405280929190818152602001828054801561021357602002820191906000526020600020906000905b825461010083900a900460ff168152602060019283018181049485019490930390920291018084116101e45790505b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561029357602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff168152602001906002019060208260010104928301926001038202915080841161025a5790505b50505091835250506040805160a0810191829052602090920191906003840190600590826000855b82829054906101000a900460000b60000b815260200190600101906020826000010492830192600103820291508084116102bb579050505050505081525050815260200190600101906100f1565b50505050905090565b6007546060908067ffffffffffffffff81111561033f57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610368578160200160208202803683370190505b5091506000805b8281101561051257600080600701828154811061039c57634e487b7160e01b600052603260045260246000fd5b906000526020600020906004020160020180548060200260200160405190810160405280929190818152602001828054801561041f57602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116103e65790505b5050505050905060006001905060005b82518110156104ce57600083828151811061045a57634e487b7160e01b600052603260045260246000fd5b602002602001015161ffff1690506000805b8a8110156104b357828c8c8381811061049557634e487b7160e01b600052603260045260246000fd5b9050602002013514156104ab57600191506104b3565b60010161046c565b50806104c4576000935050506104ce565b505060010161042f565b50801561050857828685815181106104f657634e487b7160e01b600052603260045260246000fd5b60209081029190910101526001909301925b505060010161036f565b5082525092915050565b610524610778565b60075480831061054f5760405162461bcd60e51b815260040161054690610a38565b60405180910390fd5b600780548490811061057157634e487b7160e01b600052603260045260246000fd5b906000526020600020906004020160405180608001604052908160008201805461059a90610aa2565b80601f01602080910402602001604051908101604052809291908181526020018280546105c690610aa2565b80156106135780601f106105e857610100808354040283529160200191610613565b820191906000526020600020905b8154815290600101906020018083116105f657829003601f168201915b505050505081526020016001820180548060200260200160405190810160405280929190818152602001828054801561068957602002820191906000526020600020906000905b825461010083900a900460ff1681526020600192830181810494850194909303909202910180841161065a5790505b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561070957602002820191906000526020600020906000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116106d05790505b50505091835250506040805160a0810191829052602090920191906003840190600590826000855b82829054906101000a900460000b60000b81526020019060010190602082600001049283019260010382029150808411610731579050505050505081525050915050919050565b60405180608001604052806060815260200160608152602001606081526020016107a06107a5565b905290565b6040518060a001604052806005906020820280368337509192915050565b600080602083850312156107d5578182fd5b823567ffffffffffffffff808211156107ec578384fd5b818501915085601f8301126107ff578384fd5b81358181111561080d578485fd5b8660208083028501011115610820578485fd5b60209290920196919550909350505050565b600060208284031215610843578081fd5b5035919050565b806000805b6005811015610870578251820b85526020948501949092019160010161084f565b5050505050565b6000815180845260208085019450808401835b838110156108aa57815161ffff168752958201959082019060010161088a565b509495945050505050565b6000815180845260208085019450808401835b838110156108aa57815160ff16875295820195908201906001016108c8565b60006101008251818552805180838701528392505b8083101561091e576020838301015161012084880101526020830192506108fc565b80831115610930578361012082880101525b601f19601f82011686019250505061012060208401518186840301602087015261095c828401826108b5565b92505050604083015184820360408601526109778282610877565b915050606083015161098c606086018261084a565b509392505050565b6000602080830181845280855180835260408601915060408482028701019250838701855b828110156109e757603f198886030184526109d58583516108e7565b945092850192908501906001016109b9565b5092979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610a2c57835183529284019291840191600101610a10565b50909695505050505050565b60208082526027908201527f4974656d7346616365743a205765617261626c652073657420646f6573206e6f6040820152661d08195e1a5cdd60ca1b606082015260800190565b600060208252610a9260208301846108e7565b9392505050565b90815260200190565b600281046001821680610ab657607f821691505b60208210811415610ad757634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220d280450cd0f96e785b35a5b60861c50f34f1b1541230b43bb16c5259e89eb0bd64736f6c63430008010033";

export class WearableSetsFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WearableSetsFacet> {
    return super.deploy(overrides || {}) as Promise<WearableSetsFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WearableSetsFacet {
    return super.attach(address) as WearableSetsFacet;
  }
  connect(signer: Signer): WearableSetsFacet__factory {
    return super.connect(signer) as WearableSetsFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WearableSetsFacetInterface {
    return new utils.Interface(_abi) as WearableSetsFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WearableSetsFacet {
    return new Contract(address, _abi, signerOrProvider) as WearableSetsFacet;
  }
}
