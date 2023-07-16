const { Connection, clusterApiUrl, PublicKey } = require("@solana/web3.js");

const connection = new Connection(clusterApiUrl("devnet"));

async function getBalanceWeb3(address) {
  return connection.getBalance(address);
}
const publicKey = new PublicKey("7JUdVR6LJGvAie1j3PmL3QJbVDEU9RY7j5FXX8manjxw");

getBalanceWeb3(publicKey).then((balance)=>{
    console.log(balance, "balance");
});
