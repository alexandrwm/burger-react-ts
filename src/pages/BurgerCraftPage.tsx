import React from 'react';
import BurgerSelection from '../components/BurgerSelection';

const BurgerCraftPage = () => {
return(
<div className='container'>
  <div className="burger-image burger-top" >
    <span className="img-description">CHIFLA BRIOCHE</span>
    <img src="	https://burgercraft.md/img/settings-store/2017-10-04/asset-1.svg" alt="chifla-top"/>
  </div>
  
  <div className="burger-image burger-carne-vita" >
    <span  className="img-description">PÂRJOALǍ VITǍ</span>
    <img src="	https://burgercraft.md/img/addons/2017-10-16/pirjoala-de-vita.svg" alt="parjoala vita"/>
  </div>
                
  <div className="burger-image burger-bottom">
    <span className="img-description">CHIFLA BRIOCHEgg</span>
    <img src="https://burgercraft.md/img/settings-store/2017-10-04/asset-23.svg" alt="chifla-bottom"/>
  </div>
</div>
)
}
export default BurgerCraftPage;