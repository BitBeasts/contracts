/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BridgeFacet, BridgeFacetInterface } from "../BridgeFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "AddedAavegotchiBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "AddedItemsBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "WithdrawnBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "WithdrawnItems",
    type: "event",
  },
  {
    inputs: [],
    name: "childChainManager",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_depositData",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newChildChainManager",
        type: "address",
      },
    ],
    name: "setChildChainManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "withdrawAavegotchiBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "withdrawItemsBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611d35806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633ca65d311461005c5780636c80c16c14610071578063764a81bb14610084578063c8291d8414610097578063cf2c52cb146100b5575b600080fd5b61006f61006a36600461154f565b6100c8565b005b61006f61007f36600461158f565b610216565b61006f6100923660046114b0565b6103ac565b61009f61042c565b6040516100ac91906117c5565b60405180910390f35b61006f6100c33660046114d1565b61043c565b60006100d26106fb565b905060148211156100fe5760405162461bcd60e51b81526004016100f590611aee565b60405180910390fd5b60005b828110156101cd57600084848381811061012b57634e487b7160e01b600052603260045260246000fd5b602090810292909201356000818152600d9093526040909220600a0154919250506001600160a01b038481169116146101765760405162461bcd60e51b81526004016100f5906119d0565b6000818152600d60205260409020600a0154600160d01b900460ff16156101af5760405162461bcd60e51b81526004016100f590611b43565b6101ba833083610757565b50806101c581611cb8565b915050610101565b50806001600160a01b03167ff871896b17e9cb7a64941c62c188a4f5c621b86800e3d15452ece01ce56073df848460405161020992919061189a565b60405180910390a2505050565b8281146102355760405162461bcd60e51b81526004016100f590611a07565b60148311156102565760405162461bcd60e51b81526004016100f590611bd7565b60006102606106fb565b905060005b848110156102ee57600086868381811061028f57634e487b7160e01b600052603260045260246000fd5b90506020020135905060008585848181106102ba57634e487b7160e01b600052603260045260246000fd5b9050602002013590506102ce848383610a61565b6102d9308386610ca0565b505080806102e690611cb8565b915050610265565b5060525460405163319f54d560e21b81526001600160a01b039091169063c67d53549061032c90849081906000908b908b908b908b906004016117d9565b600060405180830381600087803b15801561034657600080fd5b505af115801561035a573d6000803e3d6000fd5b50505050806001600160a01b03167f5e9327766a4ba5751ce7b12a3b9bb503da13d20e7c5ad6eed0228e87b38bd6f08686868660405161039d94939291906118ae565b60405180910390a25050505050565b60006103b66106fb565b601d549091506001600160a01b03808316911614806103ed57506103d8610e4f565b6001600160a01b0316816001600160a01b0316145b6104095760405162461bcd60e51b81526004016100f590611921565b50601b80546001600160a01b0319166001600160a01b0392909216919091179055565b601b546001600160a01b03165b90565b601b546001600160a01b031633146104665760405162461bcd60e51b81526004016100f590611a4c565b600080610475838501856116ac565b915091506104838214156105f9576000808280602001905181019061049a9190611633565b9150915080518251146104bf5760405162461bcd60e51b81526004016100f590611aa1565b60005b82518110156105435760008382815181106104ed57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600083838151811061051957634e487b7160e01b600052603260045260246000fd5b6020026020010151905061052e8a8383610e6b565b5050808061053b90611cb8565b9150506104c2565b5060525460405163319f54d560e21b81526001600160a01b039091169063c67d53549061057d9033906000908c908890889060040161182f565b600060405180830381600087803b15801561059757600080fd5b505af11580156105ab573d6000803e3d6000fd5b50505050866001600160a01b03167f1f8f7e06c46965f34545e8fe6b5116f98558ddf6c119e4cb12135666444f670183836040516105ea9291906118f3565b60405180910390a250506106f4565b6102d18214156106f45760008180602001905181019061061991906115f8565b905060005b81518110156106b057600082828151811061064957634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516000818152600d9092526040909120600a01549091506001600160a01b031630146106925760405162461bcd60e51b81526004016100f590611999565b61069d308983610757565b50806106a881611cb8565b91505061061e565b50856001600160a01b03167f2be1d5905fdd327f39acf22a61508eaff689730a11be0822474721edd76ccbd5826040516106ea91906118e0565b60405180910390a2505b5050505050565b60003330141561075257600080368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b031691506104399050565b503390565b6000610761610f30565b6001600160a01b0385166000818152600f830160209081526040808320878452825280832054938352600e850190915281205492935090916107a590600190611ca1565b90508082146108b1576001600160a01b0386166000908152600e8401602052604081208054839081106107e857634e487b7160e01b600052603260045260246000fd5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff1690508084600e016000896001600160a01b03166001600160a01b03168152602001908152602001600020848154811061085757634e487b7160e01b600052603260045260246000fd5b600091825260208083206008830401805460079093166004026101000a63ffffffff8181021990941695841602949094179093556001600160a01b038a168252600f87018352604080832094909116825292909152208290555b6001600160a01b0386166000908152600e8401602052604090208054806108e857634e487b7160e01b600052603160045260246000fd5b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160a01b038089168352600f86018252604080842088855283528084208490556013870190925291205416156109a057600084815260138401602052604080822080546001600160a01b0319169055518591906001600160a01b038916907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925908390a45b6000848152600d840160209081526040808320600a0180546001600160a01b0319166001600160a01b038a8116918217909255808552600e88018085528386208054600f8b0187528588208c8952875285882081905591865260018201815586529385206008850401805460079095166004026101000a63ffffffff81810219909616958b16029490941790935590518793918a16917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050505050565b6000610a6b610f30565b6001600160a01b0385166000908152600982016020908152604080832087845290915290205490915080831115610ab45760405162461bcd60e51b81526004016100f590611b8b565b610abe8382611ca1565b6001600160a01b0386166000908152600984016020908152604080832088845290915290208190559050806106f4576001600160a01b0385166000908152600b830160209081526040808320878452909152812054610b1f90600190611ca1565b6001600160a01b0387166000908152600a8501602052604081205491925090610b4a90600190611ca1565b9050808214610c25576001600160a01b0387166000908152600a850160205260408120805483908110610b8d57634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508061ffff1685600a0160008a6001600160a01b03166001600160a01b031681526020019081526020016000208481548110610be557634e487b7160e01b600052603260045260246000fd5b600091825260209091200155610bfc836001611c89565b6001600160a01b0389166000908152600b87016020908152604080832094835293905291909120555b6001600160a01b0387166000908152600a850160205260409020805480610c5c57634e487b7160e01b600052603160045260246000fd5b6000828152602080822083016000199081018390559092019092556001600160a01b0389168252600b86018152604080832089845290915281205550505050505050565b6000610caa610f30565b6001600160a01b038086166000908152602f83016020908152604080832088845282528083209387168352929052205490915080610ce9575050610e4a565b6000818152602a83016020526040902060078101541580610d195750600a81015460ff6101009091041615156001145b80610d2d5750600a81015460ff1615156001145b15610d3a57505050610e4a565b60058101548015610e2757600282015460018301546003840154604051627eeac760e11b81526001600160a01b039384169362fdd58e93610d8093911691600401611881565b60206040518083038186803b158015610d9857600080fd5b505afa158015610dac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd09190611694565b90508160050154811015610e275760058201819055600682015460405184917f9a1e053d28c2efc6add1e4a5d1647a99e883b256a54f9ef4a0abf8fcba643a5591610e1e9185914290611c42565b60405180910390a25b80610e45576001820154610e459084906001600160a01b0316610f35565b505050505b505050565b6000610e5961105a565b600401546001600160a01b0316919050565b6000610e75610f30565b6001600160a01b03851660009081526009820160209081526040808320878452909152812080549293508492909190610eaf908490611c89565b90915550506001600160a01b0384166000908152600b820160209081526040808320868452909152902054610f2a576001600160a01b0384166000818152600a830160209081526040808320805460018101825581855283852061ffff8a169101559383529254600b85018252838320878452909152919020555b50505050565b600090565b6000610f3f610f30565b9050600081602c01604051610f53906117b3565b908152602001604051809103902060008581526020019081526020016000209050806001015460001415610f88575050611056565b6000848152602a830160205260409020600a81015460ff61010090910416151560011480610fbf5750600a81015460ff1615156001145b15610fcc57505050611056565b60018101546001600160a01b03858116911614610ffb5760405162461bcd60e51b81526004016100f590611962565b600a8101805461ff001916610100179055600481015460405186917fc1ee70d4dadc0ea8041f31f81b07d0ac9374b6bf41956d9cae562e672f3f8a919161104491904390611c34565b60405180910390a26106f4858561107e565b5050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90565b6000611088610f30565b9050600081602c0160405161109c906117b3565b9081526020016040518091039020600085815260200190815260200160002090508060010154600014156110d1575050611056565b8054801561111057600083602c016040516110eb906117b3565b9081526040805160209281900383019020600085815292529020600284810154910155505b6002820154801561114d57600084602c0160405161112d906117b3565b908152604080516020928190038301902060008581529252902084549055505b6000868152602a85016020908152604080832060048101548452602b880190925291829020915190918891611181906117b3565b90815260200160405180910390205414156111ce57600284015460048201546000908152602b870160205260409081902090516111bd906117b3565b908152604051908190036020019020555b6000600185018190558085556002850155604051602e8601906111f0906117b3565b908152604080516020928190038301902060008a81529252902080549094509250821561124e57600085602e01604051611229906117b3565b9081526040805160209281900383019020600087815292529020600286810154910155505b60028401549150811561128d57600085602e0160405161126d906117b3565b908152604080516020928190038301902060008681529252902085549055505b506000868152602a8501602090815260408083206001600160a01b0389168452602d8801835281842060048201548552909252918290209151909188916112d3906117b3565b90815260200160405180910390205414156113345760028401546001600160a01b0387166000908152602d87016020908152604080832060048601548452909152908190209051611323906117b3565b908152604051908190036020019020555b60006001850181905580855560028086018290558201546001600160a01b039081168252602f870160209081526040808420600386015485528252808420928a168452919052808220919091556004820154905188917f276ac39b0f98215592b4487434c1618e3e527c57ca2f471ac93eb4eab1694091916113b891904290611c34565b60405180910390a250505050505050565b80356001600160a01b03811681146113e057600080fd5b919050565b60008083601f8401126113f6578182fd5b50813567ffffffffffffffff81111561140d578182fd5b602083019150836020808302850101111561142757600080fd5b9250929050565b600082601f83011261143e578081fd5b8151602067ffffffffffffffff82111561145a5761145a611ce9565b808202611468828201611c58565b838152828101908684018388018501891015611482578687fd5b8693505b858410156114a4578051835260019390930192918401918401611486565b50979650505050505050565b6000602082840312156114c1578081fd5b6114ca826113c9565b9392505050565b6000806000604084860312156114e5578182fd5b6114ee846113c9565b9250602084013567ffffffffffffffff8082111561150a578384fd5b818601915086601f83011261151d578384fd5b81358181111561152b578485fd5b87602082850101111561153c578485fd5b6020830194508093505050509250925092565b60008060208385031215611561578182fd5b823567ffffffffffffffff811115611577578283fd5b611583858286016113e5565b90969095509350505050565b600080600080604085870312156115a4578081fd5b843567ffffffffffffffff808211156115bb578283fd5b6115c7888389016113e5565b909650945060208701359150808211156115df578283fd5b506115ec878288016113e5565b95989497509550505050565b600060208284031215611609578081fd5b815167ffffffffffffffff81111561161f578182fd5b61162b8482850161142e565b949350505050565b60008060408385031215611645578182fd5b825167ffffffffffffffff8082111561165c578384fd5b6116688683870161142e565b9350602085015191508082111561167d578283fd5b5061168a8582860161142e565b9150509250929050565b6000602082840312156116a5578081fd5b5051919050565b600080604083850312156116be578182fd5b8235915060208084013567ffffffffffffffff808211156116dd578384fd5b818601915086601f8301126116f0578384fd5b81358181111561170257611702611ce9565b611714601f8201601f19168501611c58565b91508082528784828501011115611729578485fd5b8084840185840137810190920192909252919491935090915050565b81835260006001600160fb1b0383111561175d578081fd5b6020830280836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b838110156117a85781518752958201959082019060010161178c565b509495945050505050565b651b1a5cdd195960d21b815260060190565b6001600160a01b0391909116815260200190565b6001600160a01b03888116825287811660208301528616604082015260a06060820181905260009061180e9083018688611745565b8281036080840152611821818587611745565b9a9950505050505050505050565b6001600160a01b03868116825285811660208301528416604082015260a06060820181905260009061186390830185611779565b82810360808401526118758185611779565b98975050505050505050565b6001600160a01b03929092168252602082015260400190565b60006020825261162b602083018486611745565b6000604082526118c2604083018688611745565b82810360208401526118d5818587611745565b979650505050505050565b6000602082526114ca6020830184611779565b6000604082526119066040830185611779565b82810360208401526119188185611779565b95945050505050565b60208082526021908201527f4c696241707053746f726167653a20446f206e6f7420686176652061636365736040820152607360f81b606082015260800190565b6020808252601d908201527f4d61726b6574706c6163653a206f776e6572206e6f742073656c6c6572000000604082015260600190565b6020808252601a908201527f4272696467653a204e6f74206f776e6572206f6620746f6b656e000000000000604082015260600190565b6020808252601f908201527f42726964676546616365743a204e6f74206f776e6572206f6620746f6b656e00604082015260600190565b60208082526025908201527f4272696467653a20696473206e6f742073616d65206c656e6774682061732076604082015264616c75657360d81b606082015260800190565b60208082526035908201527f4272696467653a206f6e6c79206368696c64436861696e4d616e61676572206360408201527430b71031b0b636103a3434b990333ab731ba34b7b760591b606082015260800190565b6020808252602d908201527f4272696467653a20696473206c656e677468206e6f7420657175616c20746f2060408201526c0ecc2d8eacae640d8cadccee8d609b1b606082015260800190565b60208082526035908201527f4272696467653a2065786365656473207769746864726177206c696d6974206660408201527437b91039b4b733b632903a3930b739b0b1ba34b7b760591b606082015260800190565b60208082526028908201527f42726964676546616365743a2043616e2774207769746864726177206c6f636b60408201526732b2103a37b5b2b760c11b606082015260800190565b6020808252602c908201527f4c69624974656d733a20446f65736e277420686176652074686174206d616e7960408201526b103a37903a3930b739b332b960a11b606082015260800190565b60208082526038908201527f4974656d733a206578636565646564206d6178206e756d626572206f6620696460408201527f7320666f722073696e676c65207472616e73616374696f6e0000000000000000606082015260800190565b918252602082015260400190565b9283526020830191909152604082015260600190565b604051601f8201601f1916810167ffffffffffffffff81118282101715611c8157611c81611ce9565b604052919050565b60008219821115611c9c57611c9c611cd3565b500190565b600082821015611cb357611cb3611cd3565b500390565b6000600019821415611ccc57611ccc611cd3565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212206993d6d723e47141256e2bb895cf2a54eda7f0b237de519462ddd4fe041ac33864736f6c63430008010033";

export class BridgeFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BridgeFacet> {
    return super.deploy(overrides || {}) as Promise<BridgeFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BridgeFacet {
    return super.attach(address) as BridgeFacet;
  }
  connect(signer: Signer): BridgeFacet__factory {
    return super.connect(signer) as BridgeFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeFacetInterface {
    return new utils.Interface(_abi) as BridgeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeFacet {
    return new Contract(address, _abi, signerOrProvider) as BridgeFacet;
  }
}
