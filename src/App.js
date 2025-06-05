// import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Footer';
import { Mainarea } from './Mainarea';
import { Contact } from './Contact';
import { Home } from './Home';
import { About } from './About';
import { Link, Route, Router, Routes } from 'react-router';


function App()
{
  return (
    <div>
      {/* <h1>JAMSHEDPUR</h1>
      <p>Jamshedpur is the Steel city of Jharkhand.</p> */}
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      {/* <Home></Home>
      <About></About>
      <Contact></Contact>
      <Header></Header>
      <Mainarea></Mainarea>
      <Footer></Footer> */}
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
