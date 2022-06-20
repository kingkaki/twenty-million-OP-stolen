//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract BatchCreateProxy {
    address public factory;

    constructor(address _factory) {
        factory = _factory;
    }

    function batchCreate(
        address masterCopy,
        bytes memory data,
        uint256 num
    ) public {
        for (uint256 i = 0; i < num; i++) {
            factory.call(
                abi.encodeWithSignature(
                    "createProxy(address,bytes)",
                    masterCopy,
                    data
                )
            );
        }
    }
}
