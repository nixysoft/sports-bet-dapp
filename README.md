# ⚽ Sports Bet Dapp DApp 🏗️

**A Decentralized Betting Platform with ChakraUI**

## How It Works:

1️⃣ **Challenge:** One user (address) challenges another with a bet amount and selects a referee.

2️⃣ **Accept:** The challenged user accepts and places a matching bet.

3️⃣ **Start:** The referee signals the start of the game, locking in the challenge (ideally when a real-life match begins).

4️⃣ **Score & Payout:** The referee records the score, and winnings are distributed based on the outcome (winner-takes-all or split if it's a tie).

5️⃣ *(Coming Soon)* **NFT Rewards:** After the match, all participants can claim an SVG NFT showing the results—a unique souvenir of the game!

---

## Setup Requirements

Before you get started, make sure these are installed:

- **Node (v18 LTS)** – [Download](https://nodejs.org/en/download/)
- **Yarn** (v1 or v2+) – [Installation guide for Yarn v1](https://classic.yarnpkg.com/en/docs/install/) or [Yarn v2+](https://yarnpkg.com/getting-started/install)
- **Git** – [Download](https://git-scm.com/downloads)

---

## Quickstart Guide

Follow these steps to launch Sports Bet Dapp locally:

1️⃣ **Clone the Repository & Install Dependencies:**

   ```bash
   git clone https://github.com/nixysoft/sports-bet-dapp.git
   cd sports-bet-dapp
   yarn install
   ```

2️⃣ **Start the Local Network:**

   ```bash
   yarn chain
   ```

   This command launches a local Ethereum network using Hardhat. You’ll use it for development and testing.

3️⃣ **Deploy Contracts:**

   Open a second terminal and run:

   ```bash
   yarn deploy
   ```

   This deploys a test smart contract to the local network.

4️⃣ **Run the App:**

   In a third terminal, start the Next.js frontend app:

   ```bash
   yarn start
   ```

   Access the app on `http://localhost:3000` to interact with the smart contract directly in the interface.

---

## Key Code Locations 📂

- **Smart Contract:** `Sports Bet Dapp.sol` in `packages/hardhat/contracts`
- **Deployment Scripts:** `packages/hardhat/deploy`
- **Frontend Files:** `packages/nextjs/pages`
- **Type Definitions:** `packages/nextjs/types`

---

## Goals for the Final Product 🎯

- **Betting Options:** Offer multiple ways to place bets.
- **Social Features:** Let users find and challenge nearby teams.
- **Referee Rewards:** Enable referees to earn by keeping games fair.

---

## Benefits 🎉

**For All Users:**

- Display NFTs of past matches on profiles 📈.
- Share stats and data to highlight achievements 🏅.
- Coordinate with other players, teams, and referees in-app.

**For Individual Users:**

- Find teams by sport and region 🌎.
- Connect socially to organize local matches.

**For Teams:**

- Locate and challenge other local teams for matches.
- Split location costs with other teams.
- Place team bets on game outcomes 💰.

**For Referees:**

- Act as trusted third parties for matches ⚖️.
- Earn immediate payment after scoring a match 💵.