/* eslint-disable react/prop-types */
import React from 'react';
import {Orders} from '../Orders/Orders';
import styles from './Layout.module.css';

export const Layout = ({children}) => {
  return (
    <div className={styles}>
      <Orders />
      {children}
    </div>
  );
};
