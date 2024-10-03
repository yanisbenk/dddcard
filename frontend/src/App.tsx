import React from "react"; // Ajoute cette ligne
import "./App.css";
import { CartComponent } from "./components/CartComponent";
import { ProductComponent } from "./components/ProductComponent";

function App() {
  return (
    <div className="App">
      <CartComponent />
      <ProductComponent />
    </div>
  );
}

export default App;
