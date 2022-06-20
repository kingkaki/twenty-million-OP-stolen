//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Faucet {
    function withdraw(uint256 withdraw_amount) public {
        payable(msg.sender).transfer(withdraw_amount);
    }
}
