import { CartWidget } from '../cartwidget/CartWidget'
import './NavBar.css'
import {Link} from "react-router-dom"

export const NavBar = ()=>{

    return(
        <div className='NavBar'>
            <div className='navbar_logo'>
                <img src="https://res.cloudinary.com/dg6girgbi/image/upload/v1669472368/RJ-43635-RodriguezJavier/logo_qznnel.png" alt="logo" />
            </div>
        <ul>
            <Link className="navbar-item" to="/" >Ver todo </Link>
            <Link className="navbar-item" to="/category/lentes_sol" >Lentes de sol </Link>
            <Link className="navbar-item" to="/category/lentes_recetados" >Lentes recetados</Link>
            <Link className="navbar-item" to="/category/lentes_contacto" >Lentes de contacto</Link>
        </ul>
            <div>
                <CartWidget/>
            </div>
        </div>
    )
}