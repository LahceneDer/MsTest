import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrdersListComponent from './components/order/OrdersListComponent';
import SuppliersListComponent from './components/supplier/SuppliersListComponent';


ReactDOM.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/orders" element={<OrdersListComponent />} />
      <Route path="/suppliers" element={<SuppliersListComponent />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


