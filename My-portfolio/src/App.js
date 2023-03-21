
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import  './components/ProfileContainer/Home/Home.css';
import Profile from './components/ProfileContainer/Home/Profile';
import Footer from './components/ProfileContainer/Home/Footer/Footer';
import Projects from './components/Projects/Projects';
import About from './components/About';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/contact/Contact';

import Navbar2 from './components/Navbar2';
import Contact2 from './components/contact/Contact2';
import Particle2 from './components/Projects/Particle2';

function App() {
  return (
    <>
    
    <div className="App ">
     
      <div className='home-container'>
     <Particle2 id="tsparticles"/>
      <Navbar2 />
     
      <Profile />

      <Footer />
      
    <About />
    <TechStack />

    <Projects />
    <Footer />
    <Contact2 />

    </div>

    <Routes>
     
      
    <Route path="/about" element={<About />}></Route>

      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/contactus" element={<Contact />}></Route>
       <Route path="/projects" element={<Projects /> }></Route>

      
            
     

      {/* <Route path="*" element={<div>Not found</div> }></Route>*/}

    </Routes>
     
    </div>
    </>
  );
}

export default App;
