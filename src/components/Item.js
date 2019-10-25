import React, { useContext, memo } from "react";

import useToggleState from "../hooks/useToggleState";

import EditGroceryForm from "./EditGroceryForm";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import { DispatchContext } from '../contexts/grocery.context';

function Item({ id, text, purchased }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditGroceryForm
          id={id}
          text={text}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={purchased}
            // before reducer: onChange={() => toggleItem(id)}
            onChange={() => dispatch({ type:'toggleItem', id: id})}
            style={{color: '#4695e3'}}
          />
          <ListItemText 
            style={{ textDecoration: purchased ? "line-through" : "none" }}
          >
            {text}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton 
              aria-label='Delete' 
              // before reducer: onClick={() => removeItem(id)} 
              onClick={() => dispatch({ type:'removeItem', id: id })} 
              style={{color: '#4695e3'}}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton 
              aria-label='Edit' 
              onClick={toggle} 
              style={{color: '#4695e3'}}
            >
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Item);
