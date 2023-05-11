import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './components/Home';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Summary from './components/Summary';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div style={{ display: 'block', padding: 30 }}>
        <CssBaseline>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/summary" element={<Summary/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/education" element={<Education/>}/>
              <Route exact path="/experience" element={<Experience/>}/>
            </Routes>
          </CssBaseline>
      </div>
    </Router>
  );
}

export default App;
