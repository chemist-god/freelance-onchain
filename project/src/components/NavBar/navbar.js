// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OnchainKit } from 'onchainkit';

const Navbar = () => {
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    try {
      const wallet = new OnchainKit({
        network: 'base-sepolia',  // Specify the network here
      });

      const connection = await wallet.connect();  // Connect the wallet

      if (connection) {
        setWalletConnected(true); // Set state when connected
        console.log('Wallet connected successfully!', connection);
      } else {
        console.log('Failed to connect wallet');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="text-white hover:text-gray-300">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="text-white hover:text-gray-300">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/payment" className="text-white hover:text-gray-300">
            Payment
          </Link>
        </li>
        <li>
          <button
            onClick={connectWallet}
            className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-700"
          >
            {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
