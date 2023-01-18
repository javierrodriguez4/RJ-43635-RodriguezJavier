import { CartWidget } from '../cartwidget/CartWidget'
import './NavBar.css'
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';

export const NavBar = ()=>{

    return(
        <div className='NavBar'>
            <div className='navbar_logo'>
            <Link to="/" >
                <img src="https://res.cloudinary.com/dg6girgbi/image/upload/v1669472368/RJ-43635-RodriguezJavier/logo_qznnel.png" alt="logo" />
            </Link>
            </div>
            <Button variant="contained">
            <Link className="navbar-item" to="/" >Ver todo </Link>
            </Button>
            <Button variant="contained">
            <Link to="/category/lentes_recetados" >Lentes recetados</Link>
            </Button>
            <Button variant="contained">
            <Link to="/category/lentes_contacto" >Lentes de contacto</Link>
            </Button>
            <Button variant="contained">
            <Link to="/category/lentes_sol" >Lentes de sol</Link>
            </Button>
            <div>
                <CartWidget/>
            </div>
        </div>
    )
}