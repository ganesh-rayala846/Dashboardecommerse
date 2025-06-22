import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import UserProfileMenu from './components/userprofilemenu';
import Dashboard from './components/dashboard';




function App() {
  return (

     <div className='app-container'>
        <Sidebar />
        <div className="main-content">
          <header>
            <UserProfileMenu />
          </header>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
     
        </div>
  );
}

export default App;