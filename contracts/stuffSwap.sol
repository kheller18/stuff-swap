// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC721/ERC721Full.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract ArtRegistry is ERC721Enumerable, Ownable {
    constructor(
        // string memory _artist,
        // uint256 price,
        // address payable creatorAddress
    ) ERC721("StuffSwap", "SSWP") {}

    struct Artwork {
        string name;
        string artist;
        uint256 price;
        address payable owner;
        address payable creatorAddress;
        uint256 initialSupply;
        string ipfs;
    }

    mapping(uint256 => Artwork) public artCollection;
    // mapping(uint256 => string) public _tokenURIs;

    // event Appraisal(uint256 tokenId, uint256 price, string reportURI);

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        // _tokenURIs[tokenId] = _tokenURI;
        // _tokenURIs[tokenId] = _tokenURI;
        // artCollection[tokenId] = Artwork(name, artist, initialPrice);
    }

    function mint(address _to, uint256 _mintAmount) public payable {
        uint256 supply = totalSupply();
        // require(!paused);
        // require(_mintAmount > 0);
        // require(_mintAmount <= maxMintAmount);
        // require(supply + _mintAmount <= maxSupply);

        for (uint256 i = 1; i <= _mintAmount; i++) {
            _safeMint(_to, supply + i);
        }
    }

    function registerArtwork(
        string memory name,
        string memory artist,
        uint256 price,
        address payable owner,
        address payable creator,
        uint256 mintAmount,
        string memory ipfs
    ) public returns (uint256) {
        uint256 tokenId = totalSupply();
        // string memory tokenURI

        // _mint(owner, tokenId);
        // _setTokenURI(tokenId, tokenURI);
        // tokenURI = 'https://ipfs.io/ipfs/Qmf9LwDLB3gkCqxEYfZbVT8AJtuPWEUSxNG86qucqMV7AV';
        // _setTokenURI(tokenId, tokenURI);
        mint(creator, mintAmount);


        artCollection[tokenId] = Artwork(name, artist, price, owner, creator, mintAmount, ipfs);

        return tokenId;
    }

    // function buyArtwork(
    //     address payable owner,
    //     address payable creator,
    //     address buyer

    // ) public returns (bool) {

    //     artCollection[tokenId].owner
    // }

    function newAppraisal(
        uint256 tokenId,
        uint256 newPrice,
        string memory reportURI
    ) public returns (uint256) {
        artCollection[tokenId].price = newPrice;

        // emit Appraisal(tokenId, newPrice, reportURI);

        return artCollection[tokenId].price;
    }
}
