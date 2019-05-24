// Poet Chain
const SHA256 = require('crypto-js/sha256');

const Block = (index, timestamp, data, previousHash) => {
	var hash = calculateHash();

	const calculateHash = () => {
		return SHA256(index + previousHash + timestamp + JSON.stringify(data).toString());
	}
};

const Blockchain = () => {
	var chain = createGenesisBlock();

  const createGenesisBlock = () => {
    return new block(0, "5/21/19", "Genesis poem", "0");
  };

  const getLatestBlock = () => {
    return chain[chain.length - 1];
  };

  const addBlock = (newBlock) => {
    newBlock.previousHash = getLatestBlock().hash;
    newBlock.hash = newBlock.hash = newBlock.calculateHash();
    chain.push(newBlock);
  };

  const isChainValid = () => {

  };
};

let poetChain = new Blockchain();
poetChain.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
poetChain.addBlock(new Block(2, "20/07/2017", { amount: 8 }));