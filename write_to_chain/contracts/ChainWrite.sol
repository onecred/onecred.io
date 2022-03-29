//SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8.13;

  contract issueCred{
      //There was a notification that using tx.origin is a bad idea. Not entirely sure why as of now
    address public credentialingAuthority = tx.origin;
    address public credentialedUser;
    string public gpa;
    string private newgpa;


    // //Sets the credentialing authority
    // function publicsetCA() public {
    //     credentialingAuthority = msg.sender;
    // }
    
    //Sets the credentialed user 
    //This needs to be updated, anyone who sends a message to the smart contract would then become the credentialed user
    //Should be programatically 'hard coded' through automation
    function publicsetUser() public {
        credentialedUser = msg.sender;
    }

    //Creates the ability to add a function restriction to only allow the CA to invoke
    modifier caRestricted() {
        require(msg.sender == credentialingAuthority);
        _;
    } 

    //Creates the ability to add a function restriction to only allow the crednetialied user to invoke
    modifier credRestricted() {
        require(msg.sender == credentialedUser);
        _;
    } 

    function setGPA (string memory GPA) public caRestricted{
        gpa = GPA;
    }

    function deleteGPA () public credRestricted {
        gpa = 'Destroyed';
    }
    function viewnewpga() private view  credRestricted {
        newgpa;
    }
  }
