import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ProductsListPage} from './views/ProductsListPage';
import {ProductInfoPage} from './views/ProductInfoPage';
import {OrdersPage} from './views/OrdersPage';
import {
  PRODUCTS_LIST_ROUTE,
  PRODUCT_INFO_ROUTE,
  ORDERS_ROUTE,
} from './helpers/routerConfig';
import {ProductsProvider} from './context/ContextProvider';

function App() {
  return (
    <ProductsProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to={PRODUCTS_LIST_ROUTE} />
        </Route>
        <Route path={PRODUCTS_LIST_ROUTE} exact component={ProductsListPage} />
        <Route path={PRODUCT_INFO_ROUTE} exact component={ProductInfoPage} />
        <Route path={ORDERS_ROUTE} exact component={OrdersPage} />
        <Redirect to="/" />
      </Switch>
    </ProductsProvider>
  );
}

export default App;
