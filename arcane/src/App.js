// components
import Header from "./Header"
import Main from "./Main";
import Footer from "./Footer";

// sass
import "./style/App.sass";

// img
import Jinx from "./img/jinx-img.png";



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
