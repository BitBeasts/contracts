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

interface IForwarderInterface extends ethers.utils.Interface {
  functions: {
    "canForward(address,bytes)": FunctionFragment;
    "forward(bytes)": FunctionFragment;
    "isForwarder()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canForward",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "forward", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "isForwarder",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "canForward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isForwarder",
    data: BytesLike
  ): Result;

  events: {};
}

export class IForwarder extends BaseContract {
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

  interface: IForwarderInterface;

  functions: {
    canForward(
      sender: string,
      evmCallScript: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    forward(
      evmCallScript: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isForwarder(overrides?: CallOverrides): Promise<[boolean]>;
  };

  canForward(
    sender: string,
    evmCallScript: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  forward(
    evmCallScript: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isForwarder(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    canForward(
      sender: string,
      evmCallScript: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    forward(evmCallScript: BytesLike, overrides?: CallOverrides): Promise<void>;

    isForwarder(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    canForward(
      sender: string,
      evmCallScript: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    forward(
      evmCallScript: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isForwarder(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    canForward(
      sender: string,
      evmCallScript: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    forward(
      evmCallScript: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isForwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
