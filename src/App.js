import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert1 from "./components/Alert1";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const[mode1, setMode1] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "success");
      document.title = "textUtils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "Textutild - Light mode";
    }
  };
  // const toggleMode1=() =>{
  //   if(mode1==='light'){
  //     setMode1 ('dark');
  //     document.body.style.backgroundColor = 'blue';
  //     showAlert("dark mode has been enabled","success")
  //   }
  //   else{
  //     setMode1 ('light')
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("light mode has been enabled","success")
  //   }
  // }

  return (
    <>
      <Router>
        <Navbar title="textutils2" mode={mode} toggleMode={toggleMode} />
        <Alert1 alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm showAlert = {showAlert} heading = "enter the text to analyze below " mode = {mode}  />
          </Route> */}
            <Route exact path="/about" element={<About />} />
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="enter the text to analyze below "
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
