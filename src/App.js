import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ContactoPage } from './components/ContactoPage/Contactanos';

function App() {
  return (
   <BrowserRouter>
    <div >
        <NavBar/>
        <Routes>
         <Route path='/' element={<ItemListContainer/>}></Route>
         <Route path='/category/:categoryId'element={<ItemListContainer/>}></Route>
         <Route path='/item/:id'element={<ItemDetailContainer/>}></Route>
         <Route path='/contactenos' element={<ContactoPage/>}></Route>
        </Routes>
     
  
      
      </div>
    </BrowserRouter>
  );
}

export default App;
