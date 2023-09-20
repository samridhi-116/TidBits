//  This is a header component. containing Logo, and navbaar. CSS is done by external CSS.  
//  We included title in header and then default exported header.
import { useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
// import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";
import { IoMdHome, IoMdHelpBuoy, IoMdCart, IoMdPerson} from "react-icons/io";
import {BiSolidOffer} from "react-icons/bi";
import {AiFillShop} from "react-icons/ai";
// const loggedIn=()=>{
//     return true;
// };
const Title = () => (
    <>
    <Link className=" w-[14%]">
        <img data-testid="logo" alt="Logo" src={logo} className="w-full"/>
    </Link>
    </>
);

const Header = () => {
    const isOnline = useOnline();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className=" w-[89%] mx-auto flex flex-row justify-between mt-4">
            <Title />
            <div className=" w-1/2 flex flex-row justify-between items-center text-gray-600 font-sans text-sm font-semibold">
                <div className="flex flex-row items-center">
                    <IoMdHome/>
                    <Link to="/" className=" ml-1"> Home</Link>
                </div>
                <div className="flex flex-row items-center">
                    <BiSolidOffer/>
                    <Link to="/offer" className=" ml-1">Offers</Link>
                </div>
                <div className="flex flex-row items-center">
                    <AiFillShop/>
                    <Link to="/instamart" className=" ml-1">Instamart</Link>
                </div>
                <div className="flex flex-row items-center">
                    <IoMdHelpBuoy/>
                    <Link to="/help" className=" ml-1">Help</Link>
                </div>
                {
                    isLoggedIn ? 
                        <div className="flex flex-row items-center">
                            <IoMdPerson/>
                            <button className="ml-1" onClick={()=>{
                                setIsLoggedIn(false);
                            }}>Sign out</button>                
                        </div>
                    : 
                    <div className="flex flex-row items-center">
                        <IoMdPerson/>
                        <button className="ml-1" onClick={()=>{
                        setIsLoggedIn(true);
                    }}>Sign in </button></div>
                }
                <div className="flex flex-row items-center">
                    <IoMdCart/>
                    <Link to = "/cart" className=" ml-1"><p data-testid="cart-item">
                        Cart({cartItems.length})</p></Link>
                </div>   
            </div>
        </div>  
    ) 
}

export default Header;
