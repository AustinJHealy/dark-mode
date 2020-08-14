import React from "react";

const About = () => {
  return (
    <div className="About">
      <h2>About Cryptocurrency</h2>
      <p>
        Cryptocurrency is a form of payment that can be exchanged online for
        goods and services. Many companies have issued their own currencies,
        often called tokens, and these can be traded specifically for the good
        or service that the company provides. Think of them as you would arcade
        tokens or casino chips. You’ll need to exchange real currency for the
        cryptocurrency to access the good or service. Cryptocurrencies work
        using a technology called blockchain. Blockchain is a decentralized
        technology spread across many computers that manages and records
        transactions. Part of the appeal of this technology is its security.
      </p>
      <p>
        More than 2,200 different cryptocurrencies are traded publicly,
        according to CoinMarketCap.com, a market research website. And
        cryptocurrencies continue to proliferate, raising money through initial
        coin offerings, or ICOs. The total value of all cryptocurrencies on June
        6, 2019 was about $246 billion, according to CoinMarketCap, and the
        total value of all bitcoins, the most popular digital currency, was
        pegged at about $136 billion.
      </p>
      <h2>About Blockchain Technology</h2>
      <p>
        Blockchain, sometimes referred to as Distributed Ledger Technology
        (DLT), makes the history of any digital asset unalterable and
        transparent through the use of decentralization and cryptographic
        hashing. A simple analogy for understanding blockchain technology is a
        Google Doc. When we create a document and share it with a group of
        people, the document is distributed instead of copied or transferred.
        This creates a decentralized distribution chain that gives everyone
        access to the document at the same time. No one is locked out awaiting
        changes from another party, while all modifications to the doc are being
        recorded in real-time, making changes completely transparent.
      </p>
      <p>
        Blockchain is an especially promising and revolutionary technology
        because it helps reduce risk, stamps out fraud and brings transparency
        in a scaleable way for myriad uses.{" "}
      </p>
      <p>
        Blockchain consists of three important concepts: blocks, nodes and
        miners. </p>
        <p>Blocks:
             Every chain consists of multiple blocks and each block
        has three basic elements: The data in the block. A 32-bit whole number
        called a nonce. The nonce is randomly generated when a block is created,
        which then generates a block header hash. The hash is a 256-bit number
        wedded to the nonce. It must start with a huge number of zeroes (i.e.,
        be extremely small). When the first block of a chain is created, a nonce
        generates the cryptographic hash. The data in the block is considered
        signed and forever tied to the nonce and hash unless it is mined.</p><p> Miners:
            
        Miners create new blocks on the chain through a process called mining.
        In a blockchain every block has its own unique nonce and hash, but also
        references the hash of the previous block in the chain, so mining a
        block isn't easy, especially on large chains. Miners use special
        software to solve the incredibly complex math problem of finding a nonce
        that generates an accepted hash. Because the nonce is only 32 bits and
        the hash is 256, there are roughly four billion possible nonce-hash
        combinations that must be mined before the right one is found. When that
        happens miners are said to have found the "golden nonce" and their block
        is added to the chain. Making a change to any block earlier in the chain
        requires re-mining not just the block with the change, but all of the
        blocks that come after. This is why it's extremely difficult to
        manipulate blockchain technology. Think of it is as "safety in math"
        since finding golden nonces requires an enormous amount of time and
        computing power. When a block is successfully mined, the change is
        accepted by all of the nodes on the network and the miner is rewarded
        financially.
      </p>
      <p>Nodes
One of the most important concepts in blockchain technology is decentralization. No one computer or organization can own the chain. Instead, it is a distributed ledger via the nodes connected to the chain. Nodes can be any kind of electronic device that maintains copies of the blockchain and keeps the network functioning. 

Every node has its own copy of the blockchain and the network must algorithmically approve any newly mined block for the chain to be updated, trusted and verified. Since blockchains are transparent, every action in the ledger can be easily checked and viewed. Each participant is given a unique alphanumeric identification number that shows their transactions.

Combining public information with a system of checks-and-balances helps the blockchain maintain integrity and creates trust among users. Essentially, blockchains can be thought of as the scaleability of trust via technology. 

</p>
    </div>
  );
};
export default About;
