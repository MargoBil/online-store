import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../context/context';
// import styles from './Orders.module.css';

export const Orders = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const {orders, totalCost} = useContext(Context);
  
  useEffect(() => {
    setTotalQuantity(orders.reduce((acc, item) => acc + item.quantity, 0));
  }, [setTotalQuantity]);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>quantity</th>
            <th>cost</th>
          </tr>
          {orders.map(item => {
            const {name, cost, quantity, id} = item;
            return (
              <>
                <tr key={id}>
                  <th>{name}</th>
                  <th>{quantity}</th>
                  <th>{cost}</th>
                </tr>
              </>
            );
          })}
          <tr>
            <th>total</th>
            <th>{totalQuantity}</th>
            <th>{totalCost}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
