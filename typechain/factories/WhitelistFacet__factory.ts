/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WhitelistFacet,
  WhitelistFacetInterface,
} from "../WhitelistFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "whitelistId",
        type: "uint32",
      },
    ],
    name: "WhitelistCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "whitelistId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "WhitelistOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "whitelistId",
        type: "uint32",
      },
    ],
    name: "WhitelistUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "_whitelistAddresses",
        type: "address[]",
      },
    ],
    name: "createWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_whitelistId",
        type: "uint32",
      },
    ],
    name: "getBorrowLimit",
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
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_whitelistId",
        type: "uint32",
      },
    ],
    name: "getWhitelist",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "addresses",
            type: "address[]",
          },
        ],
        internalType: "struct Whitelist",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_whitelistId",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_actionRight",
        type: "uint256",
      },
    ],
    name: "getWhitelistAccessRight",
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
  {
    inputs: [],
    name: "getWhitelistsLength",
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
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_whitelistId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_whitelistAddress",
        type: "address",
      },
    ],
    name: "isWhitelisted",
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
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_whitelistId",
        type: "uint32",
      },
      {
        internalType: "address[]",
        name: "_whitelistAddresses",
        type: "address[]",
      },
    ],
    name: "removeAddressesFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_whitelistId",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_borrowlimit",
        type: "uint256",
      },
    ],
    name: "setBorrowLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_whitelistId",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_actionRight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_accessRight",
        type: "uint256",
      },
    ],
    name: "setWhitelistAccessRight",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_whitelistId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_whitelistOwner",
        type: "address",
      },
    ],
    name: "transferOwnershipOfWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_whitelistId",
        type: "uint32",
      },
      {
        internalType: "address[]",
        name: "_whitelistAddresses",
        type: "address[]",
      },
    ],
    name: "updateWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "whitelistId",
        type: "uint32",
      },
    ],
    name: "whitelistExists",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_whitelistId",
        type: "uint32",
      },
    ],
    name: "whitelistOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611422806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80637ade6a951161008c578063b7131d0211610066578063b7131d02146101b3578063d508d9a8146101c6578063e67e9908146101d9578063ecf5f991146101ec576100cf565b80637ade6a95146101855780637c208cb714610198578063a51793ac146101a0576100cf565b806309f0dd09146100d45780631dd6fdab146100e9578063243ce171146100fc5780636491601d1461012557806366e07540146101455780636d4962e514610165575b600080fd5b6100e76100e2366004610fef565b6101ff565b005b6100e76100f7366004611021565b6102b2565b61010f61010a366004610fd5565b61035a565b60405161011c9190611297565b60405180910390f35b610138610133366004610fd5565b6104ac565b60405161011c9190611124565b610158610153366004611072565b6104bd565b60405161011c9190611323565b610178610173366004610fd5565b6104e2565b60405161011c9190611110565b610158610193366004610fd5565b610522565b610158610545565b6100e76101ae36600461109b565b61054c565b6100e76101c1366004611072565b6105a6565b6100e76101d4366004610f44565b610600565b6101586101e7366004610fef565b61079f565b6100e76101fa366004611021565b6107cf565b61020882610841565b61022d5760405162461bcd60e51b8152600401610224906111a9565b60405180910390fd5b61023682610876565b6102525760405162461bcd60e51b815260040161022490611166565b600061025d836108a2565b80546001600160a01b0319166001600160a01b03841690811782556040519192509063ffffffff8516907f250c9a2c80b4a6539a440a03220336f427a4c6bde294534d97d89fba743449c490600090a3505050565b806102cf5760405162461bcd60e51b81526004016102249061123a565b6102d883610841565b6102f45760405162461bcd60e51b8152600401610224906111a9565b6102fd83610876565b6103195760405162461bcd60e51b815260040161022490611166565b61032483838361091d565b60405163ffffffff8416907fe8d847d2ee36950513cba49d6ac0e0012bb3436d5ab55385e2d7a2834d96d9b790600090a2505050565b610362610d9e565b61036b82610841565b6103875760405162461bcd60e51b8152600401610224906111a9565b610390826108a2565b604080516060810190915281546001600160a01b031681526001820180549192916020840191906103c090611380565b80601f01602080910402602001604051908101604052809291908181526020018280546103ec90611380565b80156104395780601f1061040e57610100808354040283529160200191610439565b820191906000526020600020905b81548152906001019060200180831161041c57829003601f168201915b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561049b57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161047d575b50505050508152505090505b919050565b60006104b782610841565b92915050565b63ffffffff919091166000908152605060209081526040808320938352929052205490565b60006104ed82610841565b6105095760405162461bcd60e51b8152600401610224906111a9565b610512826108a2565b546001600160a01b031692915050565b63ffffffff16600090815260506020908152604080832083805290915290205490565b604a545b90565b61055583610841565b6105715760405162461bcd60e51b8152600401610224906111a9565b61057a83610876565b6105965760405162461bcd60e51b815260040161022490611166565b6105a183838361097e565b505050565b6105af82610841565b6105cb5760405162461bcd60e51b8152600401610224906111a9565b6105d482610876565b6105f05760405162461bcd60e51b815260040161022490611166565b6105fc8260008361097e565b5050565b8061061d5760405162461bcd60e51b81526004016102249061123a565b8261063a5760405162461bcd60e51b8152600401610224906111ec565b6000610644610a06565b905060606000604051806060016040528061065d610a2a565b6001600160a01b0316815260200188888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509385525050506020918201859052604a8054600181018255915282517ffcc5ba1a98fc477b8948a04d08c6f4a76181fe75021370ab5e6abd22b1792a2a600390920291820180546001600160a01b0319166001600160a01b039092169190911781558383015180519495508594919361073b937ffcc5ba1a98fc477b8948a04d08c6f4a76181fe75021370ab5e6abd22b1792a2b0192910190610dc8565b5060408201518051610757916002840191602090910190610e4c565b505050610765838686610a86565b60405163ffffffff8416907f333efbc104f53485a1ba651908877d70174cf47cbfe61260358bfcabfcfbec3590600090a250505050505050565b63ffffffff82166000908152604b602090815260408083206001600160a01b038516845290915290205492915050565b806107ec5760405162461bcd60e51b81526004016102249061123a565b6107f583610841565b6108115760405162461bcd60e51b8152600401610224906111a9565b61081a83610876565b6108365760405162461bcd60e51b815260040161022490611166565b610324838383610a86565b60008061084c610ae1565b604a81015490915063ffffffff84161180159061086f575060008363ffffffff16115b9392505050565b600080610882836108a2565b905061088c610a2a565b90546001600160a01b0390811691161492915050565b6000806108ad610ae1565b90506108b883610841565b6108d45760405162461bcd60e51b8152600401610224906111a9565b604a81016108e360018561135b565b63ffffffff168154811061090757634e487b7160e01b600052603260045260246000fd5b9060005260206000209060030201915050919050565b60005b81811015610978576109668484848481811061094c57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906109619190610f2a565b610ae6565b80610970816113bb565b915050610920565b50505050565b6109888282610ce4565b6109a45760405162461bcd60e51b81526004016102249061112f565b60006109ae610ae1565b63ffffffff8516600081815260508301602090815260408083208884529091528082208690555192935084928692917fc3b4b5fafa8b36849d27cff5f377ec8290610027b9f765143d9b324462a32f5791a450505050565b600080610a11610ae1565b604a810154909150610a2490600161132c565b91505090565b600033301415610a8157600080368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b031691506105499050565b503390565b60005b8181101561097857610acf84848484818110610ab557634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610aca9190610f2a565b610cfb565b80610ad9816113bb565b915050610a89565b600090565b6000610af0610ae1565b63ffffffff84166000908152604b8201602090815260408083206001600160a01b0387168452909152902054909150156105a1576000610b2f846108a2565b63ffffffff85166000908152604b8401602090815260408083206001600160a01b038816845290915281205491925090610b6b90600190611344565b6002830154909150600090610b8290600190611344565b9050826002018181548110610ba757634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546002840180546001600160a01b039092169184908110610be357634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000836002018281548110610c3657634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546002850180546001600160a01b0390921692509080610c7157634e487b7160e01b600052603160045260246000fd5b600082815260209020810160001990810180546001600160a01b0319169055019055610c9e83600161132c565b63ffffffff88166000908152604b8701602090815260408083206001600160a01b0395861684528083528184209490945593891682529190915290812055505050505050565b600082610cf3575060016104b7565b5060006104b7565b6000610d05610ae1565b63ffffffff84166000908152604b8201602090815260408083206001600160a01b03871684529091529020549091506105a1576000610d43846108a2565b60020180546001810182556000828152602080822090920180546001600160a01b0319166001600160a01b03979097169687179055915463ffffffff969096168252604b939093018352604080822094825293909252502055565b604051806060016040528060006001600160a01b0316815260200160608152602001606081525090565b828054610dd490611380565b90600052602060002090601f016020900481019282610df65760008555610e3c565b82601f10610e0f57805160ff1916838001178555610e3c565b82800160010185558215610e3c579182015b82811115610e3c578251825591602001919060010190610e21565b50610e48929150610ea1565b5090565b828054828255906000526020600020908101928215610e3c579160200282015b82811115610e3c57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190610e6c565b5b80821115610e485760008155600101610ea2565b80356001600160a01b03811681146104a757600080fd5b60008083601f840112610ede578182fd5b50813567ffffffffffffffff811115610ef5578182fd5b6020830191508360208083028501011115610f0f57600080fd5b9250929050565b803563ffffffff811681146104a757600080fd5b600060208284031215610f3b578081fd5b61086f82610eb6565b60008060008060408587031215610f59578283fd5b843567ffffffffffffffff80821115610f70578485fd5b818701915087601f830112610f83578485fd5b813581811115610f91578586fd5b886020828501011115610fa2578586fd5b602092830196509450908601359080821115610fbc578384fd5b50610fc987828801610ecd565b95989497509550505050565b600060208284031215610fe6578081fd5b61086f82610f16565b60008060408385031215611001578182fd5b61100a83610f16565b915061101860208401610eb6565b90509250929050565b600080600060408486031215611035578283fd5b61103e84610f16565b9250602084013567ffffffffffffffff811115611059578283fd5b61106586828701610ecd565b9497909650939450505050565b60008060408385031215611084578182fd5b61108d83610f16565b946020939093013593505050565b6000806000606084860312156110af578283fd5b6110b884610f16565b95602085013595506040909401359392505050565b6000815180845260208085019450808401835b838110156111055781516001600160a01b0316875295820195908201906001016110e0565b509495945050505050565b6001600160a01b0391909116815260200190565b901515815260200190565b6020808252601c908201527f4c696257686974656c6973743a20496e76616c69642052696768747300000000604082015260600190565b60208082526023908201527f57686974656c69737446616365743a204e6f742077686974656c697374206f776040820152623732b960e91b606082015260800190565b60208082526023908201527f57686974656c69737446616365743a2057686974656c697374206e6f7420666f6040820152621d5b9960ea1b606082015260800190565b6020808252602e908201527f57686974656c69737446616365743a2057686974656c697374206e616d65206360408201526d616e6e6f7420626520626c616e6b60901b606082015260800190565b6020808252603b908201527f57686974656c69737446616365743a2057686974656c697374206c656e67746860408201527f2073686f756c64206265206c6172676572207468616e207a65726f0000000000606082015260800190565b6000602080835260018060a01b038451168184015280840151606060408501528051806080860152835b818110156112dd5782810184015186820160a0015283016112c1565b818111156112ee578460a083880101525b50601f19601f8201168501925050506040840151608084830301606085015261131a60a08301826110cd565b95945050505050565b90815260200190565b6000821982111561133f5761133f6113d6565b500190565b600082821015611356576113566113d6565b500390565b600063ffffffff83811690831681811015611378576113786113d6565b039392505050565b60028104600182168061139457607f821691505b602082108114156113b557634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156113cf576113cf6113d6565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220667cf31227e94e286d05953033a449c60eb090f629d356796b252a42e6284a0a64736f6c63430008010033";

export class WhitelistFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WhitelistFacet> {
    return super.deploy(overrides || {}) as Promise<WhitelistFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WhitelistFacet {
    return super.attach(address) as WhitelistFacet;
  }
  connect(signer: Signer): WhitelistFacet__factory {
    return super.connect(signer) as WhitelistFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhitelistFacetInterface {
    return new utils.Interface(_abi) as WhitelistFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WhitelistFacet {
    return new Contract(address, _abi, signerOrProvider) as WhitelistFacet;
  }
}
