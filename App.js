//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Textform from './Components/Textform';
import Alert1 from './Components/Alert1';
import { useState } from 'react';
function App() {
  const [mode, setmode]= useState('light');
  const togglemode=()=>{
    if (mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor='gray';
      showalert("dark mode is enable!", "success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode enable", "success")
    }
  }
  const [alert, setalert]= useState(null);
  const showalert = (messege, type)=>{
    setalert({
      msg:messege,
      type:type
    })
    setTimeout(() =>{
      setalert(null);
    },1500);
  }
  return(
   <>
   
 { <Navbar title="textUtils"mode={mode} togglemode={togglemode}/> } 
 <Alert1 Alert1={alert}/>
  <div className="container">
   
        { <Textform heading="Enter your text" /> }
   </div>
   { <About About="About us"/> }
   
   </>
  );
}
export default App;
