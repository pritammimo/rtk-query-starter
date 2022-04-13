import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Product from "./Product";
import Products from "./Products";
function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<h1>Hello React Router</h1>} /> */}
        <Route path="/" element={<Products />}  />
        <Route path="/product/:id" element={<Product />}  />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;