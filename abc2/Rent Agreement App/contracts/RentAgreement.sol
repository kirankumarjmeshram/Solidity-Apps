// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.5.0 < 0.9.0;

contract RentAgriment{
    struct Memo {
        string name;
        string agreementDetail; // string message;
        string tAndC;
        string duration;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function payRentAgreement(string memory name, string memory agreementDetail, string memory tAndC, string memory duration) public payable {
        require(msg.value > 0,"Please Pay Greater than O ether");
        owner.transfer(msg.value);
        memos.push(Memo(name, agreementDetail, tAndC, duration, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory){
        return memos;
    }
}