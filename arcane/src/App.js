// components
import Header from "./components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer";

// sass
import './style/App.sass';

// img
import Jinx from './img/jinx-img.png';



function App() {
  return (
    <div className="app-container">
      <img src={Jinx} alt="" />
      <div className="app-content">
        <Header/>
        <Main/>
        <Footer/>
      </div>
      
    </div>
    
  );
}

export default App;
