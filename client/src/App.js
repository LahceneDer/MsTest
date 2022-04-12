import { Grid } from '@material-ui/core';
import { createContext, useState } from 'react';
import './App.css';
import Index from './components/dashboard/Index';
import AsideMenuComponent from './components/shared/AsideMenuComponent';
import NavbarComponent from './components/shared/NavbarComponent';



function App() {
  const dataCountContext = createContext({"suppliers": 0, "orders": 0})
  const [dataCount, setDataCount] = useState({})
  return (
    <dataCountContext.Provider value={dataCount} >
      <div className="App">
        <Grid container spacing={0} >
          <Grid item xs={12} >
            <NavbarComponent />
          </Grid>
          <Grid item xs={2}>
            <AsideMenuComponent />
          </Grid>
          <Grid item xs={10}>
            <Index />
          </Grid>
        </Grid>
      </div>
    </dataCountContext.Provider>
  );
}

export default App;
