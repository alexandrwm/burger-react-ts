import React from 'react';
import BurgerCraftPage from './pages/BurgerCraftPage';
import Acasa from './pages/Acasa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Meniu from './pages/Meniu';
import NotFoundPage from './pages/NotFoundPage';



const App = () => {
return (
  <div className='w-screen h-screen overflow-hidden'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Acasa/>}/>
        <Route path="/burger-craft" element={<BurgerCraftPage />} />
        <Route path='/meniu' element={<Meniu/>} />

        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
</div>
)
}
export default App;