import React from 'react';
import { deleteCustomer } from '../services/customerService';

const CustomerItem = ({ customer, onEdit, onDelete }) => {
  const handleDelete = async () => {
    await deleteCustomer(customer.id);
    onDelete();
  };

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{customer.name}</h5>
        <p className="card-text">{customer.email}</p>
        <p className="card-text">{customer.phone}</p>
        <p className="card-text">{customer.address}</p>
        <button className="btn btn-secondary mr-2" onClick={() => onEdit(customer)}>Edit</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default CustomerItem;

