import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
   <BrowserRouter>
    <div >
        <NavBar/>

        <Routes>
         <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
         <Route path='/category/:categoryId'element={<ItemListContainer></ItemListContainer>}></Route>
         <Route path='/item/:id'element={<ItemDetailContainer></ItemDetailContainer>}></Route>

        </Routes>
     
  
      
      </div>
    </BrowserRouter>
  );
}

export default App;
