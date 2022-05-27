import logo from './logo.svg';
import './App.css';
import TextArea from './TextArea';
import Navbar from './Navbar';
import Counter from './Counter';
import About from './About';
import Contact from './Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {

  const navTitle = {
      about:'About Us',
      contact: 'Contact Us',
      Subscribe: 'Subcribe'
  }


  return (
    <Router>
      <Navbar title="Text Utils" navTitle={ navTitle } />
          <Routes>
            <Route exact path="/" element={  <TextArea /> }/>             
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>        
          </Routes>
    </Router>                
  );
}

export default App;
