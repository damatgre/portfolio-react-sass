import Navbar from './components/navbar/navbar';
import Contact from './components/contact/contact';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import Work from './components/work/work';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">

        <Intro/>
        <Portfolio/>
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
