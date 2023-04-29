import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import RemerasContainer from "./components/rutesProducts/RemerasContainer";
import PantalonesContainer from "./components/rutesProducts/PantalonesContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


 export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido" />} />
        <Route path="/remeras" element={<RemerasContainer greeting="Remeras" />} />
        <Route path="/pantalones" element={<PantalonesContainer greeting="Pantalones" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

