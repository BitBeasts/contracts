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

interface BridgeFacetInterface extends ethers.utils.Interface {
  functions: {
    "childChainManager()": FunctionFragment;
    "deposit(address,bytes)": FunctionFragment;
    "setChildChainManager(address)": FunctionFragment;
    "withdrawAavegotchiBatch(uint256[])": FunctionFragment;
    "withdrawItemsBatch(uint256[],uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "childChainManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setChildChainManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAavegotchiBatch",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawItemsBatch",
    values: [BigNumberish[], BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "childChainManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setChildChainManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAavegotchiBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawItemsBatch",
    data: BytesLike
  ): Result;

  events: {
    "AddedAavegotchiBatch(address,uint256[])": EventFragment;
    "AddedItemsBatch(address,uint256[],uint256[])": EventFragment;
    "WithdrawnBatch(address,uint256[])": EventFragment;
    "WithdrawnItems(address,uint256[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedAavegotchiBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddedItemsBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawnBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawnItems"): EventFragment;
}

export type AddedAavegotchiBatchEvent = TypedEvent<
  [string, BigNumber[]] & { owner: string; tokenIds: BigNumber[] }
>;

export type AddedItemsBatchEvent = TypedEvent<
  [string, BigNumber[], BigNumber[]] & {
    owner: string;
    ids: BigNumber[];
    values: BigNumber[];
  }
>;

export type WithdrawnBatchEvent = TypedEvent<
  [string, BigNumber[]] & { owner: string; tokenIds: BigNumber[] }
>;

export type WithdrawnItemsEvent = TypedEvent<
  [string, BigNumber[], BigNumber[]] & {
    owner: string;
    ids: BigNumber[];
    values: BigNumber[];
  }
>;

export class BridgeFacet extends BaseContract {
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

  interface: BridgeFacetInterface;

  functions: {
    childChainManager(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      _user: string,
      _depositData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setChildChainManager(
      _newChildChainManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawAavegotchiBatch(
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawItemsBatch(
      _ids: BigNumberish[],
      _values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  childChainManager(overrides?: CallOverrides): Promise<string>;

  deposit(
    _user: string,
    _depositData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setChildChainManager(
    _newChildChainManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawAavegotchiBatch(
    _tokenIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawItemsBatch(
    _ids: BigNumberish[],
    _values: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    childChainManager(overrides?: CallOverrides): Promise<string>;

    deposit(
      _user: string,
      _depositData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setChildChainManager(
      _newChildChainManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAavegotchiBatch(
      _tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawItemsBatch(
      _ids: BigNumberish[],
      _values: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddedAavegotchiBatch(address,uint256[])"(
      owner?: string | null,
      tokenIds?: null
    ): TypedEventFilter<
      [string, BigNumber[]],
      { owner: string; tokenIds: BigNumber[] }
    >;

    AddedAavegotchiBatch(
      owner?: string | null,
      tokenIds?: null
    ): TypedEventFilter<
      [string, BigNumber[]],
      { owner: string; tokenIds: BigNumber[] }
    >;

    "AddedItemsBatch(address,uint256[],uint256[])"(
      owner?: string | null,
      ids?: null,
      values?: null
    ): TypedEventFilter<
      [string, BigNumber[], BigNumber[]],
      { owner: string; ids: BigNumber[]; values: BigNumber[] }
    >;

    AddedItemsBatch(
      owner?: string | null,
      ids?: null,
      values?: null
    ): TypedEventFilter<
      [string, BigNumber[], BigNumber[]],
      { owner: string; ids: BigNumber[]; values: BigNumber[] }
    >;

    "WithdrawnBatch(address,uint256[])"(
      owner?: string | null,
      tokenIds?: null
    ): TypedEventFilter<
      [string, BigNumber[]],
      { owner: string; tokenIds: BigNumber[] }
    >;

    WithdrawnBatch(
      owner?: string | null,
      tokenIds?: null
    ): TypedEventFilter<
      [string, BigNumber[]],
      { owner: string; tokenIds: BigNumber[] }
    >;

    "WithdrawnItems(address,uint256[],uint256[])"(
      owner?: string | null,
      ids?: null,
      values?: null
    ): TypedEventFilter<
      [string, BigNumber[], BigNumber[]],
      { owner: string; ids: BigNumber[]; values: BigNumber[] }
    >;

    WithdrawnItems(
      owner?: string | null,
      ids?: null,
      values?: null
    ): TypedEventFilter<
      [string, BigNumber[], BigNumber[]],
      { owner: string; ids: BigNumber[]; values: BigNumber[] }
    >;
  };

  estimateGas: {
    childChainManager(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _user: string,
      _depositData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setChildChainManager(
      _newChildChainManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawAavegotchiBatch(
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawItemsBatch(
      _ids: BigNumberish[],
      _values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    childChainManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _user: string,
      _depositData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setChildChainManager(
      _newChildChainManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawAavegotchiBatch(
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawItemsBatch(
      _ids: BigNumberish[],
      _values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
