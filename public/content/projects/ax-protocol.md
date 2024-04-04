---
slug: ax-protocol
title: Ax Protocol
description: An interoperability protocol powered by its own cross-chain native stablecoin, USX. The USX stablecoin is pegged to the US dollar and backed by Curve's 3Pool. The stablecoin is fungible across all supported chains, requires only gas fees for transfers, and is immune to slippage when transferring across chains.
img: /images/project-ax-protocol.png
repo: https://github.com/ax-protocol
# client: https://ax.finance
date: 27 October 2023
---

**NOTE:** I contributed to this project using the [0xhashmap](https://github.com/0xhashmap) pseudonym due to regulatory uncertainty in the United States. However, I have decided to use my real name for building and communicating ideas moving forward.

All the work described below was completed solely by me and another engineer.

## Summary

The Ax Protocol is an interoperability protocol powered by its own cross-chain native stablecoin, USX. The USX stablecoin is pegged to the US dollar and backed by Curve's 3Pool. The stablecoin is fungible across all supported chains, requires only gas fees for transfers, and is immune to slippage when transferring across chains.

## Official Docs

The official docs for the Ax Protocol can be found at [docs.ax.finance](https://docs.ax.finance).

## Smart Contracts

The Ax Protocol has four primary [ERC-1967](https://eips.ethereum.org/EIPS/eip-1967) proxy contracts:

-   [USX](https://github.com/Ax-Protocol/usx-contracts/blob/main/src/token/USX.sol)
-   [Treasury](https://github.com/Ax-Protocol/usx-contracts/blob/main/src/treasury/Treasury.sol)
-   [LayerZeroBridge](https://github.com/Ax-Protocol/usx-contracts/blob/main/src/bridging/layer_zero/LayerZeroBridge.sol)
-   [WormholeBridge](https://github.com/Ax-Protocol/usx-contracts/blob/main/src/bridging/wormhole/WormholeBridge.sol)

These smart contracts underwent rigorous internal and external audits. The external auditor was [Ottersec](https://osec.io), one of the top smart contract security firms at the time the protocol was built. The final draft of Ottersec's audit report can be found [here](https://docs.ax.finance/references/audit-reports).

### Deployed Addresses

USX, LayerZeroBridge, and WormholeBridge were deployed to 9 different chains: Ethereum, Optimism, Arbitrum One, Polygon, Gnosis, Celo, Avalanche C-Chain, Fantom, and BNB Smart Chain. The Treasury contract was only deployed to Ethereum.

-   USX (same on all chains): <a href="https://blockscan.com/address/0x89718f712da063Bac92CaC3468F109db852B05ff"><span style="word-break: break-all">0x89718f712da063Bac92CaC3468F109db852B05ff</span></a>
-   Treasury (Ethereum): <a href="https://etherscan.io/address/0x71c814A26ef81a9A3B196D73DdD1942E2DF815ed"><span style="word-break: break-all">0x71c814A26ef81a9A3B196D73DdD1942E2DF815ed</span></a>
-   LayerZeroBridge (same on all chains): <a href="https://blockscan.com/address/0x8d8F6f500983AC946D711E7a85661cb701C0CE5F"><span style="word-break: break-all">0x8d8F6f500983AC946D711E7a85661cb701C0CE5F</span></a>
-   WormholeBridge (same on all chains): <a href="https://blockscan.com/address/0x4800c8d6Ba7176F084004c0294320B634e3476f8"><span style="word-break: break-all">0x4800c8d6Ba7176F084004c0294320B634e3476f8</span></a>

### USX

The [USX](https://github.com/Ax-Protocol/usx-contracts/blob/main/src/token/USX.sol) contract adheres to the [ERC-20](https://eips.ethereum.org/EIPS/eip-20) standard and incorporates cross-chain messaging for seamless transfers between blockchains. The contract has all standard ERC-20 functions like **approve()**, **transfer()** and **balanceOf()**, along with **sendFrom()**, a specialized function that enables cross-chain transfers of USX. Transfers are executed by burning USX on the source chain and minting an equal amount on the destination chain.

USX is designed to be bridge-agnostic, enabling the use of any message-passing protocol for cross-chain transfers. Although it makes sense to only use one message-passing protocol at a time to minimize attack vectors, the ability to switch between primary and backup bridges provides an additional layer of security. This bridge modularity also future-proofs USX, considering that better message-passing protocols may emerge in the future. [LayerZero](https://layerzero.network) and [Wormhole](https://wormhole.com) are the only message-passing protocols supported at the time of writing this. Supporting other protocols, like [Axelar](https://axelar.network), would require building a bridging contract that integrates with the Axelar network (e.g., AxelarBridge).

### Treasury

The [Treasury](https://github.com/Ax-Protocol/usx-contracts/blob/main/src/treasury/Treasury.sol) contract manages the asset-backing of USX, maintaining its value pegged to the US dollar (1 USX ≈ $1). It uses Curve's [3Pool](https://curve.fi/#/ethereum/pools/3pool/deposit) to create and remove stable USX liquidity.

Users can deposit DAI, USDC, USDT, or 3CRV (the 3Pool LP token) into the Treasury contract to receive USX. This process involves the **mint()** function in the Treasury contract: when called, it deposits the provided token into Curve's 3Pool, which gives back 3CRV. If 3CRV is already provided, this step is skipped. The 3CRV is staked on [Convex](https://www.convexfinance.com/) and the **mint()** function is subsequently called in the USX contract to mint the user USX.

Conversely, users can exchange USX for DAI, USDC, USDT, or 3CRV through the Treasury contract. This involves the **redeem()** function: users specify an amount of USX to exchange, which triggers the unstaking of an equivalent amount of 3CRV from [Convex](https://www.convexfinance.com/). If necessary, this 3CRV is swapped in Curve's 3Pool for the desired token (DAI, USDC, or USDT). The supplied USX is burnt using the **burn()** function in the USX contract and the chosen token is given to the user.

### LayerZeroBridge

The [LayerZeroBridge](https://github.com/Ax-Protocol/usx-contracts/blob/main/src/bridging/layer_zero/LayerZeroBridge.sol) contract is specifically designed to enable the USX contract to send and receive cross-chain messages via [LayerZero](https://layerzero.network). The LayerZeroBridge contract serves as a [User Application](https://layerzero.gitbook.io/docs/faq/glossary) in the LayerZero network, since it implements the logic to talk to [LayerZero Endpoint](https://layerzero.gitbook.io/docs/faq/layerzero-endpoint) contracts, which handle message transmissions. LayerZero runs their own [message relaying system](https://layerzero.gitbook.io/docs/ecosystem/relayer/develop-a-relayer) to handle message verification and delivery to destination chains. When the **sendFrom()** function in the USX contract is called on the source chain, with the **\_bridgeAddress** parameter set to the LayerZeroBridge address, a cross-chain USX transfer is initiated via LayerZero. Below is the flow that is triggered by this function call.

1. The specified amount of USX is burnt for the sender on the source chain by calling the **burn()** function in the USX contract.
2. The **sendMessage()** function is called on the source chain's LayerZeroBridge contract.
3. The **send()** function is called on the source chain's [LayerZeroEndpoint](https://github.com/LayerZero-Labs/LayerZero/blob/main/contracts/Endpoint.sol) contract.
4. A **SendToChain** event is emitted on the source chain.
5. An off-chain LayerZero service verifies the message. Following this verification, this service calls the **validateTransactionProof()** function on the destination chain's [UltraLightNodeV2](https://github.com/LayerZero-Labs/LayerZero/blob/main/contracts/UltraLightNodeV2.sol) contract. This action triggers the **receivePayload()** function on the [LayerZeroEndpoint](https://github.com/LayerZero-Labs/LayerZero/blob/main/contracts/Endpoint.sol), which then calls the **lzReceive()** function on the destination chain's LayerZeroBridge contract.
6. The recipient is minted the specified amount of USX on the destination chain by calling the **mint()** function on the USX contract.
7. A **ReceiveFromChain** event is emitted on the destination chain.

### WormholeBridge

The [WormholeBridge](https://github.com/Ax-Protocol/usx-contracts/blob/main/src/bridging/wormhole/WormholeBridge.sol) contract is specifically designed to enable the USX contract to send and receive cross-chain messages via [Wormhole](https://wormhole.com). The WormholeBridge contract serves as an [Emitter (or xDapp)](https://docs.wormhole.com/wormhole/explore-wormhole/components#on-chain-components) contracts in the Wormhole network, since it implements the logic to talk to [Wormhole Core](https://docs.wormhole.com/wormhole/explore-wormhole/core-contracts) contracts, which [Guardians (validator nodes)](https://docs.wormhole.com/wormhole/explore-wormhole/guardian) in the Wormhole network observe to validate messages. A [specialized off-chain relayer](https://docs.wormhole.com/wormhole/explore-wormhole/relayer#specialized-relayers) was built by the Ax Protocol team to listen for validated USX messages in the Wormhole network and deliver them to their respective destination chain. When the **sendFrom()** function in the USX contract is called on the source chain, with the **\_bridgeAddress** parameter set to the WormholeBridge address, a cross-chain USX transfer is initiated via Wormhole. Below is the flow that is triggered by this function call.

1. The specified amount of USX is burnt for the sender on the source chain by calling the **burn()** function on the USX contract.
2. The **sendMessage()** function is called on the source chain's WormholeBridge contract.
3. The **publishMessage()** function is called on the source chain's [WormholeCore](https://github.com/wormhole-foundation/wormhole/blob/main/ethereum/contracts/Implementation.sol) contract.
4. A **SendToChain** event is emitted on the source chain.
5. Guardians (validator nodes) in the Wormhole network validate the message off chain.
6. The off-chain Wormhole message relaying system built by the Ax Protocol team picks up the verified message from the Wormhole network and delivers it by calling the **processMessage()** function on the destination chain's WormholeBridge contract.
7. The recipient is minted the specified amount of USX on the destination chain by calling the **mint()** function on the USX contract.
8. A **ReceiveFromChain** event is emitted on the destination chain.

## Off-Chain Backend Services

### Wormhole Message Relayer

This was the first Python relayer system built for Wormhole cross-chain messages. This service consists of two primary components: (1) the Spy Listener and (2) the Relayer.

The Spy Listener listens to the Wormhole network for validated Ax Protocol messages via gRPC stream. When a message is picked up, it is parsed and sent to a [Redis](https://redis.io) queue. The Relayer then picks up messages from the Redis queue and delivers them to their respective destination chain.

### AxScan

The AxScan service listens to on-chain events emitted by LayerZeroBridge and WormholeBridge to track the status of USX cross-chain transfers. The status can be obtained via a public API endpoint.

### Gas System

This service is tasked with running a statistical analysis on the gas prices of all Ax Protocol-supported chains to update the destination chain fees on WormholeBridge. This is done by calling the **setSendFees()** function.

## Frontends

All frontends were built using TypeScript, Next.js, and TailwindCSS.

### Ax Protocol Homepage

The landing page for the Ax Protocol.

-   [Demo](https://youtu.be/leKT48Y3Z_k)

### USX Frontend

User interface for transferring USX across chains, minting USX, and redeeming USX.

-   [Demo](https://youtu.be/zF00RIodux8)

### AxScan Frontend

User interface for checking the status of USX cross-chain transfers.

-   [Demo](https://youtu.be/ZDsVkCmSysE)

## Developer Libraries

### USX Transfer Widget

This is a React library that enables third-party apps to facilitate USX cross-chain transfers direclty within their user interface.

-   [Github Repo](https://github.com/Ax-Protocol/widgets)
-   [Demo](https://youtu.be/GbD3Pvbyig4)
