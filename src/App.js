import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import React, { useState } from 'react';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const[mode,setMode]=useState('light')//darkmode enable or not
  const toggleMode=()=>{
    if(mode==='light'){
     setMode('dark')
     document.body.style.backgroundColor='#042743';
     
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white';
      
     }
  }
  return (
 <>
   
     <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode} ></Navbar>
 
     <div className="container my-3">
       <TextForm heading ="Enter the text to analyze" mode={mode}/>
           
      </div>
   
        {/* <About></About> */}
  

 
 </>
 
  );

  }
export default App;
