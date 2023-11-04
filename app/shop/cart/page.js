"use client";
import { Box, Grid, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Cart = () => {
  const steps = ["SHOPPING CART", "CHECKOUT", "ORDER STATUS"];

  return (
    <>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={10} lg={10} md={10} sm={10}>
          <Box sx={{ m: 2, width: "100%" }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          <Grid container>
            <Grid item xs={6} md={6} lg={6} sm={12}>
              <Typography
                variant="p"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {" "}
                <PersonOutlineIcon sx={{ mr: 1 }} /> Returning customer? Click
                here to login
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="p">BILLING DETAILS</Typography>
                <hr />
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m:1, width: "45%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="First Name"
                      multiline
                    />
                    <TextField
                      id="outlined-textarea"
                      label="Last Name"
                      multiline
                    />
                  </div>
                  <TextField
                      id="outlined-textarea"
                      label="Company Name"
                      multiline
                    />

                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6} lg={6} sm={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
