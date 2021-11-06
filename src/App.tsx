import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ToolState from './context/tools/ToolState';
import Splash from './components/splash/splash';

function App() {
  return (
    <Router>
      <Navbar />
      <ToolState>
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
      </ToolState>
    </Router>
  );
}

export default App;
