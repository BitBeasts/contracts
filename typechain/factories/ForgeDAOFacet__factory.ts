/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ForgeDAOFacet, ForgeDAOFacetInterface } from "../ForgeDAOFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "ContractPaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ContractUnpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "SetAavegotchiDaoAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "SetAavegotchiDiamondAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "bips",
        type: "uint256",
      },
    ],
    name: "SetAlloyBurnFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "bips",
        type: "uint256",
      },
    ],
    name: "SetAlloyDaoFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct RarityValueIO",
        name: "newCosts",
        type: "tuple",
      },
    ],
    name: "SetForgeAlloyCost",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct RarityValueIO",
        name: "newCosts",
        type: "tuple",
      },
    ],
    name: "SetForgeEssenceCost",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct RarityValueIO",
        name: "newCosts",
        type: "tuple",
      },
    ],
    name: "SetForgeTimeCostInBlocks",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct RarityValueIO",
        name: "newChances",
        type: "tuple",
      },
    ],
    name: "SetGeodeWinChance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "SetGltrAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "supplyPerTokenId",
        type: "uint256[]",
      },
    ],
    name: "SetMaxSupplyPerToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct RarityValueIO",
        name: "newPoints",
        type: "tuple",
      },
    ],
    name: "SetSkillPointsEarnedFromForge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldBips",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBips",
        type: "uint256",
      },
    ],
    name: "SetSmeltingSkillPointReductionFactorBips",
    type: "event",
  },
  {
    inputs: [],
    name: "getAlloyBurnFeeInBips",
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
    name: "getAlloyDaoFeeInBips",
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
    name: "pauseContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "daoAddress",
        type: "address",
      },
    ],
    name: "setAavegotchiDaoAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setAavegotchiDiamondAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "alloyBurnFeeInBips",
        type: "uint256",
      },
    ],
    name: "setAlloyBurnFeeInBips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "alloyDaoFeeInBips",
        type: "uint256",
      },
    ],
    name: "setAlloyDaoFeeInBips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        internalType: "struct RarityValueIO",
        name: "costs",
        type: "tuple",
      },
    ],
    name: "setForgeAlloyCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        internalType: "struct RarityValueIO",
        name: "costs",
        type: "tuple",
      },
    ],
    name: "setForgeEssenceCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        internalType: "struct RarityValueIO",
        name: "costs",
        type: "tuple",
      },
    ],
    name: "setForgeTimeCostInBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "gltr",
        type: "address",
      },
    ],
    name: "setGltrAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        internalType: "struct RarityValueIO",
        name: "points",
        type: "tuple",
      },
    ],
    name: "setSkillPointsEarnedFromForge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bips",
        type: "uint256",
      },
    ],
    name: "setSmeltingSkillPointReductionFactorBips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpauseContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ed1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063ab97649a1161008c578063b57b01d511610066578063b57b01d514610199578063e8b41fff146101ac578063efc84988146101ca578063f607cbd5146101d2576100ea565b8063ab97649a1461016b578063b22f3f011461017e578063b33712c514610191576100ea565b8063439766ce116100c8578063439766ce1461012a57806362429fa71461013257806364c06824146101455780639026bbb614610158576100ea565b80631256932f146100ef57806317b6b8ff1461010457806320d06f8614610117575b600080fd5b6101026100fd366004610ddd565b6101e5565b005b610102610112366004610d98565b610297565b610102610125366004610dc6565b610350565b6101026104d2565b610102610140366004610d98565b61056d565b610102610153366004610d98565b6105f2565b610102610166366004610dc6565b6106a4565b610102610179366004610dc6565b610825565b61010261018c366004610ddd565b6109a7565b610102610a3e565b6101026101a7366004610dc6565b610ad6565b6101b4610c58565b6040516101c19190610e84565b60405180910390f35b6101b4610c5f565b6101026101e0366004610ddd565b610c65565b60006101ef610cfc565b6007549091506001600160a01b0380831661010090920416148061022b5750610216610d58565b6001600160a01b0316816001600160a01b0316145b6102505760405162461bcd60e51b815260040161024790610e09565b60405180910390fd5b60158054908390556040517ffa5c2b5dd6192a1c24e935ad0e19bb0a675714dcd1a0bc5e1624b38206695fc29061028a9083908690610e8d565b60405180910390a1505050565b60006102a1610cfc565b6007549091506001600160a01b038083166101009092041614806102dd57506102c8610d58565b6001600160a01b0316816001600160a01b0316145b6102f95760405162461bcd60e51b815260040161024790610e09565b600880546001600160a01b0319166001600160a01b0384161790556040517f4a5d0f125af37c40b7ce436c135891c46506076dbaef6e77692388c7d3ee84e390610344908490610df5565b60405180910390a15050565b600061035a610cfc565b6007549091506001600160a01b038083166101009092041614806103965750610381610d58565b6001600160a01b0316816001600160a01b0316145b6103b25760405162461bcd60e51b815260040161024790610e09565b6013602090815282357f4155c2f711f2cdd34f8262ab8fb9b7020a700fe7b6948222152f7670d1fdf34d558201357f0b9d2c0c271bb30544eb78c59bdaebdae2728e5f65814c07768a0abe90ed1923556040808301357ff4b2859895858d6aa26d656e4999d552f6a869b74c43bba7d2a941c4d22c35595560608301357f522e87d3d671f2915034f38e0229384befcd14fcb6842a4a7158cb5222bace8f5560808301357f6759aee28a1e27f96db48dd13fe412311d635680c93408acd764c50a218587ab55603260005260a08301357f23e460dc4eb22fd2fec096707d574f3e410bff1375b44b85e4667fd983d1c0c455517f494963f6fc572563ba57058fc17e8068c95073668c11e72bd1e76b970db651b290610344908490610e40565b60006104dc610cfc565b6007549091506001600160a01b038083166101009092041614806105185750610503610d58565b6001600160a01b0316816001600160a01b0316145b6105345760405162461bcd60e51b815260040161024790610e09565b6007805460ff191660011790556040517fab35696f06e428ebc5ceba8cd17f8fed287baf43440206d1943af1ee53e6d26790600090a150565b6000610577610cfc565b6007549091506001600160a01b038083166101009092041614806105b3575061059e610d58565b6001600160a01b0316816001600160a01b0316145b6105cf5760405162461bcd60e51b815260040161024790610e09565b50601880546001600160a01b0319166001600160a01b0392909216919091179055565b60006105fc610cfc565b6007549091506001600160a01b038083166101009092041614806106385750610623610d58565b6001600160a01b0316816001600160a01b0316145b6106545760405162461bcd60e51b815260040161024790610e09565b60078054610100600160a81b0319166101006001600160a01b038516021790556040517fd0ba38f7a08f3388aeae9e9c6852c77222859f2b053f8c82edf82b668b2492db90610344908490610df5565b60006106ae610cfc565b6007549091506001600160a01b038083166101009092041614806106ea57506106d5610d58565b6001600160a01b0316816001600160a01b0316145b6107065760405162461bcd60e51b815260040161024790610e09565b6010602090815282357f8c6065603763fec3f5742441d3833f3f43b982453612d76adb39a885e3006b5f558201357f853b2fefe141400fef543280f93d98bd49996069f632d0d20236afeeed8e46a2556040808301357f61a7346ab5ebdac457db2a901eaf1b805239b6049a1b2f34bab85e2e274f39cb5560608301357fbbe6df1631c6a5c37158096bc15825d83d22eaca9ac1e829be6dfcdebed1d2d75560808301357ff2ef7423a23268829f7e276c7aa619cf68f387174646eff25875ddeaf25728cf55603260005260a08301357e3bdc41b7d91c444d475f9232581bec6c62a3f387adc99f7ce3fa28d22dede355517f81c8d195c69f134eb615a8d37e32828deab68796130366152a6c145af5d3f0c490610344908490610e40565b600061082f610cfc565b6007549091506001600160a01b0380831661010090920416148061086b5750610856610d58565b6001600160a01b0316816001600160a01b0316145b6108875760405162461bcd60e51b815260040161024790610e09565b6012602090815282357f71a67924699a20698523213e55fe499d539379d7769cd5567e2c45d583f815a3558201357f8e1fee8c88a9e04123b21e90cae2727a7715bf522a1e46eb5934ccd05203a6b2556040808301357f45429b9195d4ec5c0cf6c69e9c21a4ca0ea773b702c2de5735f85d2631f267465560608301357f4d862627e71449ad0902e42fb445c6fefb557d066705175da90fdc325bd76e4e5560808301357f17bb5cf2fc7a6f50cc94c2441aa8b40633d519c366ef1355ea0dd04dd3027f2055603260005260a08301357f9ae33e557c786052d92d7287419e2369286b7d5286b7ff66e3e294873952546355517f9b3d3795415519942a4e3124855cae7b8df536920990d494150be457c5315b7b90610344908490610e40565b60006109b1610cfc565b6007549091506001600160a01b038083166101009092041614806109ed57506109d8610d58565b6001600160a01b0316816001600160a01b0316145b610a095760405162461bcd60e51b815260040161024790610e09565b60098290556040517f9fbb14873beb83ddc84d94627fa9dbe8a1b9e709dca81996883793a96dbfafc190610344908490610e84565b6000610a48610cfc565b6007549091506001600160a01b03808316610100909204161480610a845750610a6f610d58565b6001600160a01b0316816001600160a01b0316145b610aa05760405162461bcd60e51b815260040161024790610e09565b6007805460ff191690556040517f0e5e3b3fb504c22cf5c42fa07d521225937514c654007e1f12646f89768d6f9490600090a150565b6000610ae0610cfc565b6007549091506001600160a01b03808316610100909204161480610b1c5750610b07610d58565b6001600160a01b0316816001600160a01b0316145b610b385760405162461bcd60e51b815260040161024790610e09565b6011602090815282357f17bc176d2408558f6e4111feebc3cab4e16b63e967be91cde721f4c8a488b552558201357f08037d7b151cc412d25674a4e66b334d9ae9d2e5517a7feaae5cdb828bf1c628556040808301357fc550213cee30afd5e67ccba7be3d381bbc169034ae08eb3ec9168caca9fe55e75560608301357f28819bbfa35988de500160af3ee4d060ea4da2d0fc4b680f9032b1bba4c6604b5560808301357fcf943896595fc7bd72418bc495b5a9e8a67d0e3728044be2da2e4caa401073b455603260005260a08301357f64aad4181f7f304b1692f071f194639366603ec45f5521a69d0bc5b611ad289555517f549d0631f3cc19387470a6f3b30478a0aada27fe74f64b067b7c6a3d0da62cff90610344908490610e40565b600a545b90565b60095490565b6000610c6f610cfc565b6007549091506001600160a01b03808316610100909204161480610cab5750610c96610d58565b6001600160a01b0316816001600160a01b0316145b610cc75760405162461bcd60e51b815260040161024790610e09565b600a8290556040517f4c6a3ee0d4c425fb2d0b0cc6bb931b89f57fe8a61ddf53b0a40d277e2a02791190610344908490610e84565b600033301415610d5357600080368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b03169150610c5c9050565b503390565b6000610d62610d74565b600401546001600160a01b0316919050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90565b600060208284031215610da9578081fd5b81356001600160a01b0381168114610dbf578182fd5b9392505050565b600060c08284031215610dd7578081fd5b50919050565b600060208284031215610dee578081fd5b5035919050565b6001600160a01b0391909116815260200190565b60208082526018908201527f4c696241707053746f726167653a204e6f206163636573730000000000000000604082015260600190565b600060c082019050823582526020830135602083015260408301356040830152606083013560608301526080830135608083015260a083013560a083015292915050565b90815260200190565b91825260208201526040019056fea2646970667358221220ee7871a83a2e283c6ef694be741efe63763b10ed044f1597475c726dd0619c3c64736f6c63430008010033";

export class ForgeDAOFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ForgeDAOFacet> {
    return super.deploy(overrides || {}) as Promise<ForgeDAOFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ForgeDAOFacet {
    return super.attach(address) as ForgeDAOFacet;
  }
  connect(signer: Signer): ForgeDAOFacet__factory {
    return super.connect(signer) as ForgeDAOFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ForgeDAOFacetInterface {
    return new utils.Interface(_abi) as ForgeDAOFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ForgeDAOFacet {
    return new Contract(address, _abi, signerOrProvider) as ForgeDAOFacet;
  }
}