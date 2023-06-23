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
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Update from "./pages/Update/Update";
import AddProduct from "./pages/AddProduct/AddProduct";
import Clothing from "./pages/Products/Clothing";
import Food from "./pages/Products/Food";
import Accessories from "./pages/Products/Accessories";
import Electronics from "./pages/Products/Electronics";
import Shoes from "./pages/Products/Shoes";
import Featured from "./pages/Products/Featured";
import BestSellers from "./pages/Products/BestSellers";
function App() {
  return (
    <div className="App">
      <NotificationBar />
      <Router>
        <Header />
        <Routes>
          <Route path="/brightbuy" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/cart" Component={Cart}></Route>
          <Route
            path="/singleproductpage/:id"
            Component={SingleProductPage}
          ></Route>
          <Route path="/products" Component={Products}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/signup" Component={Signup}></Route>
          <Route path="/update" Component={Update}></Route>
          <Route path="/addproduct" Component={AddProduct}></Route>
          <Route path="/clothing" Component={Clothing}></Route>
          <Route path="/food" Component={Food}></Route>
          <Route path="/accessories" Component={Accessories}></Route>
          <Route path="/electronics" Component={Electronics}></Route>
          <Route path="/shoes" Component={Shoes}></Route>
          <Route path="/featured" Component={Featured}></Route>
          <Route path="/bestsellers" Component={BestSellers}></Route>

          <Route path="/*" Component={Error}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
