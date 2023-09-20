import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const handleClearCart =() =>{
        dispatch(clearCart());
    }

    const cartItems = useSelector(store => store.cart.items);
    return(
        <>
            <p className="font-sans font-medium text-[10px] leading-relaxed text-gray-700 text-center">Your Cart</p>
            <div className=" w-4/5 mx-auto flex flex-row justify-between">
                <div className="w-3/5">
                    {cartItems.map( (item) => <CartItems key={item.id} {...item}/>)}
                    <button onClick={()=>handleClearCart()}>Clear Cart</button> 
                </div>
                <div className=" w-2/6">
                    <p> Total Items - {cartItems.length}</p>
                    <button>Check out</button>
                </div>
            </div>
        </>
        
    );
}

export default Cart;