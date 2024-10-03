import React from 'react';
import './App.css';
import BurgerCraftPage from './pages/BurgerCraftPage';
import Acasa from './pages/Acasa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Meniu from './pages/Meniu';



const App = () => {
return (
  <div className='w-screen h-screen overflow-hidden'>
    <BrowserRouter>
      <Routes>
        <Route index element ={<Acasa/>}/>
      </Routes>
    </BrowserRouter>
</div>
)
}
export default App;