import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import ProductList from "./components/products/ProductList";

function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}

export default App;