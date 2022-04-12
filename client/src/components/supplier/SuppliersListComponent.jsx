import React, { useContext, useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import {
  getSupplierById,
  getSuppliers,
  handleFakeData,
} from "../../controllers/supplierControllers";
import { Button } from "@material-ui/core";

import SupplierModalComponent from "./SupplierModalComponent";
import { GlobalContext } from "../../context/globalContext";

const SuppliersListComponent = () => {
  // Suppliers array state
  const [suppliers, setSuppliers] = useState([]);
  // Number of suppliers state
  const [suppliersCount, setSuppliersCount] = useState(0);
  // modal popup state
  const [isOpen, setIsOpen] = useState(false);
  // selected supplier when double click
  const [selectedSupplier, setSelectedSupplier] = useState({});
  // use global context - Context API
  const initialState = useContext(GlobalContext);

  useEffect(() => {
    getSuppliers(setSuppliers, setSuppliersCount);
  }, []);

  useEffect(() => {
    initialState.suppliersCount = suppliersCount;
    console.log(initialState);
  }, [suppliersCount]);

  const handleData = () => {
    handleFakeData(setSuppliers);
  };

  return (
    <>
      <Button
        onClick={() => handleData()}
        variant="contained"
        color="primary"
        styles={{ margin: "5px" }}
      >
        {" "}
        add fake data
      </Button>
      {isOpen && selectedSupplier && (
        <SupplierModalComponent setIsOpen={setIsOpen} data={selectedSupplier} />
      )}
      <MaterialTable
        title="Suppliers"
        style={{ marginTop:'15px'}}
        columns={[
          { title: "Id", field: "id" },
          { title: "Name", field: "name", type: "string" },
          { title: "address", field: "address", type: "string" },
        ]}
        data={suppliers}
        options={{
          filtering: true,
          headerStyle: {
            backgroundColor: "#247881",
            color: "white",
            fontSize: "19px",
            textTransform: "capitalize",
          },
        }}
        onRowDoubleClick={(evt, rowData) => {
          setSelectedSupplier(rowData);
          setIsOpen(true);
          getSupplierById(setSelectedSupplier, rowData.id);
        }}
      />
    </>
  );
};

export default SuppliersListComponent;
