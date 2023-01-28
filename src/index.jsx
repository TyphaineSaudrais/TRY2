import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Logements from './pages/Logements';
import Error from './components/Error';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
            <Header/>
            <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/Apropos" element={<Apropos/>}/>
            <Route path="/Logements/:{id}"  element={<Logements/>}/>
            <Route  path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
    </Router>
  </React.StrictMode>
)


