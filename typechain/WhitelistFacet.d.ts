/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface WhitelistFacetInterface extends ethers.utils.Interface {
  functions: {
    "createWhitelist(string,address[])": FunctionFragment;
    "getBorrowLimit(uint32)": FunctionFragment;
    "getWhitelist(uint32)": FunctionFragment;
    "getWhitelistAccessRight(uint32,uint256)": FunctionFragment;
    "getWhitelistsLength()": FunctionFragment;
    "isWhitelisted(uint32,address)": FunctionFragment;
    "removeAddressesFromWhitelist(uint32,address[])": FunctionFragment;
    "setBorrowLimit(uint32,uint256)": FunctionFragment;
    "setWhitelistAccessRight(uint32,uint256,uint256)": FunctionFragment;
    "transferOwnershipOfWhitelist(uint32,address)": FunctionFragment;
    "updateWhitelist(uint32,address[])": FunctionFragment;
    "whitelistExists(uint32)": FunctionFragment;
    "whitelistOwner(uint32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createWhitelist",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelist",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelistAccessRight",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelistsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAddressesFromWhitelist",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setBorrowLimit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelistAccessRight",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnershipOfWhitelist",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateWhitelist",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistExists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistOwner",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelistAccessRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelistsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAddressesFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBorrowLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelistAccessRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnershipOfWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistOwner",
    data: BytesLike
  ): Result;

  events: {
    "WhitelistCreated(uint32)": EventFragment;
    "WhitelistOwnershipTransferred(uint32,address)": EventFragment;
    "WhitelistUpdated(uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WhitelistCreated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "WhitelistOwnershipTransferred"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistUpdated"): EventFragment;
}

export type WhitelistCreatedEvent = TypedEvent<
  [number] & { whitelistId: number }
>;

export type WhitelistOwnershipTransferredEvent = TypedEvent<
  [number, string] & { whitelistId: number; newOwner: string }
>;

export type WhitelistUpdatedEvent = TypedEvent<
  [number] & { whitelistId: number }
>;

export class WhitelistFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: WhitelistFacetInterface;

  functions: {
    createWhitelist(
      _name: string,
      _whitelistAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBorrowLimit(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWhitelist(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, string[]] & {
          owner: string;
          name: string;
          addresses: string[];
        }
      ]
    >;

    getWhitelistAccessRight(
      _whitelistId: BigNumberish,
      _actionRight: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWhitelistsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    isWhitelisted(
      _whitelistId: BigNumberish,
      _whitelistAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeAddressesFromWhitelist(
      _whitelistId: BigNumberish,
      _whitelistAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBorrowLimit(
      _whitelistId: BigNumberish,
      _borrowlimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWhitelistAccessRight(
      _whitelistId: BigNumberish,
      _actionRight: BigNumberish,
      _accessRight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnershipOfWhitelist(
      _whitelistId: BigNumberish,
      _whitelistOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateWhitelist(
      _whitelistId: BigNumberish,
      _whitelistAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelistExists(
      whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { exists: boolean }>;

    whitelistOwner(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createWhitelist(
    _name: string,
    _whitelistAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBorrowLimit(
    _whitelistId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWhitelist(
    _whitelistId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string[]] & {
      owner: string;
      name: string;
      addresses: string[];
    }
  >;

  getWhitelistAccessRight(
    _whitelistId: BigNumberish,
    _actionRight: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWhitelistsLength(overrides?: CallOverrides): Promise<BigNumber>;

  isWhitelisted(
    _whitelistId: BigNumberish,
    _whitelistAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeAddressesFromWhitelist(
    _whitelistId: BigNumberish,
    _whitelistAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBorrowLimit(
    _whitelistId: BigNumberish,
    _borrowlimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWhitelistAccessRight(
    _whitelistId: BigNumberish,
    _actionRight: BigNumberish,
    _accessRight: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnershipOfWhitelist(
    _whitelistId: BigNumberish,
    _whitelistOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateWhitelist(
    _whitelistId: BigNumberish,
    _whitelistAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelistExists(
    whitelistId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  whitelistOwner(
    _whitelistId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createWhitelist(
      _name: string,
      _whitelistAddresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    getBorrowLimit(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelist(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string[]] & {
        owner: string;
        name: string;
        addresses: string[];
      }
    >;

    getWhitelistAccessRight(
      _whitelistId: BigNumberish,
      _actionRight: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelistsLength(overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelisted(
      _whitelistId: BigNumberish,
      _whitelistAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeAddressesFromWhitelist(
      _whitelistId: BigNumberish,
      _whitelistAddresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setBorrowLimit(
      _whitelistId: BigNumberish,
      _borrowlimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setWhitelistAccessRight(
      _whitelistId: BigNumberish,
      _actionRight: BigNumberish,
      _accessRight: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnershipOfWhitelist(
      _whitelistId: BigNumberish,
      _whitelistOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateWhitelist(
      _whitelistId: BigNumberish,
      _whitelistAddresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    whitelistExists(
      whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    whitelistOwner(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "WhitelistCreated(uint32)"(
      whitelistId?: BigNumberish | null
    ): TypedEventFilter<[number], { whitelistId: number }>;

    WhitelistCreated(
      whitelistId?: BigNumberish | null
    ): TypedEventFilter<[number], { whitelistId: number }>;

    "WhitelistOwnershipTransferred(uint32,address)"(
      whitelistId?: BigNumberish | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [number, string],
      { whitelistId: number; newOwner: string }
    >;

    WhitelistOwnershipTransferred(
      whitelistId?: BigNumberish | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [number, string],
      { whitelistId: number; newOwner: string }
    >;

    "WhitelistUpdated(uint32)"(
      whitelistId?: BigNumberish | null
    ): TypedEventFilter<[number], { whitelistId: number }>;

    WhitelistUpdated(
      whitelistId?: BigNumberish | null
    ): TypedEventFilter<[number], { whitelistId: number }>;
  };

  estimateGas: {
    createWhitelist(
      _name: string,
      _whitelistAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBorrowLimit(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelist(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelistAccessRight(
      _whitelistId: BigNumberish,
      _actionRight: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelistsLength(overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelisted(
      _whitelistId: BigNumberish,
      _whitelistAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeAddressesFromWhitelist(
      _whitelistId: BigNumberish,
      _whitelistAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBorrowLimit(
      _whitelistId: BigNumberish,
      _borrowlimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWhitelistAccessRight(
      _whitelistId: BigNumberish,
      _actionRight: BigNumberish,
      _accessRight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnershipOfWhitelist(
      _whitelistId: BigNumberish,
      _whitelistOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateWhitelist(
      _whitelistId: BigNumberish,
      _whitelistAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelistExists(
      whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistOwner(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createWhitelist(
      _name: string,
      _whitelistAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBorrowLimit(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWhitelist(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWhitelistAccessRight(
      _whitelistId: BigNumberish,
      _actionRight: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWhitelistsLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      _whitelistId: BigNumberish,
      _whitelistAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeAddressesFromWhitelist(
      _whitelistId: BigNumberish,
      _whitelistAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBorrowLimit(
      _whitelistId: BigNumberish,
      _borrowlimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWhitelistAccessRight(
      _whitelistId: BigNumberish,
      _actionRight: BigNumberish,
      _accessRight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnershipOfWhitelist(
      _whitelistId: BigNumberish,
      _whitelistOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateWhitelist(
      _whitelistId: BigNumberish,
      _whitelistAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelistExists(
      whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistOwner(
      _whitelistId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
