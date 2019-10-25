import React, { useReducer } from 'react';
import Paper from '@material-ui/core/Paper';

function reducer(state, action) {
  switch (action.type)  {
    case 'INCREMENT':
      return { count: state.count + action.amount };
    case 'DECREMENT':
      return { count: state.count - action.amount };
    case 'RESET':
      return { count: 0 };   
  }  
}

export function ReducerApp() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <Paper        
      style={{
        padding: '1rem',
        margin: '3rem',         
        backgroundColor: '#fafafa',  
      }}
    >

      <h4>{state.count}</h4>

      <button 
        style={{ marginRight: '1rem'}}
        onClick={() => dispatch({type: 'INCREMENT', amount: 1})}
      > 
        Add 1
      </button>
      <button
        style={{ marginRight: '1rem'}}
        onClick={() => dispatch({type: 'DECREMENT', amount: 1})}
      >
        Subtract 1
      </button>
  
      <button 
        style={{ marginRight: '1rem'}}
        onClick={() => dispatch({type: 'INCREMENT', amount: 5})}
      > 
        Add 5
      </button>
      <button 
        style={{ marginRight: '1rem'}}
        onClick={() => dispatch({type: 'RESET'})}
      > 
        Reset
      </button>
    </Paper>  
  );
}