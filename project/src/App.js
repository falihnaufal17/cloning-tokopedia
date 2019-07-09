import React from 'react';
import Routes from './routes/routers'
import Navbar from './component/Navbar'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes></Routes>
    </div>
  );
}

export default App;
