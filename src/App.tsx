import React from 'react';

import './App.css';
import SongsLandingPage from './pages/SongsLandingPage';
// import { Route, Router, Routes } from 'react-router-dom';
import {Route, Routes } from "react-router-dom";
import AddSong from './pages/AddSong';
import EditSong from './pages/EditSong';
// import EditSong from './pages/EditSong';


function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/" element={<SongsLandingPage/>} />
        <Route path="/addSong" element={<AddSong/>} />
        <Route path="/editSong" element={<EditSong/>} />
        

      </Routes>
  
 


   

    </div>
  );
}

export default App;
