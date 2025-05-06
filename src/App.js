import logo from './logo.svg';
import './App.css';
import Rout from "../src/Route/Router";
import { useState } from 'react';

function App() {
  // const[user,setUser]=useState("Priyanka")
  // const gt=()=>{
  //   setUser("Asmita")
  // }
  return (
    <>    
    <div className="App">
      <Rout/>
      {/* <h1>{user}</h1>
      <button onClick={gt}>CLICK</button> */}
    </div>
    </>
  );
}

export default App;
