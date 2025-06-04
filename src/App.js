// import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Footer';
import { Mainarea } from './Mainarea';


function App()
{
  return (
    <div>
      <h1>JAMSHEDPUR</h1>
      <p>Jamshedpur is the Steel city of Jharkhand.</p>
      <Header></Header>
      <Mainarea></Mainarea>
      <Footer></Footer>
    </div>
  );
}

export default App;
