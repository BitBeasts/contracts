/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MiniMeToken, MiniMeTokenInterface } from "../MiniMeToken";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "creationBlock",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newController",
        type: "address",
      },
    ],
    name: "changeController",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_blockNumber",
        type: "uint256",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "version",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_cloneTokenName",
        type: "string",
      },
      {
        name: "_cloneDecimalUnits",
        type: "uint8",
      },
      {
        name: "_cloneTokenSymbol",
        type: "string",
      },
      {
        name: "_snapshotBlock",
        type: "uint256",
      },
      {
        name: "_transfersEnabled",
        type: "bool",
      },
    ],
    name: "createCloneToken",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "parentToken",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "generateTokens",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_blockNumber",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "transfersEnabled",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "parentSnapShotBlock",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
      {
        name: "_extraData",
        type: "bytes",
      },
    ],
    name: "approveAndCall",
    outputs: [
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "destroyTokens",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "remaining",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "claimTokens",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tokenFactory",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_transfersEnabled",
        type: "bool",
      },
    ],
    name: "enableTransfers",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "controller",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_tokenFactory",
        type: "address",
      },
      {
        name: "_parentToken",
        type: "address",
      },
      {
        name: "_parentSnapShotBlock",
        type: "uint256",
      },
      {
        name: "_tokenName",
        type: "string",
      },
      {
        name: "_decimalUnits",
        type: "uint8",
      },
      {
        name: "_tokenSymbol",
        type: "string",
      },
      {
        name: "_transfersEnabled",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_token",
        type: "address",
      },
      {
        indexed: true,
        name: "_controller",
        type: "address",
      },
      {
        indexed: false,
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "ClaimedTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_cloneToken",
        type: "address",
      },
      {
        indexed: false,
        name: "_snapshotBlock",
        type: "uint256",
      },
    ],
    name: "NewCloneToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
];

