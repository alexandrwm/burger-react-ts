import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Acasa = () => {

return(
<div className="container relative bg-cover min-h-screen object-cover w-screen bg-no-repeat bg-center bg-[url('https://burgercraft.md/img/cover/2019-05-09/cover.jpg')]">
   <div className="text-cover">
      <h2 className="text-important text-3xl  text-white w-full absolute bottom-[47%] text-center">
         NE GĂSIȚI LA KOGĂLNICEANU 62 ;)
      </h2>
      <span className="btn-to-menu mobile-btn-to-menu">
            <a href="https://burgercraft.md/ro/craft-burger" className="direct-link">Creează-ți burgerul</a>
        </span>
        <span className="caret-to-menu hidden-xs">
            <a href=""></a>
        </span>

   </div>
   <Navbar/>
</div>   
)
}
export default Acasa;