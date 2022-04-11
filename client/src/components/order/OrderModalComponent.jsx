import { Button, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const OrderModalComponent = ({ data , setIsOpen}) => {
  const [selectedRow, setSelectedRow] = useState({})

  useEffect(() => {
    setSelectedRow(data)
  }, [])

  return (
    <div style={{ 
      zIndex: "10", 
      backgroundColor: '#fff',
      position:'absolute', 
      width: '80%',
      top:'5%',
      textTransform:'uppercase',
      textAlign:'center',
      padding: '10px',
      minHeight:'50%',
      boxShadow: '0 0 10px 0 #3d4fb0'

      }} >
      
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" > {selectedRow.id} </Typography>
        </Grid>
      </Grid>
      <Button 
        style={{
            position:'absolute', 
            bottom:'1%',
            right:'2%',
            boxShadow: '0 0 4px 0 #3f51b5'

             }} 
        variant='contained' color='secondary' onClick={() => setIsOpen(false)} >Close</Button>
    </div>
  )
}

export default OrderModalComponent