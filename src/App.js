import React from "react";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Error from "./Pages/Error";

const App = () => {
    return (
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="https://yashpaota.github.io/ReactOnlineShoppingApp/" element={<Home />} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
       </Routes>
      </Router>
      );
};

export default App;