import React, { useState, useEffect } from 'react';
import { createCustomer, updateCustomer } from '../services/customerService';

const CustomerForm = ({ customerToEdit, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (customerToEdit) {
      setName(customerToEdit.name);
      setEmail(customerToEdit.email);
      setPhone(customerToEdit.phone);
      setAddress(customerToEdit.address);
    }
  }, [customerToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customer = { name, email, phone, address };
    if (customerToEdit) {
      await updateCustomer(customerToEdit.id, customer);
    } else {
      await createCustomer(customer);
    }
    onSave();
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">
        {customerToEdit ? 'Update Customer' : 'Add Customer'}
      </button>
    </form>
  );
};

export default CustomerForm;

