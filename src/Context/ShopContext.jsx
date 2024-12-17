
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
    const [num, setNum] = useState(0);

    const handleminus = (itemId)=>{
        setNum(num => num <= 0 ? num = 0 : num - 1)
        console.log("itemId1",itemId)
    }
    const handleplus = (itemId)=>{
        setNum(num => num + 1)
        console.log("itemId2",itemId)
    }

   
    console.log("cartItems",cartItems)
    const addToCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+num}));
        console.log("itemId",itemId)
        // console.log("prev",prev);
        // console.log("...prev",...prev);
        // console.log("prev[itemId]",prev[itemId]);
        
        setNum(0);
    }
    const removeFromCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        setNum(0);
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
    

    const contextValue = {totalAmount,all_product,cartItems,addToCart,removeFromCart,handleminus,handleplus,num,count};

    

    return(
        <ShopContext.Provider value ={contextValue}>
            {props.children}
            {console.log("contextValue",props.children)}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider