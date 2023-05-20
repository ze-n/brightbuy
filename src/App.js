import "./globalStyles/reset.css";
import "./globalStyles/variables.css";
import "./globalStyles/utility.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotificationBar from "./components/NotificationBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <NotificationBar />
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
