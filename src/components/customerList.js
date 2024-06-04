import React from 'react';
import CustomerItem from './customerItem';

const CustomerList = ({ customers }) => {
  return (
    <div>
      {customers.map((customer) => (
        <CustomerItem key={customer.id} customer={customer} />
      ))}
    </div>
  );
};

export default CustomerList;
