pragma solidity =0.6.12;
import './UniswapV2Pair.sol';

contract getHash {
    function getInitHash() public pure returns(bytes32){
        bytes memory bytecode = type(UniswapV2Pair).creationCode;
        return keccak256(abi.encodePacked(bytecode));
    }
}