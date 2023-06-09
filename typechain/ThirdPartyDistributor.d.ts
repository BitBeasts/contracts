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

interface ThirdPartyDistributorInterface extends ethers.utils.Interface {
  functions: {
    "beneficiaryDistribution(address)": FunctionFragment;
    "distributions(uint256)": FunctionFragment;
    "isBeneficiary(address)": FunctionFragment;
    "numBeneficiaries()": FunctionFragment;
    "owner()": FunctionFragment;
    "partialReleaseToken(address,uint256)": FunctionFragment;
    "partialReleaseTokens(tuple[])": FunctionFragment;
    "releaseAccess()": FunctionFragment;
    "releaseToken(address)": FunctionFragment;
    "releaseTokens(address[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateDistribution(tuple[])": FunctionFragment;
    "updateReleaseAccess(uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "beneficiaryDistribution",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "distributions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isBeneficiary",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "numBeneficiaries",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "partialReleaseToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "partialReleaseTokens",
    values: [{ token: string; amount: BigNumberish }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseAccess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "releaseToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseTokens",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDistribution",
    values: [{ beneficiary: string; proportion: BigNumberish }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateReleaseAccess",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "beneficiaryDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numBeneficiaries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "partialReleaseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "partialReleaseTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateReleaseAccess",
    data: BytesLike
  ): Result;

  events: {
    "DistributionsUpdated()": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokensReleased(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DistributionsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensReleased"): EventFragment;
}

export type DistributionsUpdatedEvent = TypedEvent<[] & {}>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type TokensReleasedEvent = TypedEvent<
  [string, BigNumber] & { token: string; amount: BigNumber }
>;

export class ThirdPartyDistributor extends BaseContract {
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

  interface: ThirdPartyDistributorInterface;

  functions: {
    beneficiaryDistribution(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<
      [[string, number] & { beneficiary: string; proportion: number }] & {
        distribution: [string, number] & {
          beneficiary: string;
          proportion: number;
        };
      }
    >;

    distributions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, number] & { beneficiary: string; proportion: number }>;

    isBeneficiary(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    numBeneficiaries(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    partialReleaseToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    partialReleaseTokens(
      _params: { token: string; amount: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    releaseAccess(overrides?: CallOverrides): Promise<[number]>;

    releaseToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    releaseTokens(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateDistribution(
      _distributions: { beneficiary: string; proportion: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateReleaseAccess(
      _releaseAccess: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  beneficiaryDistribution(
    _beneficiary: string,
    overrides?: CallOverrides
  ): Promise<[string, number] & { beneficiary: string; proportion: number }>;

  distributions(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, number] & { beneficiary: string; proportion: number }>;

  isBeneficiary(
    _beneficiary: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  numBeneficiaries(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  partialReleaseToken(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  partialReleaseTokens(
    _params: { token: string; amount: BigNumberish }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  releaseAccess(overrides?: CallOverrides): Promise<number>;

  releaseToken(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  releaseTokens(
    _tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateDistribution(
    _distributions: { beneficiary: string; proportion: BigNumberish }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateReleaseAccess(
    _releaseAccess: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    beneficiaryDistribution(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[string, number] & { beneficiary: string; proportion: number }>;

    distributions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, number] & { beneficiary: string; proportion: number }>;

    isBeneficiary(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    numBeneficiaries(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    partialReleaseToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    partialReleaseTokens(
      _params: { token: string; amount: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<void>;

    releaseAccess(overrides?: CallOverrides): Promise<number>;

    releaseToken(_token: string, overrides?: CallOverrides): Promise<void>;

    releaseTokens(_tokens: string[], overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateDistribution(
      _distributions: { beneficiary: string; proportion: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateReleaseAccess(
      _releaseAccess: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DistributionsUpdated()"(): TypedEventFilter<[], {}>;

    DistributionsUpdated(): TypedEventFilter<[], {}>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "TokensReleased(address,uint256)"(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    TokensReleased(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    beneficiaryDistribution(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    distributions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBeneficiary(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numBeneficiaries(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    partialReleaseToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    partialReleaseTokens(
      _params: { token: string; amount: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    releaseAccess(overrides?: CallOverrides): Promise<BigNumber>;

    releaseToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    releaseTokens(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateDistribution(
      _distributions: { beneficiary: string; proportion: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateReleaseAccess(
      _releaseAccess: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    beneficiaryDistribution(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    distributions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBeneficiary(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numBeneficiaries(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    partialReleaseToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    partialReleaseTokens(
      _params: { token: string; amount: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    releaseAccess(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    releaseToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    releaseTokens(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateDistribution(
      _distributions: { beneficiary: string; proportion: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateReleaseAccess(
      _releaseAccess: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}