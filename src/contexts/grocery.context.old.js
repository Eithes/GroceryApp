import React, { createContext, useReducer } from 'react';
// import useGroceryState from '../hooks/useGroceryState';
import itemsReducer from '../reducers/items.reducer';

const defaultItems = [
  { id: 1, text: 'tomatoes', purchased: false },
  { id: 2, text: 'chicken', purchased: false },
  { id: 3, text: 'cheese', purchased: false },
];

export const GroceryContext = createContext();

export function GroceryProvider(props) {
  const [items, dispatch] = useReducer(itemsReducer, defaultItems);

//before reducer was:
//   const groceryItemsMethods = useGroceryState(defaultItems);

  return (
    <GroceryContext.Provider value={{ items, dispatch }}>
      {props.children}  
    </GroceryContext.Provider>  
  )
  
}
