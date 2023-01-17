import './App.css';
import { NavBar } from './components/navBar/NavBar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cart } from './components/cart/Cart';
import { CartContextProvider } from './components/context/CartContext';


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/category" element={<ItemListContainer />}/>
        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="*" element={ <h2>URL no encontrada</h2> } />
      </Routes>
      </CartContextProvider>
  </BrowserRouter>
  );
}

export default App;
