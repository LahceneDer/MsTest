import { Grid } from '@material-ui/core';
import './App.css';
import Index from './components/dashboard/Index';
import AsideMenuComponent from './components/shared/AsideMenuComponent';
import NavbarComponent from './components/shared/NavbarComponent';



function App() {
  return (
    
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
  );
}

export default App;
