import React, { createContext,  } from 'react';
// import useGroceryState from '../hooks/useGroceryState';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import itemsReducer from '../reducers/items.reducer';

const defaultItems = [
  { id: 1, text: 'tomatoes', purchased: false },
  { id: 2, text: 'chicken', purchased: false },
  { id: 3, text: 'cheese', purchased: false },
];

export const GroceryContext = createContext();
export const DispatchContext = createContext();

export function GroceryProvider(props) {
const [items, dispatch] = useLocalStorageReducer('items', defaultItems, itemsReducer);

//before reducer was:
//   const groceryItemsMethods = useGroceryState(defaultItems);
//then - 
//   const [items, dispatch] = useReducer(itemsReducer, defaultItems);

  return (
    <GroceryContext.Provider value={ items }>
        <DispatchContext.Provider value={ dispatch }>
            {props.children} 
        </DispatchContext.Provider>       
    </GroceryContext.Provider>  
  )
  
}
