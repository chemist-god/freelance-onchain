
# **FreelanceChain**

**FreelanceChain** is a decentralized freelancing platform designed to connect designers and clients seamlessly. By leveraging blockchain technology, FreelanceChain ensures secure, transparent, and efficient collaboration between freelancers and clients through the use of smart contracts and cryptocurrency-based payments.

![image](https://github.com/user-attachments/assets/c78f4631-b4b1-471e-ab00-1e509709b6da)


---

## **Table of Contents**

1. [Overview](#overview)
2. [Core Features](#core-features)
3. [Technology Stack](#technology-stack)
4. [User Flow](#user-flow)
5. [Smart Contracts Development](#smart-contracts-development)
6. [Security and Privacy](#security-and-privacy)
7. [Real-Life Problem Solved](#real-life-problem-solved)
8. [Installation Guide](#installation-guide)
9. [License](#license)

---

## **Overview**

FreelanceChain is built to empower designers by offering a decentralized platform where they can showcase their work, connect with potential clients, and receive secure payments in a trustless, blockchain-powered environment. It solves the traditional problems faced by freelancers, such as delayed payments, high platform fees, and limited control over their portfolios.

With a user-friendly interface and strong backend, FreelanceChain makes freelancing more accessible and efficient for designers, while clients benefit from transparent project management and instant payment processing through smart contracts.

---

## **Core Features**

- **Decentralized Platform:** No central authority, all interactions are managed via blockchain.
- **Smart Contracts for Payments:** Automated escrow services ensure freelancers get paid on time.
- **Low Transaction Fees:** Minimal platform fees thanks to blockchain, allowing freelancers to keep more of their earnings.
- **Global Accessibility:** Freelancers can join from anywhere in the world using cryptocurrency.
- **Portfolio Ownership:** Designers have full control over their work, stored securely on decentralized storage solutions like IPFS.
- **Wallet Integration:** Users can connect their wallets (e.g., MetaMask) to the platform for seamless payments and interactions.

---

## **Technology Stack**
Frontend:

- **React.js**: A React-based framework for server-side rendering and static web applications.
- **TypeScript**: Strongly typed JavaScript for building scalable and maintainable code.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-** OnchainKit**: Provides support for blockchain interaction using the Fleek template.
- **OnchainProviders**: Used for integrating Web3 wallet providers.

Backend:

- **Smart Contracts**: Developed in Solidity, deployed on the Base network.

Blockchain:

- **Base Network**: A Layer 2 Ethereum network optimized for decentralized applications.
- **Wallet Integration**: Supports crypto wallet connections using Web3.
- 
Deployment:

- **Fleek Onchainkit**: For deploying decentralized web applications (dApps).
  
---

## **User Flow**

1. **Sign Up / Log In**: Users create an account or log in using their wallet.
2. **Create Profile**: Freelancers set up a profile, showcase their work, and define their services.
3. **Browse Jobs / Hire Freelancer**: Clients can browse designer profiles or post job opportunities.
4. **Smart Contract Escrow**: Once a job is agreed upon, a smart contract is deployed, holding the payment in escrow until the job is completed.
5. **Project Completion & Payment**: After completion, the smart contract automatically releases the payment to the freelancer.
6. **Ratings & Reviews**: Both parties rate each other to build trust in the community.

---

## **Smart Contracts Development**

The smart contracts developed for FreelanceChain handle critical operations:

- **Job Creation**: Smart contracts are created for each freelance job, specifying deliverables, deadlines, and payment details.
- **Escrow Service**: Payments are held in a secure escrow account until job completion.
- **Job Completion and Verification**: Upon job approval by the client, the smart contract triggers the release of funds to the freelancer's wallet.
- **Dispute Handling**: Dispute mechanisms can be incorporated to mediate disagreements between freelancers and clients.

**Main Contract Methods:**

- `createJob(jobDetails, paymentAmount)`
- `releasePayment()`
- `raiseDispute()`
  
The smart contract logic ensures that both parties are protected, payments are automatic, and there’s no room for fraud or manipulation.

---

## **Security and Privacy**

Security is a top priority for FreelanceChain. The platform incorporates:

- **Wallet-based Login**: Users authenticate via their wallets (e.g., MetaMask), reducing the need for personal data.
- **Smart Contracts**: Payment automation ensures no sensitive data is involved, and blockchain ensures all transactions are immutable.
- **Data Protection**: Portfolios and job details are stored on decentralized networks like IPFS, ensuring privacy and reducing the risk of data breaches.

---

## **Real-Life Problem Solved**

FreelanceChain addresses several real-world issues faced by freelancers and clients:

1. **Trust Issues**: Blockchain-based reviews and ratings are immutable, creating transparency.
2. **Delayed Payments**: Smart contract escrow guarantees freelancers get paid on time.
3. **High Fees**: Traditional platforms charge significant transaction fees, but FreelanceChain reduces these with blockchain’s efficiency.
4. **Global Access**: Freelancers from underbanked regions can participate using cryptocurrency.
5. **Portfolio Ownership**: Designers retain control of their work on a decentralized platform.

---

## **Installation Guide**

To get started with FreelanceChain locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chemist-god/freelance-onchain.git
   cd FreelanceChain
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Deploy Smart Contracts**:
   - Follow the setup on **Base blockchain** using the guide: [Base Documentation](https://onchainkit.xyz/getting-started)
   - Use MetaMask to connect your wallet and deploy smart contracts.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
