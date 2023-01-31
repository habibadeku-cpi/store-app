import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "./abstracts/store.abstract";


// import { store } from './abstracts/store.abstract';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { actions } from './abstracts/store.abstract';



function App() {
  const value = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const increase=()=>{
    dispatch(actions.increment());
  }
  const decrease=()=>{
    dispatch(actions.decrement());
   }

  return (
    <div className="App">
      <h3>{ value.value } -- { value.keepPrevious }</h3>

      <button onClick={ increase }>increase</button>
      <button onClick={ decrease }>decrease</button>
    </div>
  );
}

export default App;
