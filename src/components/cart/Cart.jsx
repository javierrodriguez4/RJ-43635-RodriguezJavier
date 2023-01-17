import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


export const Cart = () => {

   const { cart, clearCart } = useContext( CartContext )

  return (
    <>
   <div>{cart.map(item=>(
        <div key={item.id}>
        <h1>{item.name}</h1>
        <h2>{item.quantity}</h2>
        </div>
   ))}</div>
    <div>
        <button onClick={()=>clearCart()}>LIMPIAR CARRITO</button>
    </div>
    </>
  )
}
