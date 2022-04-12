import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/dashboard/Index';
import OrdersListComponent from './components/order/OrdersListComponent';
import AsideMenuComponent from './components/shared/AsideMenuComponent';
import NavbarComponent from './components/shared/NavbarComponent';
import SuppliersListComponent from './components/supplier/SuppliersListComponent';
import { GlobalContext  } from './context/globalContext'




function App() {

  const initialState = {}

  return (
      <GlobalContext.Provider value={initialState} >
      <div className="App">
       <BrowserRouter>
        <Grid container spacing={0} >
          <Grid item xs={12} >
            <NavbarComponent />
          </Grid>
          <Grid item xs={2}>
            <AsideMenuComponent />
          </Grid>
          <Grid item xs={10} style={{marginTop:'10px', padding: '1.5%'}}>
            <Routes>
              <Route path="/home" element={<Index />} />
              <Route path="/orders" element={<OrdersListComponent />} />
              <Route path="/suppliers" element={<SuppliersListComponent />} />
            </Routes>
          </Grid>
        </Grid>
        </BrowserRouter>
      </div>
      </GlobalContext.Provider>
  );
}

export default App;
