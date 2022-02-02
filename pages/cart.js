import Layout from "../components/layout";
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'
import CartItems from "../components/cartItems";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Cart() {
  const [loading, setLoading] = useState(false)
  const [cartEmpty, setCartEmpty] = useState(true)


  const { 
    totalPrice, 
    redirectToCheckout, 
    cartCount, 
    clearCart, 
    cartDetails,
  } = useShoppingCart()

  const handleCheckout = async(e) => {
    
    e.preventDefault()
    setLoading(true)
    
    axios.post('/api/checkout_sessions', formatLineItems(cartDetails)).then(res => {
      redirectToCheckout({ sessionId: res.data.id })
    })
 
  }

  const formatLineItems = (cartDetails) => {
    const lineItems = []
    for (const itemId in cartDetails) {
      if (cartDetails[itemId].id || cartDetails[itemId].id)
        lineItems.push({ price: itemId, quantity: cartDetails[itemId].quantity })
    }
    return lineItems
  }

  return (
    <Layout>
      <h1 className="text-3xl p-2">Your Cart</h1>
        {cartCount > 0 ? 
        <>
        <CartItems />
        <div className="flex flex-row justify-between p-2 m-2">
          <h2 className="text-xl">{`Number of Items: ${cartCount}`}</h2>
          <h2 className="text-xl">{`Total: 
            ${formatCurrencyString({
                  value: totalPrice,
                  currency: 'GBP',
                })}`}
          </h2>
        </div>
        <div className="flex flex-row justify-between p-2 m-2">
          <button onClick={() => clearCart()} className="p-2 rounded shadow text-white hover:bg-red-400 active:bg-red-300 focus:ring ring-red-300 focus:outline-none bg-red-500">Clear Cart</button>
          <form onSubmit={handleCheckout}/* action="/api/checkout_sessions" method="POST" */>
            <button type="submit" className="p-2 rounded shadow text-white hover:bg-blue-400 active:bg-blue-300 focus:ring ring-blue-300 focus:outline-none bg-blue-500" >Checkout</button>
          </form>
        </div>
        </>
        : 
        <div className="p-4"> 
          <h2 className="text-2xl font-bold">Your cart is currently empty.</h2>

        </div>
              }
    </Layout>
  )
}