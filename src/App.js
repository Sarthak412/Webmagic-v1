import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar logo="Webmagic" link_1="About" link_2="Services" link_3="Blog" link_4="Contact"/>
      <Hero/>
      <About />
      <Services/>
      <Blog />
    </div>
  );
}

export default App;
