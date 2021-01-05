import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../context/context';
import {onChangeTotalQuantity} from '../helpers/onChangeTotalQuantity';
import {Orders} from '../components/Orders/Orders';

export const OrdersPage = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const {orders, totalCost} = useContext(Context);

  useEffect(() => {
    setTotalQuantity(onChangeTotalQuantity(orders));
  }, [setTotalQuantity]);

  return <Orders orders={orders} totalQuantity={totalQuantity} totalCost={totalCost} />;
};
