import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ExploreMenu from "./component/ExploreMenu/ExploreMenu";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./component/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./component/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import Search from "./component/Search/Search";

function App() {
  const [showLogin, setShowlogin] = useState(false);
  const [category, setCategory] = useState("All");

  return (
    <>
      {showLogin ? <LoginPopup setShowlogin={setShowlogin} /> : <></>}
      <Navbar setShowlogin={setShowlogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <ExploreMenu category={category} setCategory={setCategory} />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/Search" element={<Search />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
