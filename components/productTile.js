import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'


export default function ProductTile({ product }) {
  const { addItem, redirectToCheckout} = useShoppingCart()


  const handleClick = async() => {
    axios.post('/api/checkout_sessions', 
      [{"price": product.id,
      "quantity": "1"}]
    ).then(res => {
      redirectToCheckout({ sessionId: res.data.id })
    })
  }

  return (
      <div  className="product-tile">
      <h3>{product.name}</h3>

      <div className="tile-img">
        <Image src={product.image} height="400" width="600" alt="product" />
      </div>

      <Link href={`/products/${product.key}`}>
        <a className="button w-32 m-2 bg-stone-300 hover:bg-stone-200 active:bg-stone-100">
          View Product
        </a>
      </Link>
      
      <div className="tile-btns">
        <button className="button add-btn" onClick={() => addItem(product)}>Add to Cart</button>
        <p className="price">
            {formatCurrencyString({
              value: product.price,
              currency: 'gbp',
            })}
          </p>
        <button className="button buy-btn" onClick={() => handleClick()}>Buy Now</button>
      </div>
      </div>
   
  )
}
