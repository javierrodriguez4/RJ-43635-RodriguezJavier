import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import swal from "sweetalert2"
import "./Cart.css"
import { CartItem } from "../cartItem/CartItem"
import { Button } from "@mui/material"
import { NoInfo } from "../noInfo/NoInfo"
import { Form } from "../form/Form"
import { useState } from "react"
import { Link } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { Orders } from "../orders/Orders"

export const Cart = () => {
  const { cart, clearCart, getTotalPrice, countProducts } = useContext(CartContext)

  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const [order, setOrder] = useState({})

  const openForm = () => {
    if (cart.length > 0) {
      setBuy(true)
    } else {
      alert("no se puede comprar la nada")
    }
  }

  useEffect(() => {
    if (orderId) {
      const orderCollection = collection(db, "orders")
      const ref = doc(orderCollection, orderId)

      getDoc(ref).then((res) => {
        setOrder({
          id: res.id,
          ...res.data(),
        })
      })
    }
  }, [orderId])

  
  if (orderId) {
    return (
      <div>
        <h1>tu orden de compra es : {orderId}</h1>
        <Orders order={order} />

        <Link to={"/"}>Volver a comprar</Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <div className="container-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {cart.length < 1 && <NoInfo />}
      </div>

      <div className="cart-info">
        <h2>Descripcion del carrito</h2>
        <h3>
          Cantidad de productos: {countProducts() > 0 ? countProducts() : "No hay productos"}
        </h3>
        <h3>
          Precio total:$ {getTotalPrice() > 0 ? getTotalPrice() : "No hay productos"}
        </h3>

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