const _bytecode =
  "0x60c0604052600760808190527f4d4d545f302e310000000000000000000000000000000000000000000000000060a090815262000040916004919062000147565b503480156200004e57600080fd5b5060405162001b0938038062001b098339810160409081528151602080840151928401516060850151608086015160a087015160c088015160008054600160a060020a03191633179055600b8054600160a060020a0389166101000261010060a860020a031990911617905592880180519698949690959294919091019291620000de9160019187019062000147565b506002805460ff191660ff851617905581516200010390600390602085019062000147565b5060058054600160a060020a031916600160a060020a039790971696909617909555505050600655600b805460ff19169115159190911790555043600755620001ec565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200018a57805160ff1916838001178555620001ba565b82800160010185558215620001ba579182015b82811115620001ba5782518255916020019190600101906200019d565b50620001c8929150620001cc565b5090565b620001e991905b80821115620001c85760008155600101620001d3565b90565b61190d80620001fc6000396000f30060806040526004361061012f5763ffffffff60e060020a60003504166306fdde0381146101f2578063095ea7b31461027c57806317634514146102b457806318160ddd146102db57806323b872dd146102f0578063313ce5671461031a5780633cebb823146103455780634ee2cd7e1461036657806354fd4d501461038a5780636638c0871461039f57806370a082311461046257806380a5400114610483578063827f32c01461049857806395d89b41146104bc578063981b24d0146104d1578063a9059cbb146104e9578063bef97c871461050d578063c5bcc4f114610522578063cae9ca5114610537578063d3ce77fe146105a0578063dd62ed3e146105c4578063df8de3e7146105eb578063e77772fe1461060c578063f41e60c514610621578063f77c47911461063b575b60005461014490600160a060020a0316610650565b151561014f57600080fd5b600054604080517ff48c30540000000000000000000000000000000000000000000000000000000081523360048201529051600160a060020a039092169163f48c3054913491602480830192602092919082900301818588803b1580156101b557600080fd5b505af11580156101c9573d6000803e3d6000fd5b50505050506040513d60208110156101e057600080fd5b505115156001146101f057600080fd5b005b3480156101fe57600080fd5b5061020761067d565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610241578181015183820152602001610229565b50505050905090810190601f16801561026e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561028857600080fd5b506102a0600160a060020a036004351660243561070a565b604080519115158252519081900360200190f35b3480156102c057600080fd5b506102c961088b565b60408051918252519081900360200190f35b3480156102e757600080fd5b506102c9610891565b3480156102fc57600080fd5b506102a0600160a060020a03600435811690602435166044356108a2565b34801561032657600080fd5b5061032f610939565b6040805160ff9092168252519081900360200190f35b34801561035157600080fd5b506101f0600160a060020a0360043516610942565b34801561037257600080fd5b506102c9600160a060020a0360043516602435610988565b34801561039657600080fd5b50610207610ad5565b3480156103ab57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261044694369492936024939284019190819084018382808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989b60ff8b35169b909a909994019750919550918201935091508190840183828082843750949750508435955050505050602001351515610b30565b60408051600160a060020a039092168252519081900360200190f35b34801561046e57600080fd5b506102c9600160a060020a0360043516610d96565b34801561048f57600080fd5b50610446610daa565b3480156104a457600080fd5b506102a0600160a060020a0360043516602435610db9565b3480156104c857600080fd5b50610207610e85565b3480156104dd57600080fd5b506102c9600435610ee0565b3480156104f557600080fd5b506102a0600160a060020a0360043516602435610fd4565b34801561051957600080fd5b506102a0610ff3565b34801561052e57600080fd5b506102c9610ffc565b34801561054357600080fd5b50604080516020600460443581810135601f81018490048402850184019095528484526102a0948235600160a060020a03169460248035953695946064949201919081908401838280828437509497506110029650505050505050565b3480156105ac57600080fd5b506102a0600160a060020a036004351660243561111d565b3480156105d057600080fd5b506102c9600160a060020a03600435811690602435166111e5565b3480156105f757600080fd5b506101f0600160a060020a0360043516611210565b34801561061857600080fd5b506104466113f7565b34801561062d57600080fd5b506101f0600435151561140b565b34801561064757600080fd5b50610446611435565b600080600160a060020a038316151561066c5760009150610677565b823b90506000811191505b50919050565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156107025780601f106106d757610100808354040283529160200191610702565b820191906000526020600020905b8154815290600101906020018083116106e557829003601f168201915b505050505081565b600b5460009060ff16151561071e57600080fd5b81158061074c5750336000908152600960209081526040808320600160a060020a0387168452909152902054155b151561075757600080fd5b60005461076c90600160a060020a0316610650565b156108235760008054604080517fda682aeb000000000000000000000000000000000000000000000000000000008152336004820152600160a060020a038781166024830152604482018790529151919092169263da682aeb92606480820193602093909283900390910190829087803b1580156107e957600080fd5b505af11580156107fd573d6000803e3d6000fd5b505050506040513d602081101561081357600080fd5b5051151560011461082357600080fd5b336000818152600960209081526040808320600160a060020a03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b60075481565b600061089c43610ee0565b90505b90565b60008054600160a060020a0316331461092457600b5460ff1615156108c657600080fd5b600160a060020a03841660009081526009602090815260408083203384529091529020548211156108f957506000610932565b600160a060020a03841660009081526009602090815260408083203384529091529020805483900390555b61092f848484611444565b90505b9392505050565b60025460ff1681565b600054600160a060020a0316331461095957600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600160a060020a03821660009081526008602052604081205415806109e45750600160a060020a0383166000908152600860205260408120805484929081106109cd57fe5b6000918252602090912001546001608060020a0316115b15610aac57600554600160a060020a031615610aa457600554600654600160a060020a0390911690634ee2cd7e908590610a1f908690611639565b6040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b158015610a7157600080fd5b505af1158015610a85573d6000803e3d6000fd5b505050506040513d6020811015610a9b57600080fd5b50519050610885565b506000610885565b600160a060020a0383166000908152600860205260409020610ace908361164f565b9050610885565b6004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156107025780601f106106d757610100808354040283529160200191610702565b600080808415610b405784610b45565b600143035b600b546040517f5b7b72c100000000000000000000000000000000000000000000000000000000815230600482018181526024830185905260ff8c16606484015288151560a484015260c0604484019081528d5160c48501528d51959750610100909404600160a060020a031694635b7b72c194929388938f938f938f938e9391608482019160e40190602089019080838360005b83811015610bf2578181015183820152602001610bda565b50505050905090810190601f168015610c1f5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610c52578181015183820152602001610c3a565b50505050905090810190601f168015610c7f5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b158015610ca457600080fd5b505af1158015610cb8573d6000803e3d6000fd5b505050506040513d6020811015610cce57600080fd5b5051604080517f3cebb8230000000000000000000000000000000000000000000000000000000081523360048201529051919250600160a060020a03831691633cebb8239160248082019260009290919082900301818387803b158015610d3457600080fd5b505af1158015610d48573d6000803e3d6000fd5b5050604080518581529051600160a060020a03851693507f086c875b377f900b07ce03575813022f05dd10ed7640b5282cf6d3c3fc352ade92509081900360200190a2979650505050505050565b6000610da28243610988565b90505b919050565b600554600160a060020a031681565b6000805481908190600160a060020a03163314610dd557600080fd5b610ddd610891565b9150838201821115610dee57600080fd5b610df785610d96565b9050838101811115610e0857600080fd5b610e15600a8584016117ae565b600160a060020a0385166000908152600860205260409020610e39908286016117ae565b604080518581529051600160a060020a038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3506001949350505050565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156107025780601f106106d757610100808354040283529160200191610702565b600a546000901580610f15575081600a6000815481101515610efe57fe5b6000918252602090912001546001608060020a0316115b15610fc257600554600160a060020a031615610fba57600554600654600160a060020a039091169063981b24d090610f4e908590611639565b6040518263ffffffff1660e060020a02815260040180828152602001915050602060405180830381600087803b158015610f8757600080fd5b505af1158015610f9b573d6000803e3d6000fd5b505050506040513d6020811015610fb157600080fd5b50519050610da5565b506000610da5565b610fcd600a8361164f565b9050610da5565b600b5460009060ff161515610fe857600080fd5b610932338484611444565b600b5460ff1681565b60065481565b600061100e848461070a565b151561101957600080fd5b6040517f8f4ffcb10000000000000000000000000000000000000000000000000000000081523360048201818152602483018690523060448401819052608060648501908152865160848601528651600160a060020a038a1695638f4ffcb195948a94938a939192909160a490910190602085019080838360005b838110156110ac578181015183820152602001611094565b50505050905090810190601f1680156110d95780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156110fb57600080fd5b505af115801561110f573d6000803e3d6000fd5b506001979650505050505050565b6000805481908190600160a060020a0316331461113957600080fd5b611141610891565b91508382101561115057600080fd5b61115985610d96565b90508381101561116857600080fd5b611175600a8584036117ae565b600160a060020a0385166000908152600860205260409020611199908583036117ae565b604080518581529051600091600160a060020a038816917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3506001949350505050565b600160a060020a03918216600090815260096020908152604080832093909416825291909152205490565b600080548190600160a060020a0316331461122a57600080fd5b600160a060020a038316151561127b5760008054604051600160a060020a0390911691303180156108fc02929091818181858888f19350505050158015611275573d6000803e3d6000fd5b506113f2565b604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051849350600160a060020a038416916370a082319160248083019260209291908290030181600087803b1580156112df57600080fd5b505af11580156112f3573d6000803e3d6000fd5b505050506040513d602081101561130957600080fd5b505160008054604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0392831660048201526024810185905290519394509085169263a9059cbb92604480840193602093929083900390910190829087803b15801561137f57600080fd5b505af1158015611393573d6000803e3d6000fd5b505050506040513d60208110156113a957600080fd5b5050600054604080518381529051600160a060020a03928316928616917ff931edb47c50b4b4104c187b5814a9aef5f709e17e2ecf9617e860cacade929c919081900360200190a35b505050565b600b546101009004600160a060020a031681565b600054600160a060020a0316331461142257600080fd5b600b805460ff1916911515919091179055565b600054600160a060020a031681565b600080808315156114585760019250611630565b600654431161146657600080fd5b600160a060020a038516158015906114875750600160a060020a0385163014155b151561149257600080fd5b61149c8643610988565b9150838210156114af5760009250611630565b6000546114c490600160a060020a0316610650565b1561157d5760008054604080517f4a393149000000000000000000000000000000000000000000000000000000008152600160a060020a038a8116600483015289811660248301526044820189905291519190921692634a39314992606480820193602093909283900390910190829087803b15801561154357600080fd5b505af1158015611557573d6000803e3d6000fd5b505050506040513d602081101561156d57600080fd5b5051151560011461157d57600080fd5b600160a060020a03861660009081526008602052604090206115a1908584036117ae565b6115ab8543610988565b90508381018111156115bc57600080fd5b600160a060020a03851660009081526008602052604090206115e0908286016117ae565b84600160a060020a031686600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a3600192505b50509392505050565b60008183106116485781610932565b5090919050565b60008060008085805490506000141561166b57600093506117a5565b85548690600019810190811061167d57fe5b6000918252602090912001546001608060020a031685106116da578554869060001981019081106116aa57fe5b60009182526020909120015470010000000000000000000000000000000090046001608060020a031693506117a5565b8560008154811015156116e957fe5b6000918252602090912001546001608060020a031685101561170e57600093506117a5565b8554600093506000190191505b8282111561176b57600260018385010104905084868281548110151561173d57fe5b6000918252602090912001546001608060020a03161161175f57809250611766565b6001810391505b61171b565b858381548110151561177957fe5b60009182526020909120015470010000000000000000000000000000000090046001608060020a031693505b50505092915050565b8154600090819015806117e7575083544390859060001981019081106117d057fe5b6000918252602090912001546001608060020a0316105b1561185957835484906117fd82600183016118a4565b8154811061180757fe5b600091825260209091200180546001608060020a03858116700100000000000000000000000000000000024382166fffffffffffffffffffffffffffffffff199093169290921716178155915061189e565b83548490600019810190811061186b57fe5b600091825260209091200180546001608060020a0380861670010000000000000000000000000000000002911617815590505b50505050565b8154818355818111156113f2576000838152602090206113f291810190830161089f91905b808211156118dd57600081556001016118c9565b50905600a165627a7a72305820f8f1c9af386780a92bb02da7031658e5b817f8b8adb36f1b87eb2b323d1aeb420029";

