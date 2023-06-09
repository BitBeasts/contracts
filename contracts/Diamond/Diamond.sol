// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "../shared/interfaces/IERC165.sol";
import "../shared/interfaces/IERC173.sol";
import "../shared/interfaces/IDiamondLoupe.sol";
import "../shared/facets/DiamondCutFacet.sol"; 
import "../shared/facets/DiamondLoupeFacet.sol"; 
import "../shared/facets/OwnershipFacet.sol"; 
import "../shared/libraries/LibMeta.sol"; 



contract Diamond {
    constructor(address _contractOwner) {
        LibDiamond.setContractOwner(_contractOwner);
        LibDiamond.addDiamondFunctions(address(new DiamondCutFacet()), address(new DiamondLoupeFacet()), address(new OwnershipFacet()));
    }

    // Find facet for function that is called and execute the
    // function if a facet is found and return any value.
    fallback() external payable {
        LibDiamond.DiamondStorage storage ds;
        bytes32 position = LibDiamond.DIAMOND_STORAGE_POSITION;
        assembly {
            ds.slot := position
        }
        address facet = ds.selectorToFacetAndPosition[msg.sig].facetAddress;
        require(facet != address(0), "Diamond: Function does not exist");
        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := delegatecall(gas(), facet, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
                case 0 {
                    revert(0, returndatasize())
                }
                default {
                    return(0, returndatasize())
                }
        }
    }
}