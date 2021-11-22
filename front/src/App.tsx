import React from 'react';
import Navbar from './components/layout/Navbar';
import ToolState from './context/tools/ToolState';
import ProjectState from './context/projects/ProjectState';
import ProfileState from './context/profile/ProfileState';
import Tools from './components/tools/Tools';
import Projects from './components/projects/Projects';

function App() {
  return (
    <ProjectState>
      <ToolState>
        <ProfileState>
          <Navbar/>
          <Projects />
          <Tools />
        </ProfileState>
      </ToolState>
    </ProjectState>
  );
}

export default App;
