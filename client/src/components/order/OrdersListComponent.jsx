import React, { useEffect, useState } from 'react'
import MaterialTable from '@material-table/core';
import { getOrderById, getOrders } from '../../controllers/orderControllers';
import { Button, Grid } from '@material-ui/core';
import NavbarComponent from '../shared/NavbarComponent';
import AsideMenuComponent from '../shared/AsideMenuComponent';
import { handleFakeData } from '../../controllers/orderControllers';
import OrderModalComponent from './OrderModalComponent';

const OrdersListComponent = () => {
    const [orders, setOrders] = useState([])
    // modal popup state
    const [isOpen, setIsOpen] = useState(false)
    // get selected order detail
    const [selectedOrder, setSelectedOrder] = useState({})

    useEffect(() => {
        getOrders(setOrders)
      },[])

    const handleData = () => {
        handleFakeData(setOrders)
    }
  return (

    <Grid container spacing={0} >
    <Grid item xs={12} >
      <NavbarComponent />
    </Grid>
    <Grid item xs={2}>
      <AsideMenuComponent />
    </Grid>
    <Grid item xs={10} style={{marginTop:'10px'}} >
        <Button onClick={() => handleData()} variant='contained' color='primary' > add fake data</Button>
        {isOpen && selectedOrder && (
          <OrderModalComponent setIsOpen={setIsOpen} data={selectedOrder} />
        )}
        <MaterialTable
            title="Orders"
            columns={[
            { title: 'Id', field: 'id' },
            { title: 'Number of products', field: 'NoOfProducts' },
            { title: 'Amount', field: 'amount', type:'currency',
                 cellStyle:{textAlign:'left'},
                 currencySetting:{ currencyCode:'DZD', minimumFractionDigits:0, maximumFractionDigits:2}},
            ]}
            data={orders}        
            options={{
            filtering: true,
            headerStyle: {
                backgroundColor: '#247881',
                color: 'white',
                fontSize: '19px',
                textTransform: 'capitalize'
            }
            }}
            onRowDoubleClick = { ( evt,rowData )=> {
              setSelectedOrder(rowData)
              setIsOpen(true)
              getOrderById(setSelectedOrder,rowData.id)
            } }
        />
    </Grid>
  </Grid>

    
  )
}

export default OrdersListComponent