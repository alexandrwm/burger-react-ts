const Acasa = () => {

return(
    <div className="navbar  justify-between mx-20">
        <div className="logo ">
            <a href="#">
            <img src="https://burgercraft.md/img/logo.svg"/>
            </a> 
        </div>
        
        <div className="middle-part px-[20px] py-0 text-sm  font-bold ">
            <div className="topPart   items-center border-b border-[#bebdbd] pb-4 text-sm">
                
                    <div className="phone">
                        <a href="tell">
                            <span>0793 38 000</span>
                        </a>
                    </div>
                    <div className="mail">
                        <a href="miall">
                            <span>info@burgercraft.md</span>
                         </a>
                    </div>
                    <div className="livrare">
                        <a href="livrare">
                             <span>livrare</span>
                        </a>
                    
                </div>
                <div className="cart">
                        <span className="cart-icon"></span>
                    </div>
            </div>
            <div className="bottomPart text-white  flex space-x-8 uppercase mt-[17px] mx-[25px] mb-0">
                <a href="#">Acasa</a>
                <a href="#">Meniu</a>
                <a href="#">Creaza-ti burgerul</a>
                <a href="#">Despre noi</a>
                <a href="#">Blog</a>
            </div>
        </div>
        <div className="social-lang text-white px-5 py-0 ">
            <div className="social  flex justify-end " >
                <a href="#" >
                    <img src="https://img.icons8.com/material-rounded/24/FFFFFF/facebook-f--v1.png" alt="facebook" />
                </a>
                <a href="#">
                    <img src="https://img.icons8.com/material-outlined/24/FFFFFF/instagram-new--v1.png" alt="instagram"/>
                </a>
            </div>
            <div className="lang font-bold mt-9 text-sm">
                <a href="#ro"  >
                    <span className=" hover:text-orange-300">RO</span>
                </a>
                <a href="#ru">
                    <span className=" hover:text-orange-300">RU</span>
                </a>
                <a href="#eng">
                    <span className=" hover:text-orange-300">ENG</span>
                </a>
            </div>
        </div>

        
    </div>
    
)
}
export default Acasa;