export class MiniMeToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tokenFactory: string,
    _parentToken: string,
    _parentSnapShotBlock: BigNumberish,
    _tokenName: string,
    _decimalUnits: BigNumberish,
    _tokenSymbol: string,
    _transfersEnabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MiniMeToken> {
    return super.deploy(
      _tokenFactory,
      _parentToken,
      _parentSnapShotBlock,
      _tokenName,
      _decimalUnits,
      _tokenSymbol,
      _transfersEnabled,
      overrides || {}
    ) as Promise<MiniMeToken>;
  }
  getDeployTransaction(
    _tokenFactory: string,
    _parentToken: string,
    _parentSnapShotBlock: BigNumberish,
    _tokenName: string,
    _decimalUnits: BigNumberish,
    _tokenSymbol: string,
    _transfersEnabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenFactory,
      _parentToken,
      _parentSnapShotBlock,
      _tokenName,
      _decimalUnits,
      _tokenSymbol,
      _transfersEnabled,
      overrides || {}
    );
  }
  attach(address: string): MiniMeToken {
    return super.attach(address) as MiniMeToken;
  }
  connect(signer: Signer): MiniMeToken__factory {
    return super.connect(signer) as MiniMeToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MiniMeTokenInterface {
    return new utils.Interface(_abi) as MiniMeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MiniMeToken {
    return new Contract(address, _abi, signerOrProvider) as MiniMeToken;
  }
}