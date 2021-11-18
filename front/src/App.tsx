import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ToolState from './context/tools/ToolState';
import ProjectState from './context/projects/ProjectState';
import Splash from './components/splash/splash';
import Projects from './components/projects/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <ProjectState>
        <ToolState>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </ToolState>
      </ProjectState>
    </Router>
  );
}

export default App;
