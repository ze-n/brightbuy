import "./globalStyles/reset.css";
import "./globalStyles/variables.css";
import "./globalStyles/utility.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotificationBar from "./components/NotificationBar";
import Home from "./pages/Home/Home";
import HorizontalScroll from "./components/HorizontalScroll";
import ClothingLine from "./pages/Home/ClothingLine";
function App() {
  return (
    <div className="App">
      <NotificationBar />
      <Header />
      <Home />
      <HorizontalScroll />
      <ClothingLine />
      <Footer />
    </div>
  );
}

export default App;
