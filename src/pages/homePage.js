import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
    <div className="container-fluid h-100">
      <h1>CRM Application</h1>
      <p>Welcome to the CRM Application. Manage your customers efficiently.</p>
      <Link to="/customers" className="btn btn-primary">View Customers</Link>
      <img src="images/image-homepage-crm.svg" alt="crm image" className='right-image'></img>
    </div>
    {/* <div className="body">
      <p>lorem</p>
    </div> */}
    </>
  );
};

export default HomePage;
