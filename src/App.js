import './App.css';
import {NavBar} from './components/navbar/NavBar'
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a mi E-commerce"} />
    </div>
  );
}

export default App;
