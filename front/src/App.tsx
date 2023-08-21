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
import ChatbotComponent from './components/chatbot/chatbot';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  
  initGA();

  return (
    <ProjectState>
      <ToolState>
        <ProfileState>
          <ToastContainer />
          <ChatbotComponent />
          <Profile />
          <Navbar/>
          <Experience />
          <Projects />
          <Tools />
          <Education />
          <Footer />
        </ProfileState>
      </ToolState>
    </ProjectState>
  );
}

export default App;
