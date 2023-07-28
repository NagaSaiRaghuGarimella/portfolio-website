import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import SocialLinks from './Components/SocialLinks';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <SocialLinks></SocialLinks>
      <About></About>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
