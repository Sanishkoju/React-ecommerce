import React , {useState ,useContext} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import drop_icon from'../Assets/dropdown_icon.png'

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
                    <p>MYSHOP</p>
                </div>
                {
            window.innerWidth < 767 ? 
            <img onClick={handledrop} src={drop_icon} alt=""  style={{cursor:"pointer"}}/> : null
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
