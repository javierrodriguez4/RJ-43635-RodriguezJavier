import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartItem } from '../cartItem/CartItem'
import "./Cart.css"


export const Cart = () => {

   const { cart, clearCart, getTotalPrice } = useContext( CartContext )

  return (
    <div className="cart-container">
      <div className="container-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {cart.length < 1 && <h2>NO HAY ELEMENTOS EN EL CARRITO</h2>}
      </div>

      <div className="cart-info">
        <h2>Descripcion del carrito:</h2>
        <h3>Cantidad de productos: </h3>
        <h3>
          Precio total: {getTotalPrice() > 0 ? getTotalPrice() : "No hay items"}
        </h3>
        <h3>Descuento: </h3>
        <h3>Precio final: </h3>

        {buy ? (
          <Form
            cart={cart}
            getTotalPrice={getTotalPrice}
            setOrderId={setOrderId}
            clearCart={clearCart}
          />
        ) : (
          cart.length > 0 && (
            <div className="btn-cart">
              <Button variant="contained" onClick={openForm}>
                Comprar
              </Button>
              <Button onClick={() => clearCart()} variant="contained">
                Vaciar carrito
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  )
}
