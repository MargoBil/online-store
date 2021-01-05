import React from 'react';
import styles from './Orders.module.css';

export const Orders = ({orders, totalQuantity, totalCost}) => {
  const isOrders = orders.length > 0;
  return (
    <div className={styles.tableBox}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tableHeader}>
            <th key={'name'}>NAME OF PRODUCT</th>
            <th key={'count'}>COUNT</th>
            <th key={'cost'}>COST</th>
          </tr>
          {isOrders ? (
            orders.map(item => {
              const {name, cost, count, id} = item;
              return (
                <tr className={styles.ordersRaw} key={id}>
                  <th className={styles.orderName}>{name}</th>
                  <th>{count}</th>
                  <th>{cost}</th>
                </tr>
              );
            })
          ) : (
            <tr key="noneOrders" className={styles.noneOrders}>
              <th colSpan="3" className={styles.noneOrdersNote}>
                Does not contain any orders yet...
              </th>
            </tr>
          )}
          <tr className={styles.total}>
            <th>TOTAL</th>
            <th>{totalQuantity}</th>
            <th>{totalCost}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
