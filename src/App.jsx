import Header from "./components/Header";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import EditProducts from "./pages/EditProducts";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/new" element={<NewProduct />} />
          <Route path="/products/edit/:id" element={<EditProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
