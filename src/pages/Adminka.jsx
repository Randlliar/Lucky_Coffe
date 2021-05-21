import React from 'react';
import Navbar from '../components/Navbar';
import { CartItem, Button } from '../components';
import { useSelector, useDispatch } from 'react-redux';

function Adminka() {
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <div className="content__top"></div>
        Список заказов
        <div className="content__items">
          {addedPizzas.map((obj) => (
            <CartItem
              key={obj.id}
              id={obj.id}
              name={obj.name}
              type={obj.type}
              size={obj.size}
              totalPrice={items[obj.id].totalPrice}
              totalCount={items[obj.id].items.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Adminka;
