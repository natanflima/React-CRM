import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <h1>CRM Application</h1>
      <p>Welcome to the CRM Application. Manage your customers efficiently.</p>
      <Link to="/customers" className="btn btn-primary">View Customers</Link>
    </div>
  );
};

export default HomePage;
