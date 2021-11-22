import React from 'react';
import Navbar from './components/layout/Navbar';
import ToolState from './context/tools/ToolState';
import ProjectState from './context/projects/ProjectState';
import ProfileState from './context/profile/ProfileState';
import Tools from './components/tools/Tools';
import Projects from './components/projects/Projects';
import Profile from './components/profile/Profile';
import Experience from './components/experience/Exprience';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';

function App() {
  return (
    <ProjectState>
      <ToolState>
        <ProfileState>
          <Profile />
          <Navbar/>
          <Projects />
          <Tools />
          <Experience />
          <Education />
          <Contact />
        </ProfileState>
      </ToolState>
    </ProjectState>
  );
}

export default App;
