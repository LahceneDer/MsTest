import React, { useEffect, useState } from 'react'
import MaterialTable from '@material-table/core';
import { getSupplierById, getSuppliers, handleFakeData } from '../../controllers/supplierControllers'
import { Button, Grid } from '@material-ui/core';
import AsideMenuComponent from '../shared/AsideMenuComponent';
import NavbarComponent from '../shared/NavbarComponent';
import SupplierModalComponent from './SupplierModalComponent';

const SuppliersListComponent = () => {
  const [suppliers, setSuppliers] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSupplier, setSelectedSupplier] = useState({})

  useEffect(() => {
    getSuppliers(setSuppliers)
  },[])

  const handleData = () => {  
    handleFakeData(setSuppliers) 
  }
  
  return (
    <Grid container spacing={0} >
        <Grid item xs={12} >
          <NavbarComponent />
        </Grid>
        <Grid item xs={2}>
          <AsideMenuComponent />
        </Grid>
        <Grid item xs={10} style={{marginTop:'10px'}}>

        <Button onClick={() => {handleData()}} variant='contained' color='primary' > add fake data</Button>
        {isOpen && selectedSupplier && (
          <SupplierModalComponent setIsOpen={setIsOpen} data={selectedSupplier} />
        )}
        <MaterialTable
              title="Suppliers"
              columns={[
                { title: 'Id', field: 'id' },
                { title: 'Name', field: 'name' },
                { title: 'address', field: 'address' },
              ]}
              data={suppliers}        
              options={{
                filtering: true,
                headerStyle: {
                  backgroundColor: '#247881',
                  color: 'white',
                  fontSize: '19px',
                  textTransform: 'capitalize'
                },
                
              }}
              onRowDoubleClick = { ( evt,rowData )=> {
                setSelectedSupplier(rowData)
                setIsOpen(true)
                getSupplierById(setSelectedSupplier,rowData.id)
              } }
          />
            </Grid>
              
      </Grid>
  )
}
    
export default SuppliersListComponent