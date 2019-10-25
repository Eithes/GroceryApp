import React, { useContext }  from "react";
import Item from "./Item";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import { GroceryContext } from '../contexts/grocery.context';

function GroceryList() {
  const items = useContext(GroceryContext);
  if (items.length)
    return (
      <Paper>
        <List>
          {items.map((item, i) => (            
            <React.Fragment key={i}>
              <Item
                {...item}
                key={item.id}              
              />
              {i < items.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default GroceryList;
