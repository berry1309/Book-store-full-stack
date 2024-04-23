import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import AddBooks from "./pages/AddBooks";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Update from "./pages/Update"
import {
  BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbooks" element={<AddBooks />} />
        <Route path="/Update" element={<Update />} />       
      </Routes>
      <Footer />
    </Router>
    
  );

}

export default App;
