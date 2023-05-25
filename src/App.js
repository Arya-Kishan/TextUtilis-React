import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light")
  function toggle() {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.Color = 'white';
      showAlert("success", "DARK MODE ENABLED");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.Color = 'black';
      showAlert("warning", "LIGHT MODE ENABLED");
    }
  }
  const [alert, setAlert] = useState(null);
  function showAlert(type, message) {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="React" home="Home" mode={mode} toggle={toggle} />
      <Alert alert={alert} />

      {/* <Routes> */}
      {/* <Route path='/home' element={<Textform mode={mode} showAlert={showAlert} />} /> */}
      <Textform mode={mode} showAlert={showAlert} />
      {/* <Route path='/about' element={<About mode={mode} />} /> */}
      {/* <About mode={mode} /> */}
      {/* </Routes> */}
      {/* </Router> */}

    </>
  )


}
export default App;
