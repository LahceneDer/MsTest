import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const SupplierModalComponent = ({ data, setIsOpen }) => {
  const [selectedRow, setSelectedRow] = useState({});

  useEffect(() => {
    setSelectedRow(data);
  }, []);

  return (
    <div
      style={{
        zIndex: "10",
        backgroundColor: "#fff",
        position: "absolute",
        width: "80%",
        top: "5%",
        textTransform: "uppercase",
        textAlign: "center",
        padding: "10px",
        minHeight: "50%",
        boxShadow: "0 0 10px 0 #3d4fb0",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography
            style={{
              textTransform: "capitalize",
              width: "90%",
              backgroundColor: "#4089bc",
              color: "white",
              padding: "1%",
              margin: ".5% auto",
            }}
            variant="h5"
          >
            {" "}
            Supplier details{" "}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img src="profil.jpg" width="100%" alt="profile" />
        </Grid>
        <Grid item xs={8} style={{ textAlign: "left", padding: "1%" }}>
          <Typography>name: {selectedRow.name}</Typography>
          <Typography>address: {selectedRow.address}</Typography>
        </Grid>
      </Grid>
      <Button
        style={{
          position: "absolute",
          bottom: "1%",
          right: "2%",
          boxShadow: "0 0 4px 0 #3f51b5",
        }}
        variant="contained"
        size="large"
        color="secondary"
        onClick={() => setIsOpen(false)}
      >
        Close
      </Button>
    </div>
  );
};

export default SupplierModalComponent;
