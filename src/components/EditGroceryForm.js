import React, { useContext }  from "react";

import useInputState from "../hooks/useInputState";
import { DispatchContext } from '../contexts/grocery.context';

import TextField from "@material-ui/core/TextField";

function EditGroceryForm({ id, text, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(text);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        // before reducer: editItem(id, value);
        dispatch({ type: 'editItem', id: id, newItem: value });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditGroceryForm;
