// const {
//   Connection,
//   clusterApiUrl,
//   Keypair,
//   Transaction,
//   SystemProgram,
//   PublicKey,
//   LAMPORTS_PER_SOL,
//   sendAndConfirmTransaction,
// } = require("@solana/web3.js");

// const fs = require("fs");

// async function main(){
//   const connection = new Connection(clusterApiUrl("devnet"));
//   const secert = JSON.parse(fs.readFileSync("secretkey.json") || "[]");
//   const secertkey = new Uint8Array(secert);

//   //getting the public key
//   const ownerKeypair = Keypair.fromSecretKey(secertkey);

//   const publicKey = ownerKeypair.publicKey;
//   console.log("public key ", publicKey);
//   const recipientAddress = "FbcBWzcezM77bzx7CxK7EgtGk6VBTeqBPBwJkd17amov";
//   const recipient = new PublicKey(recipientAddress);

//   const transaction = new Transaction();

//   const sendSolInstruction = SystemProgram.transfer({
//     fromPubkey: publicKey,
//     toPubkey: recipient,
//     lamports: LAMPORTS_PER_SOL * 0.1,
//   });

//   transaction.add(sendSolInstruction);

//   const signature = await sendAndConfirmTransaction(connection, transaction, [
//     ownerKeypair,
//   ]);
//   console.log(signature, "signature");
// };

// main()
const {
  clusterApiUrl,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  Keypair,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
} = require("@solana/web3.js");
const fs = require("fs");
async function main() {
  const connection = new Connection(clusterApiUrl("devnet"));
  const secret = JSON.parse(fs.readFileSync("secretkey.json") || "[]");
  const secretKey = new Uint8Array(secret);

  const ownerKeypair = Keypair.fromSecretKey(secretKey);

  console.log(ownerKeypair.publicKey.toBase58(), "public key");
  const publickey = ownerKeypair.publicKey;
  const recipientAddress = "FbcBWzcezM77bzx7CxK7EgtGk6VBTeqBPBwJkd17amov";
  const recipient = new PublicKey(recipientAddress);

  console.log(recipient.toBase58(), "recipient address");
  const transaction = new Transaction();

  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: publickey,
    toPubkey: recipient,
    lamports: LAMPORTS_PER_SOL * 0.1,
  });

  transaction.add(sendSolInstruction);

  const signature = await sendAndConfirmTransaction(connection, transaction, [
    ownerKeypair,
  ]);
  console.log(signature, "signature");
}

main();
