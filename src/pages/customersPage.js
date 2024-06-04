import React, { useState, useEffect } from 'react';
import CustomerList from '../components/customerList';
import CustomerForm from '../components/customerForm';
import { getCustomers } from '../services/customerService';

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [customerToEdit, setCustomerToEdit] = useState(null);

  const fetchCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSave = () => {
    fetchCustomers();
    setCustomerToEdit(null);
  };

  const handleEdit = (customer) => {
    setCustomerToEdit(customer);
  };

  const handleDelete = () => {
    fetchCustomers();
  };

  return (
    <div className="container">
      <h2>Customers</h2>
      <CustomerForm customerToEdit={customerToEdit} onSave={handleSave} />
      <CustomerList customers={customers} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default CustomersPage;
