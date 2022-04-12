import React, { useContext, useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { getOrderById, getOrders } from "../../controllers/orderControllers";
import { Button } from "@material-ui/core";
import { handleFakeData } from "../../controllers/orderControllers";
import OrderModalComponent from "./OrderModalComponent";
import { GlobalContext } from "../../context/globalContext";

const OrdersListComponent = () => {
  const [orders, setOrders] = useState([]);
  // modal popup state
  const [isOpen, setIsOpen] = useState(false);
  // get selected order detail
  const [selectedOrder, setSelectedOrder] = useState({});
  // use global context - Context API
  const initialState = useContext(GlobalContext);
  // Number of orders state
  const [ordersCount, setOrdersCount] = useState(0);

  useEffect(() => {
    getOrders(setOrders, setOrdersCount);
    console.log(initialState);
  }, []);

  useEffect(() => {
    initialState.ordersCount = ordersCount;
    // initialState.orders = orders
    console.log(initialState);
  }, [ordersCount]);
  const handleData = () => {
    handleFakeData(setOrders);
  };
  return (
    <>
      <Button
        onClick={() => handleData()}
        variant="contained"
        color="primary"
        styles={{ marginBottom: "5px" }}
      >
        {" "}
        add fake data
      </Button>
      {isOpen && selectedOrder && (
        <OrderModalComponent setIsOpen={setIsOpen} data={selectedOrder} />
      )}
      <MaterialTable
        title="Orders"
        style={{ marginTop:'15px'}}
        columns={[
          { title: "Id", field: "id" },
          { title: "Number of products", field: "NoOfProducts" },
          {
            title: "Amount",
            field: "amount",
            type: "currency",
            cellStyle: { textAlign: "left" },
            currencySetting: {
              currencyCode: "DZD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            },
          },
        ]}
        data={orders}
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
          setSelectedOrder(rowData);
          setIsOpen(true);
          getOrderById(setSelectedOrder, rowData.id);
        }}
      />
    </>
  );
};

export default OrdersListComponent;
