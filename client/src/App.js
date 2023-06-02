import Navbar from "./components/navbar/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import StickyFooter from "./components/StickyFooter/StickyFooter";
import { mode } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App" style={{backgroundColor:mode?"#fff":"#191D28"}}>
      <Navbar />
      <Header />
      <Body />
      <Footer />
      <StickyFooter />
    </div>
  );
}

export default App;
