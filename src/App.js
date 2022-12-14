import './App.css';
import { NavBar } from './components/navBar/NavBar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryName" element={<ItemListContainer />} />
      <Route path="/category" element={<ItemListContainer />}/>
      <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />
      <Route path="/cart" element={ <h3>Carrito de compras</h3> } />
      <Route path="*" element={ <h2>URL no encontrada</h2> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
