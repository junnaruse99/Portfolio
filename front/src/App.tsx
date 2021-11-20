import React from 'react';
import Navbar from './components/layout/Navbar';
import ToolState from './context/tools/ToolState';
import ProjectState from './context/projects/ProjectState';
import Tools from './components/tools/Tools';
import Projects from './components/projects/Projects';

function App() {
  return (
    <ProjectState>
      <ToolState>
        <Navbar />
        <Projects />
        <Tools />
      </ToolState>
    </ProjectState>
  );
}

export default App;
