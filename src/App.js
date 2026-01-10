import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import Acoo from './components/Acoo';
import Footer from './components/footer';
import Alert from './components/Alert';
import Signin from './Signin';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled", "warning");
      document.title = "dark mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = "light mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Navbar"
          about="About Text"
          mode={mode}
          togglemode={togglemode}
        />

        <Alert alert={alert} />

        <Switch>
          <Route exact path="/">
            <Home />
            <Acoo />
            <Textform
              head="Enter your text"
              mode={mode}
              showAlert={showAlert}
            />
            <Footer></Footer>
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/signin">
           <Signin></Signin>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
