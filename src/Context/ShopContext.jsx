
import React, {createContext, useState ,useEffect} from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
    
    
}


const ShopContextProvider = (props) =>{
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [num, setNum] = useState(getDefaultCart());
    

    const handleminus = (itemId) => {
        setNum((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0, // Ensure no negative quantities
        }));
        console.log("Decremented itemId:", itemId, "Quantity:", num[itemId]);
    };
    
    const handleplus = (itemId) => {
        setNum((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1, // Increment quantity
        }));
        console.log("Incremented itemId:", itemId, "Quantity:", num[itemId]);
    };
    

   
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + (num[itemId] || 0), // Add current quantity from `num`
        }));
        setNum(getDefaultCart()); // Reset `num` for all items
    };
    
    const removeFromCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        setNum(getDefaultCart());
    }
    const updateCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1, // Add current quantity from `num`
        }));
        setNum(getDefaultCart()); // Reset `num` for all items
    };
    
    const removeallFromCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-count}));
        setNum(getDefaultCart());
    }
    
    
        let totalAmount = 0;
        let count = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0){
                let itemInfo =all_product.find((product)=>product.id === Number(item))
                
                totalAmount += itemInfo.new_price * cartItems[item]
                count += cartItems[item]
                console.log("itemInfo",totalAmount)
                console.log("cartItems[item]",count)
                

            }
        }
    

    const contextValue = {totalAmount,all_product,cartItems,addToCart,removeFromCart,handleminus,handleplus,num,count,updateCart,removeallFromCart};

    

    return(
        <ShopContext.Provider value ={contextValue}>
            {props.children}
            {console.log("contextValue",props.children)}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider