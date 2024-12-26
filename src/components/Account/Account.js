import React, { useState, useEffect } from 'react';
import { createAccount, getCustomers, getAccountsByCustomerId } from '../../services/api';
import './Account.css';

const Account = () => {
  const [customers, setCustomers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [accountDetails, setAccountDetails] = useState({ customerId: '', balance: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await getCustomers();
      setCustomers(response.data);
    };
    fetchCustomers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      await createAccount(accountDetails);
      setMessage('Account created successfully!');
      const response = await getAccountsByCustomerId(accountDetails.customerId);
      setAccounts(response.data);
    } catch (err) {
      setMessage('Error creating account.');
    }
  };

  const handleCustomerChange = async (e) => {
    const customerId = e.target.value;
    setAccountDetails({ ...accountDetails, customerId });
    const response = await getAccountsByCustomerId(customerId);
    setAccounts(response.data);
  };

  return (
    <div className="account-container">
      <h2>Accounts</h2>
      <form onSubmit={handleCreateAccount} className="account-form">
        <select
          name="customerId"
          value={accountDetails.customerId}
          onChange={handleCustomerChange}
          required
        >
          <option value="">Select Customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="balance"
          placeholder="Initial Balance"
          value={accountDetails.balance}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Account</button>
      </form>
      {message && <p className="message">{message}</p>}
      <h3>Accounts List</h3>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            Account ID: {account.id}, Balance: ${account.balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Account;
