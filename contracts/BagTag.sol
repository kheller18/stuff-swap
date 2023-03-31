//Build a dApp Back-End Contract
pragma solidity ^0.5.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC721/ERC721Full.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/ownership/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Burnable.sol";

//depending on the pragma solidity we choose we will use either or
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/math/SafeMath.sol";

contract BagNTagToken is ERC721Full, Ownable, ERC721Royalty, ERC721Burnable {
    using Strings for uint256;

    string public baseURI;
    string public baseExtension = ".json";
    uint256 public cost = ;
    uint256 public maxSupply = ;
    uint256 public maxMintAmount = 2;

    //A pause modifier or condition can temporarily remove a function's ability to work, 
    //w/o impacting other contract functions and without opting to destroy the entire contract and start from scratch
    bool public paused = false;
    
    constructor(
        string memory _name,
        string memory _symbol,
        string memory _artistName,
        string memory _initBaseURI
    ) ERC721(_name, _symbol) {
        setBaseURI(_initBaseURI);
    
    }
    
    function name() external view returns (string memory) {
        return _name;
    }

    function symbol() external view returns (string memory) {
        return _symbol;
    }

    //function named totalSupply returns the total number of tokens that we have minted.

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }
    
    
    //With this function, we allow users to register new pieces of artwork

    function registerArtwork(address owner, string memory tokenURI) 
        public
        returns (uint256)
        
    {
        //This function uses the owner address and the token ID to mint a new token.
        _mint(owner, tokenId);
        
        //Call the _setTokenURI function to permanently associate the value of tokenURI with the token on the blockchain
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }
}
