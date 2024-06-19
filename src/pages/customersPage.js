import React, { useState, useEffect } from 'react';
import CustomerList from '../components/CustomerList';
import CustomerForm from '../components/CustomerForm';
import { getCustomers } from '../services/customerService';
import './CustomersPage.css'

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
      {/* <h2 className='Customers'>Customers</h2> */}
      {/* <CustomerForm CustomerToEdit={customerToEdit} onSave={handleSave} /> */}
      <CustomerList customers={customers} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default CustomersPage;
