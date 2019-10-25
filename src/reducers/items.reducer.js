import uuid from "uuid/v4";

//   {type: 'addItem', text: newItemText }

const itemsReducer = (state, action) => {
    switch (action.type)  {
      case 'addItem':
        return [...state, { id: uuid(), text: action.text ,purchased: false }];
      case 'removeItem':
        return state.filter(item => item.id !== action.id);   
      case 'toggleItem':
        return state.map(item =>
            item.id === action.id ? { ...item, purchased: !item.purchased } : item
          ); 
      case 'editItem':
        return state.map(item =>
            item.id === action.id ? { ...item, text: action.newItem } : item
          );   
      default:
        return state;
    }
}
export default itemsReducer;
