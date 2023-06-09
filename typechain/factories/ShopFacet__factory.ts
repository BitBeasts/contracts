/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ShopFacet, ShopFacetInterface } from "../ShopFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_numAavegotchisToPurchase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalPrice",
        type: "uint256",
      },
    ],
    name: "BuyPortals",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_numAavegotchisToPurchase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_hauntId",
        type: "uint256",
      },
    ],
    name: "MintPortals",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalPrice",
        type: "uint256",
      },
    ],
    name: "PurchaseItemsWithGhst",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
    ],
    name: "PurchaseItemsWithVouchers",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalPrice",
        type: "uint256",
      },
    ],
    name: "PurchaseTransferItemsWithGhst",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ghst",
        type: "uint256",
      },
    ],
    name: "buyPortals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintPortals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
    ],
    name: "purchaseItemsWithGhst",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
    ],
    name: "purchaseTransferItemsWithGhst",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612632806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063432788ec1461005157806343866f1814610066578063e0a7694714610079578063ebdc3b581461008c575b600080fd5b61006461005f366004611cad565b61009f565b005b610064610074366004611d2b565b6103ca565b610064610087366004611d2b565b610776565b61006461009a366004611cad565b610c95565b6001600160a01b0385166100ce5760405162461bcd60e51b81526004016100c5906120c9565b60405180910390fd5b8281146100ed5760405162461bcd60e51b81526004016100c590612436565b60006100f7610f9b565b9050306000805b8681101561023157600088888381811061012857634e487b7160e01b600052603260045260246000fd5b905060200201359050600087878481811061015357634e487b7160e01b600052603260045260246000fd5b9050602002013590508060011461017c5760405162461bcd60e51b81526004016100c5906123a2565b60008060060183815481106101a157634e487b7160e01b600052603260045260246000fd5b90600052602060002090600b0201905080600a0160059054906101000a900460ff166101df5760405162461bcd60e51b81526004016100c59061247e565b60078101546101ee9083612545565b6101f8908661250d565b9450610205868484610ff8565b6102108c8484611238565b61021b3084886112fd565b5050508080610229906125a7565b9150506100fe565b50601a546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610263908790600401611e49565b60206040518083038186803b15801561027b57600080fd5b505afa15801561028f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b39190611da3565b9050818110156102d55760405162461bcd60e51b81526004016100c5906123ff565b60525460405163319f54d560e21b81526001600160a01b039091169063c67d53549061031190879087908e908e908e908e908e90600401611e5d565b600060405180830381600087803b15801561032b57600080fd5b505af115801561033f573d6000803e3d6000fd5b50505050886001600160a01b0316846001600160a01b03167f858b3826e75d12c99fa27247519bdea4601f307a8c210c116543e57492d1d8b38a8a8a8a8860405161038e959493929190611f44565b60405180910390a36103a084836114ac565b6103bf84848b8b8b8b8b604051806020016040528060008152506115a1565b505050505050505050565b60006103d4610f9b565b6001600160a01b0381166000908152603b602052604090205490915060ff1615156001146104145760405162461bcd60e51b81526004016100c590612209565b601654640100000000900461ffff1660008181526008602052604081209061043a610f9b565b600283015490915060009061045c9087906301000000900462ffffff1661250d565b83549091508111156104805760405162461bcd60e51b81526004016100c590612345565b60008481526008602052604090819020600201805465ffffff0000001916630100000062ffffff851602179055601654905163ffffffff909116906001600160a01b0389811691908516907f37ed022e6a9e96b48e8e674a56024bab7ba853d84eeeff6c1d7fcdba345a9d2e906104fc9085908c908b906124ef565b60405180910390a360005b8781101561075257886000600d0160008463ffffffff168152602001908152602001600020600a0160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550856000600d0160008463ffffffff168152602001908152602001600020600901601e6101000a81548161ffff021916908361ffff160217905550600060100180549050600060110160008463ffffffff1681526020019081526020016000208190555060006010018290806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff1602179055506000600e0160008a6001600160a01b03166001600160a01b03168152602001908152602001600020805490506000600f0160008b6001600160a01b03166001600160a01b0316815260200190815260200160002060008463ffffffff168152602001908152602001600020819055506000600e0160008a6001600160a01b03166001600160a01b031681526020019081526020016000208290806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff1602179055508163ffffffff16896001600160a01b031660006001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a48161073c816125c2565b925050808061074a906125a7565b915050610507565b506016805463ffffffff191663ffffffff9290921691909117905550505050505050565b601654640100000000900461ffff16600181146107a55760405162461bcd60e51b81526004016100c590612266565b60008181526008602052604090206001810154808410156107d85760405162461bcd60e51b81526004016100c59061200a565b6107e0611c2a565b6107eb826005612545565b81526107f8826002612545565b61080390600a612545565b815161080f919061250d565b602082015261081f826003612545565b61082a90600a612545565b6020820151610839919061250d565b6040820181905285111561085f5760405162461bcd60e51b81526004016100c590611f91565b6000610869610f9b565b825190915060009081908811610896576108838589612525565b915061088f8583612545565b9050610953565b602084015188116108f9576108ac856002612545565b84516108b8908a612564565b6108c29190612525565b91506108cf856002612545565b6108d99083612545565b84516108e5919061250d565b90506108f260058361250d565b9150610953565b610904856003612545565b6020850151610913908a612564565b61091d9190612525565b915061092a856003612545565b6109349083612545565b6020850151610943919061250d565b9050610950600f8361250d565b91505b60028601546000906109729084906301000000900462ffffff1661250d565b87549091508111156109965760405162461bcd60e51b81526004016100c590612345565b60008881526008602052604090819020600201805465ffffff0000001916630100000062ffffff851602179055601654905163ffffffff909116906001600160a01b038c811691908716907fd1c6c1067263f101cf1803f27d562d5514dcbb921a118e1e4f74b73a87f26d2390610a12908590899089906124ef565b60405180910390a360005b84811015610c68578b6000600d0160008463ffffffff168152602001908152602001600020600a0160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550896000600d0160008463ffffffff168152602001908152602001600020600901601e6101000a81548161ffff021916908361ffff160217905550600060100180549050600060110160008463ffffffff1681526020019081526020016000208190555060006010018290806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff1602179055506000600e0160008d6001600160a01b03166001600160a01b03168152602001908152602001600020805490506000600f0160008e6001600160a01b03166001600160a01b0316815260200190815260200160002060008463ffffffff168152602001908152602001600020819055506000600e0160008d6001600160a01b03166001600160a01b031681526020019081526020016000208290806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff1602179055508163ffffffff168c6001600160a01b031660006001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a481610c52816125c2565b9250508080610c60906125a7565b915050610a1d565b506016805463ffffffff191663ffffffff8316179055610c8885846114ac565b5050505050505050505050565b6000610c9f610f9b565b9050838214610cc05760405162461bcd60e51b81526004016100c5906121b7565b6000805b85811015610e01576000878783818110610cee57634e487b7160e01b600052603260045260246000fd5b9050602002013590506000868684818110610d1957634e487b7160e01b600052603260045260246000fd5b9050602002013590506000806006018381548110610d4757634e487b7160e01b600052603260045260246000fd5b90600052602060002090600b0201905080600a0160059054906101000a900460ff16610d855760405162461bcd60e51b81526004016100c59061247e565b6000828260090154610d97919061250d565b90508160080154811115610dbd5760405162461bcd60e51b81526004016100c59061215a565b600982018190556007820154610dd39084612545565b610ddd908761250d565b9550610dea8c8585611238565b505050508080610df9906125a7565b915050610cc4565b50601a546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610e33908690600401611e49565b60206040518083038186803b158015610e4b57600080fd5b505afa158015610e5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e839190611da3565b905081811015610ea55760405162461bcd60e51b81526004016100c5906123ff565b876001600160a01b0316836001600160a01b03167f7f1fb19599dd14c9ccda091f8e0e739f2d08c4663dde55de72fb22e6b261b9f18989898988604051610ef0959493929190611f44565b60405180910390a360525460405163319f54d560e21b81526001600160a01b039091169063c67d535490610f359086906000908d908d908d908d908d90600401611e5d565b600060405180830381600087803b158015610f4f57600080fd5b505af1158015610f63573d6000803e3d6000fd5b50505050610f7183836114ac565b610f918360008a8a8a8a8a604051806020016040528060008152506115a1565b5050505050505050565b600033301415610ff257600080368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b03169150610ff59050565b50335b90565b6000611002611662565b6001600160a01b038516600090815260098201602090815260408083208784529091529020549091508083111561104b5760405162461bcd60e51b81526004016100c5906122af565b6110558382612564565b6001600160a01b038616600090815260098401602090815260408083208884529091529020819055905080611231576001600160a01b0385166000908152600b8301602090815260408083208784529091528120546110b690600190612564565b6001600160a01b0387166000908152600a85016020526040812054919250906110e190600190612564565b90508082146111bc576001600160a01b0387166000908152600a85016020526040812080548390811061112457634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508061ffff1685600a0160008a6001600160a01b03166001600160a01b03168152602001908152602001600020848154811061117c57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015561119383600161250d565b6001600160a01b0389166000908152600b87016020908152604080832094835293905291909120555b6001600160a01b0387166000908152600a8501602052604090208054806111f357634e487b7160e01b600052603160045260246000fd5b6000828152602080822083016000199081018390559092019092556001600160a01b0389168252600b86018152604080832089845290915281205550505b5050505050565b6000611242611662565b6001600160a01b0385166000908152600982016020908152604080832087845290915281208054929350849290919061127c90849061250d565b90915550506001600160a01b0384166000908152600b8201602090815260408083208684529091529020546112f7576001600160a01b0384166000818152600a830160209081526040808320805460018101825581855283852061ffff8a169101559383529254600b85018252838320878452909152919020555b50505050565b6000611307611662565b6001600160a01b038086166000908152602f830160209081526040808320888452825280832093871683529290522054909150806113465750506114a7565b6000818152602a830160205260409020600781015415806113765750600a81015460ff6101009091041615156001145b8061138a5750600a81015460ff1615156001145b15611397575050506114a7565b6005810154801561148457600282015460018301546003840154604051627eeac760e11b81526001600160a01b039384169362fdd58e936113dd93911691600401611f2b565b60206040518083038186803b1580156113f557600080fd5b505afa158015611409573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142d9190611da3565b905081600501548110156114845760058201819055600682015460405184917f9a1e053d28c2efc6add1e4a5d1647a99e883b256a54f9ef4a0abf8fcba643a559161147b91859142906124d9565b60405180910390a25b806114a25760018201546114a29084906001600160a01b0316611667565b505050505b505050565b60006114b6611662565b9050600060646114c7846021612545565b6114d19190612525565b9050600060646114e2856011612545565b6114ec9190612525565b9050600060056114fd866002612545565b6115079190612525565b9050600081836115178689612564565b6115219190612564565b61152b9190612564565b601a8601549091506001600160a01b039081169061154d9082908a908861178c565b601f8601546115699082908a906001600160a01b03168761178c565b60208601546115859082908a906001600160a01b03168661178c565b601d860154610f919082908a906001600160a01b03168561178c565b853b80156103bf5760405163bc197c8160e01b81526001600160a01b0388169063bc197c81906115e1908c908c908b908b908b908b908b90600401611eb3565b602060405180830381600087803b1580156115fb57600080fd5b505af115801561160f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116339190611d7b565b6001600160e01b03191663bc197c8160e01b146103bf5760405162461bcd60e51b81526004016100c5906122fb565b600090565b6000611671611662565b9050600081602c0160405161168590611e37565b9081526020016040518091039020600085815260200190815260200160002090508060010154600014156116ba575050611788565b6000848152602a830160205260409020600a81015460ff610100909104161515600114806116f15750600a81015460ff1615156001145b156116fe57505050611788565b60018101546001600160a01b0385811691161461172d5760405162461bcd60e51b81526004016100c590612092565b600a8101805461ff001916610100179055600481015460405186917fc1ee70d4dadc0ea8041f31f81b07d0ac9374b6bf41956d9cae562e672f3f8a9191611776919043906124cb565b60405180910390a26112318585611864565b5050565b833b806117ab5760405162461bcd60e51b81526004016100c590611fc1565b600080866001600160a01b03166323b872dd60e01b8787876040516024016117d593929190611f07565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516118139190611e1b565b6000604051808303816000865af19150503d8060008114611850576040519150601f19603f3d011682016040523d82523d6000602084013e611855565b606091505b50915091506114a28282611baf565b600061186e611662565b9050600081602c0160405161188290611e37565b9081526020016040518091039020600085815260200190815260200160002090508060010154600014156118b7575050611788565b805480156118f657600083602c016040516118d190611e37565b9081526040805160209281900383019020600085815292529020600284810154910155505b6002820154801561193357600084602c0160405161191390611e37565b908152604080516020928190038301902060008581529252902084549055505b6000868152602a85016020908152604080832060048101548452602b88019092529182902091519091889161196790611e37565b90815260200160405180910390205414156119b457600284015460048201546000908152602b870160205260409081902090516119a390611e37565b908152604051908190036020019020555b6000600185018190558085556002850155604051602e8601906119d690611e37565b908152604080516020928190038301902060008a815292529020805490945092508215611a3457600085602e01604051611a0f90611e37565b9081526040805160209281900383019020600087815292529020600286810154910155505b600284015491508115611a7357600085602e01604051611a5390611e37565b908152604080516020928190038301902060008681529252902085549055505b506000868152602a8501602090815260408083206001600160a01b0389168452602d880183528184206004820154855290925291829020915190918891611ab990611e37565b9081526020016040518091039020541415611b1a5760028401546001600160a01b0387166000908152602d87016020908152604080832060048601548452909152908190209051611b0990611e37565b908152604051908190036020019020555b60006001850181905580855560028086018290558201546001600160a01b039081168252602f870160209081526040808420600386015485528252808420928a168452919052808220919091556004820154905188917f276ac39b0f98215592b4487434c1618e3e527c57ca2f471ac93eb4eab169409191611b9e919042906124cb565b60405180910390a250505050505050565b8115611bf157805115611bec5780806020019051810190611bd09190611d54565b611bec5760405162461bcd60e51b81526004016100c590612041565b611788565b805115611c12578060405162461bcd60e51b81526004016100c59190611f7e565b60405162461bcd60e51b81526004016100c59061210f565b60405180606001604052806003906020820280368337509192915050565b80356001600160a01b0381168114611c5f57600080fd5b919050565b60008083601f840112611c75578182fd5b50813567ffffffffffffffff811115611c8c578182fd5b6020830191508360208083028501011115611ca657600080fd5b9250929050565b600080600080600060608688031215611cc4578081fd5b611ccd86611c48565b9450602086013567ffffffffffffffff80821115611ce9578283fd5b611cf589838a01611c64565b90965094506040880135915080821115611d0d578283fd5b50611d1a88828901611c64565b969995985093965092949392505050565b60008060408385031215611d3d578182fd5b611d4683611c48565b946020939093013593505050565b600060208284031215611d65578081fd5b81518015158114611d74578182fd5b9392505050565b600060208284031215611d8c578081fd5b81516001600160e01b031981168114611d74578182fd5b600060208284031215611db4578081fd5b5051919050565b81835260006001600160fb1b03831115611dd3578081fd5b6020830280836020870137939093016020019283525090919050565b60008151808452611e0781602086016020860161257b565b601f01601f19169290920160200192915050565b60008251611e2d81846020870161257b565b9190910192915050565b651b1a5cdd195960d21b815260060190565b6001600160a01b0391909116815260200190565b6001600160a01b03888116825287811660208301528616604082015260a060608201819052600090611e929083018688611dbb565b8281036080840152611ea5818587611dbb565b9a9950505050505050505050565b6001600160a01b0388811682528716602082015260a060408201819052600090611ee09083018789611dbb565b8281036060840152611ef3818688611dbb565b90508281036080840152611ea58185611def565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b600060608252611f58606083018789611dbb565b8281036020840152611f6b818688611dbb565b9150508260408301529695505050505050565b600060208252611d746020830184611def565b60208082526016908201527543616e277420627579206d6f7265207468616e20323560501b604082015260600190565b60208082526029908201527f4c696245524332303a20455243323020746f6b656e206164647265737320686160408201526873206e6f20636f646560b81b606082015260800190565b6020808252601e908201527f4e6f7420656e6f756768204748535420746f2062757920706f7274616c730000604082015260600190565b60208082526031908201527f4c696245524332303a207472616e73666572206f72207472616e7366657246726040820152706f6d2072657475726e65642066616c736560781b606082015260800190565b6020808252601d908201527f4d61726b6574706c6163653a206f776e6572206e6f742073656c6c6572000000604082015260600190565b60208082526026908201527f53686f7046616365743a2043616e2774207472616e7366657220746f2030206160408201526564647265737360d01b606082015260800190565b6020808252602b908201527f4c696245524332303a207472616e73666572206f72207472616e73666572467260408201526a1bdb481c995d995c9d195960aa1b606082015260800190565b60208082526038908201527f53686f7046616365743a20546f74616c206974656d2074797065207175616e7460408201527f6974792065786365656473206d6178207175616e746974790000000000000000606082015260800190565b60208082526032908201527f53686f7046616365743a205f6974656d496473206e6f742073616d65206c656e604082015271677468206173205f7175616e74697469657360701b606082015260800190565b60208082526039908201527f4c696241707053746f726167653a206f6e6c7920616e204974656d4d616e616760408201527f65722063616e2063616c6c20746869732066756e6374696f6e00000000000000606082015260800190565b60208082526029908201527f53686f7046616365743a2043616e206f6e6c792070757263686173652066726f6040820152686d204861756e74203160b81b606082015260800190565b6020808252602c908201527f4c69624974656d733a20446f65736e277420686176652074686174206d616e7960408201526b103a37903a3930b739b332b960a11b606082015260800190565b6020808252602a908201527f5765617261626c65733a205472616e736665722072656a65637465642f6661696040820152696c6564206279205f746f60b01b606082015260800190565b6020808252603c908201527f53686f7046616365743a204578636565646564206d6178206e756d626572206f60408201527f662061617665676f746368697320666f722074686973206861756e7400000000606082015260800190565b60208082526039908201527f53686f7046616365743a2043616e206f6e6c792070757263686173652031206f60408201527f6620616e206974656d20706572207472616e73616374696f6e00000000000000606082015260800190565b6020808252601b908201527f53686f7046616365743a204e6f7420656e6f7567682047485354210000000000604082015260600190565b60208082526028908201527f53686f7046616365743a20696473206e6f742073616d65206c656e6774682061604082015267732076616c75657360c01b606082015260800190565b6020808252602d908201527f53686f7046616365743a2043616e2774207075726368617365206974656d207460408201526c1e5c19481dda5d1a0811d214d5609a1b606082015260800190565b918252602082015260400190565b9283526020830191909152604082015260600190565b63ffffffff9390931683526020830191909152604082015260600190565b60008219821115612520576125206125e6565b500190565b60008261254057634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561255f5761255f6125e6565b500290565b600082821015612576576125766125e6565b500390565b60005b8381101561259657818101518382015260200161257e565b838111156112f75750506000910152565b60006000198214156125bb576125bb6125e6565b5060010190565b600063ffffffff808316818114156125dc576125dc6125e6565b6001019392505050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220ed2e1b03f640289260a56cd21d8367a0032957f2318df5c389cf4aa65ca9f13864736f6c63430008010033";

export class ShopFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShopFacet> {
    return super.deploy(overrides || {}) as Promise<ShopFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ShopFacet {
    return super.attach(address) as ShopFacet;
  }
  connect(signer: Signer): ShopFacet__factory {
    return super.connect(signer) as ShopFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopFacetInterface {
    return new utils.Interface(_abi) as ShopFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShopFacet {
    return new Contract(address, _abi, signerOrProvider) as ShopFacet;
  }
}
