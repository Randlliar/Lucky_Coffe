import React from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';

function Admin() {
  const items = useSelector(({ orders }) => orders);
  console.log(items);
  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <div className="content__top"></div>

        <div className="content__items"></div>
      </div>
    </div>
  );
}

export default Admin;
