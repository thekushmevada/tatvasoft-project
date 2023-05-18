import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"
import Register from "./pages/Register"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />  
          <Route path="/register" element={<Register />} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
