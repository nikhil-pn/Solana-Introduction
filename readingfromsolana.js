const { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } = require("@solana/web3.js");

const connection = new Connection(clusterApiUrl("devnet"));

async function getBalanceWeb3(address) {
  return connection.getBalance(address);
}
const publicKey = new PublicKey("7JUdVR6LJGvAie1j3PmL3QJbVDEU9RY7j5FXX8manjxw");

getBalanceWeb3(publicKey).then((balance)=>{
    console.log(balance/LAMPORTS_PER_SOL, "balance");
});
//1 sol is 1 bilion lamport