import '../styles/globals.css'
import { CartProvider } from 'use-shopping-cart'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider 
      mode='payment'
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      currency="GBP">
      <Component {...pageProps} />
    </CartProvider>
  )
}
