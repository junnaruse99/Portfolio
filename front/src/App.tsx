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
import Footer from './components/layout/Footer';
import initGA from './components/analytics/init';

function App() {
  
  initGA();

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
          <Footer />
        </ProfileState>
      </ToolState>
    </ProjectState>
  );
}

export default App;
