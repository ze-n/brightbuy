import "./globalStyles/reset.css";
import "./globalStyles/variables.css";
import "./globalStyles/utility.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotificationBar from "./components/NotificationBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import Error from "./pages/Error/Error";
function App() {
  return (
    <div className="App">
      <NotificationBar />
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/cart" Component={Cart}></Route>
          <Route path="/singleproduct" Component={SingleProductPage}></Route>
          <Route path="/*" Component={Error}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
