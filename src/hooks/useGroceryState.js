import { useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";
import uuid from "uuid/v4";

export default initialItems => {
  const [items, setItems] = useLocalStorageState("items", initialItems);

  return {
    items,
    addItem: newItemText => {
      setItems([...items, { id: uuid(), text: newItemText, purchased: false }]);
    },
    removeItem: itemId => {
      const updatedItems = items.filter(item => item.id !== itemId); 
      setItems(updatedItems);
    },
    toggleItem: itemId => {
      const updatedItems = items.map(item =>
        item.id === itemId ? { ...item, purchased: !item.purchased } : item
      );
      setItems(updatedItems);
    },
    editItem: (itemId, newText) => {
      const updatedItems = items.map(item =>
        item.id === itemId ? { ...item, text: newText } : item
      );
      setItems(updatedItems);
    }
  };
};


// return {
//   items,
//   addItem: newItemText => {
//     setItems([...items, { id: uuid(), text: newItemText, purchased: false }]);
//   },
//   removeItem: itemId => {
//     const updatedItems = items.filter(item => item.id !== itemId);
//     setItems(updatedItems);
//   },
//   toggleItem: itemId => {
//     const updatedItems = items.map(item =>
//       item.id === itemId ? { ...item, purchased: !item.purchased } : item
//     );
//     setItems(updatedItems);
//   },
//   editItem: (itemId, newText) => {
//     const updatedItems = items.map(item =>
//       item.id === itemId ? { ...item, text: newText } : item
//     );
//     setItems(updatedItems);
//   }
// };
// };