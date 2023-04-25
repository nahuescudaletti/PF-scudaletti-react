import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


 export function App() {
  return (
    <div className="app">
        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos"}/>
        
    </div>
  );
}
export default App;

