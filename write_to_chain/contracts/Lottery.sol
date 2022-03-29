// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.9;

contract Lottery{
    address public manager;
    address[] public players;

    function Lotto() public{
        //Only the manager should be able to pick the winner1
        manager = msg.sender;
    }

    function enter() public payable {
        //Set before allowing the function to be executed
        require(msg.value > .01 ether);
        players.push(msg.sender);

    }
    function random() private view returns (uint) {
        //Research global functions of Solidity
        return uint(keccak256(abi.encode(block.difficulty, block.timestamp, players)));

    }
    function pickWinner() public restricted {
        uint index = random() % players.length;
        payable(players[index]).transfer(address(this).balance);
        players = new address[](0);
    }
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    function getPlayers() public view returns (address[] memory) {
        return players;

    }
}


// contract Inbox {
//     string public message;
    
//     constructor(string memory initialMessage) {
//         message = initialMessage;
//     }
    
//     function setMessage(string memory newMessage) public {
//         message = newMessage;
//     }
// }