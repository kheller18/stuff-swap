//Build a dApp Back-End Contract
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Metadata.sol";


contract BagNTagToken is ERC721Enumerable, Ownable, ERC721Royalty, Counters, ERC721Metadata {
  
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdTracker;
    //these variables are marked as private to prevent external contracts or users from modifying or accessing them directly.
    string private baseURI;
    string private baseExtension = ".json";
    uint256 private cost = 1000000000000000000 wei;
    uint256 private maxSupply = 2000;
    uint256 private maxMintAmount = 5;
    
    //A pause modifier or condition can temporarily remove a function's ability to work, 
    //without impacting other contract functions and without opting to destroy the entire contract and start from scratch
    //bool private paused = false;

    mapping(uint => address[]) public nftOwners;
    mapping(uint => uint) public nftPrices;

    
    constructor(
        string memory _name,
        string memory _symbol,
        string memory _artistName,
        string memory _initBaseURI

    ) ERC721("BagNTagToken", "BNT") 
    {
        setBaseURI(_initBaseURI);
    
    }
        
    // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }
    // A mint function with two parameters: 1. _to(The address where the newly minted tokens will be transferred), 2. _mintAmount(Amount of tokens to be minted)
    // Four require statements to ensure certain conditions: 1. contract is not paused, 2. _mintAmount is greater than 0, 3. _mintAmount is <= maxMintAmount,
    // 4. the total supply of tokens after the minting process will not exceed the maximum supply of tokens that can be created
    function mint(address _to, uint256 _mintAmount) public payable {
        uint256 supply = totalSupply();
        require(!paused(), "Contract is paused");
        require(_mintAmount > 0, "Invalid mint amount");
        require(_mintAmount <= maxMintAmount, "Invalid mint amount");
        require(supply + _mintAmount <= maxSupply, "Max supply reached");


  
        // The for loop is used to iterate over a range of values, from 0 to mintAmount-1,
        //where mintAmount is a parameter passed into the function that specifies how many tokens should be minted.

             for (uint256 i = 1; i <= _mintAmount; i++) {
                _safeMint(_to, supply + i);
            }
    }

//defines function 'setBaseURI' allows the owner of the smart contract to update the base URI for the metadata of the NFTs in the contract, 
//This is useful for updating or modifying the metadata for the NFTs over time.

    function setBaseURI(string memory uri) public onlyOwner {
        _baseURI = uri;
    }

//the _baseURI function is a crucial component of any ERC-721 smart contract, 
//as it enables external applications and tools to access and display the metadata for individual tokens.

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURI;
    }

// defining our contracts 'name' allows external applications or tools to retrieve the name of the smart contract, 
//which can be useful for displaying information about the contract and its tokens

  function name() public view virtual override returns (string memory) {
        return super.name();
    }

//allow external applications or tools to retrieve the symbol of the smart contract

     function symbol() public view virtual override returns (string memory) {
        return super.symbol();
    }


    //function named totalSupply returns the total number of tokens that we have minted.

    function totalSupply() public view virtual override returns (uint256) {
        return super.totalSupply();
    }
    
    //The function takes two arguments: 'address' named 'owner' that represents the address of the account that will own the new token, 
    //and a string named tokenURI that represents the metadata URI for the new token.
    function registerArtwork(address owner, string memory tokenURI) public returns (uint256) {
        
        //used to keep track of the unique identifier for each new token.
        _tokenIdTracker.increment();

        //retrieves the current value of the _tokenIdTracker Counter and assigns it to the tokenId variable.
        uint256 tokenId = _tokenIdTracker.current();

        //creates a new token with the given 'tokenId' and 
        //assigns it to the 'owner' account using the '_safeMint' function provided by the ERC-721 token standard.
        _safeMint(owner, tokenId);

        //sets the metadata URI for the new token using the '_setTokenURI' function provided by the ERC-721 token standard.

    function _setTokenURI(uint256 tokenId, string memory tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = tokenURI;
    }
        //returns the tokenId value to the caller, indicating the unique identifier of the new token that was just registered.
        return tokenId;
    
    }
  
  //The purpose of this function is to allow external applications or contracts to check whether the contract is currently paused or not.
  //By making this function 'public', external applications or contracts can access the current value 
  //of '_paused' without needing to have direct access to the internal state of the contract.
        
     function paused() public view returns (bool) {
        return paused;
    }

//The purpose of this function is to allow the contract owner 'onlyOwner' to temporarily 
//pause certain operations or prevent malicious attacks by setting the value of _paused to true.
    function pause() public onlyOwner {
        paused = true;
    }

//The purpose of this function is to allow the contract owner to resume normal operations after the contract has been paused
    function unpause() public onlyOwner {
        paused = false;
    }
}
