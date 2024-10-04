// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Fabrication from "./pages/Fabrication";
import Finances from "./pages/Finances";
import Delivery from "./pages/Delivery";
import Recycling from "./pages/Recycling";
import Root from "./pages/Root";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root layout route */}
        <Route path="/" element={<Root />}>
          <Route index path="/" element={<Home />} /> {/* Default route */}
          <Route path="about" element={<About />} />
          <Route path="services/fabrication" element={<Fabrication />} />
          <Route path="services/recycling" element={<Recycling />} />
          <Route path="services/finances" element={<Finances />} />
          <Route path="services/delivery" element={<Delivery />} />
          <Route path="products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
