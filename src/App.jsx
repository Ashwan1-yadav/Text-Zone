import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";
import Alert from "./components/Alert";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import About from "./components/About";

const App = () => {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Form
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
