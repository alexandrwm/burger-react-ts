import React from 'react';
import BurgerCraftPage from './pages/BurgerCraftPage';
import Acasa from './pages/Acasa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Meniu from './pages/Meniu';
import NotFoundPage from './pages/NotFoundPage';



const App = () => {
return (
  <div className='page min-w-screen min-h-screen  object-cover flex flex-col overflow-hidden'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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