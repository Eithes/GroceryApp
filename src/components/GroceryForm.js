import React, { useContext } from "react";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

import useInputState from "../hooks/useInputState";
import { DispatchContext } from '../contexts/grocery.context';

function GroceryForm() {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState("");  
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'addItem', text: value });
          //before reducer: addItem(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Item'
          fullWidth
        />
      </form>
    </Paper>
  );
}
export default GroceryForm;
