import React, { useState } from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Aff from './Aff';
import User from './User';
import Post from './Post';


function App() {
    
    return (
      <div className='ff'>

        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Aff/>} />
        <Route path='/user' element ={<User/>} />
        <Route path='/post' element ={<Post/>} />
        </Routes>
        </BrowserRouter>

      </div>

    )
}
export default App;
