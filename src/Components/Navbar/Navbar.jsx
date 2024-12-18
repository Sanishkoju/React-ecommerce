import React , {useState ,useContext} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


export const Navbar = () => {
    const{count} = useContext(ShopContext)
    const [menu ,setMenu] = useState("shop")
    const [drop, setDrop] = useState(false);
    console.log("drop",drop)
    const handledrop =()=>{
        setDrop(!drop);
        console.log("drop",drop)
    }
  return (
    <header>
        <div className='container'>

            <nav className='navbar'>
                <div className='nav-logo'>
                    <p><Link to = '/'>MYSHOP</Link></p>
                </div>
                {
            window.innerWidth < 767 ? 
            <div onClick={handledrop} style={{cursor:"pointer"}}><Dropsvg /></div> : null
                }
                {
                drop || window.innerWidth > 767 ?
                <ul className={`nav-menu ${window.innerWidth < 767 ? "mob" : ""}`}>
                    <li className={menu === "shop" ? "active" : " " } onClick ={()=>{setMenu("shop")}}>
                    <Link onClick={()=>setDrop(false)} to='/'>Shop</Link> 
                    </li>
                    <li className={menu === "mens" ? "active" : " " } onClick ={()=>{setMenu("mens")}}>
                    <Link onClick={()=>setDrop(false)} to='mens'>Mens</Link>
                    </li>
                    <li className={menu === "womens" ? "active" : " " } onClick ={()=>{setMenu("womens")}}>
                    <Link onClick={()=>setDrop(false)} to='womens'>Womens</Link>
                    </li>
                    <li className={menu === "kids" ? "active" : " " } onClick ={()=>{setMenu("kids")}}>
                    <Link onClick={()=>setDrop(false)} to="/kids">Kids</Link>
                    </li>
                </ul>
                :
                null
}
                <div className="nav-login-cart">
                    <button>
                        <Link to='/login'>Login</Link>
                        </button>
                    <Link to='/cart'><img src={cart_icon} alt="cart-icon" />

                    </Link>
                    <div className='nav-cart-count'>{count}</div>
                </div>

            </nav>
    </div>
    </header>
  )
}

const Dropsvg = ()=>{
    return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" height="25px"><path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 214.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 409c-9.4 9.4-24.6 9.4-33.9 0L127 297z"/></svg>
    )
}