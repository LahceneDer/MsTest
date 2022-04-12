import { Grid, Paper, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/globalContext'

const Index = () => {

  const  initialState  = useContext(GlobalContext)
  const [ counts, setCounts ] = useState(initialState)

  return (
    <>
        <Typography variant='h4' style={{margin:"1%", textAlign: "left"}} >MsTest Dashboard </Typography>
        <Grid style={{margin: ".5% auto"}} container spacing={1}>
          <Grid item xs={5} >
            <Paper style={{padding: "5%", backgroundColor: "#585cb7", color: "white", cursor:"pointer",}} >
            <Typography variant='h5'>
            {counts.ordersCount > 0 ? `${counts.ordersCount} Order` : `No Order` } 
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={5} >
          <Paper style={{padding: "5%", backgroundColor: "#585cb7", color: "white", cursor:"pointer",}} >
          <Typography variant='h5'>
           {counts.suppliersCount > 0 ? `${counts.suppliersCount} Supplier` : `No Supplier` } 
          </Typography>
          </Paper>

          </Grid>
        </Grid>

        <br/>
    </>
  )
}

export default Index