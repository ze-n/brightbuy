import "./globalStyles/reset.css";
import "./globalStyles/variables.css";
import "./globalStyles/utility.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotificationBar from "./components/NotificationBar";
function App() {
  return (
    <div className="App">
      <NotificationBar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
