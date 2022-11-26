import { CartWidget } from '../cartwidget/CartWidget'
import './NavBar.css'

export const NavBar = ()=>{

    return(
        <div className='NavBar'>
            <div className='navbar_logo'>
                <img src="https://res.cloudinary.com/dg6girgbi/image/upload/v1669472368/RJ-43635-RodriguezJavier/logo_qznnel.png" alt="logo" />
            </div>
            <div className='navbar_btn'>
                <button>Anteojos de sol</button>
                <button>Lentes de contacto</button>
                <button>Anteojos recetados</button>
            </div>
            <div>
                <CartWidget/>
            </div>
        </div>
    )
}