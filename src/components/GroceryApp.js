import React from "react";
import GroceryList from "./GroceryList";
import GroceryForm from "./GroceryForm";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import { GroceryProvider } from '../contexts/grocery.context';

function GroceryApp() {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar position='static' style={{ height: "64px", backgroundColor:'#e34646'}}>
        <Toolbar>
          <Typography color='inherit' variant='h5'>GROCERY APP</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: "2rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <GroceryProvider>
            <GroceryForm />
            <GroceryList      
            />
          </GroceryProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default GroceryApp;
