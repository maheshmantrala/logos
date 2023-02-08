import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Automobile from './components/Automobile/Automobile'
import Policelogos from './components/Policelogos/Policelogos'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';

const App = () => (
  <div>
    <Router>
    <Navbar/>
    <Routes>

<Route exact path="/automobilelogos" element={<Automobile/>}>   </Route>
<Route exact path="/policelogos" element={<Policelogos/>}>   </Route>
<Route exact path="/" element={<Header/>}>   </Route>

    </Routes>

    </Router>

    
   
    
  </div>
);

export default App;
