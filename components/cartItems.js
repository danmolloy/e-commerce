import Image from 'next/image'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'

export default function CartItems() {

  const {
    cartDetails,
    decrementItem,
    incrementItem,
    removeItem,
  } = useShoppingCart()

  const cart = []
  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku]

    cart.push(
      <article className='cart-item'>
        <div className='cart-image'>
          <Image src={cartEntry.image} height="400" width="600" alt="product"/>
        </div>
        <div className='cart-item-info'>
          <p>{cartEntry.name}</p>
          <p>{cartEntry.formattedValue}</p>
        </div>
        <div className='cart-item-options'>
          <div className='cart-item-quantity'>
            <button
              onClick={() => decrementItem(sku)}
              aria-label={`Remove one ${cartEntry.name} from your cart`}
            >
              -
            </button>
            <p>{cartEntry.quantity}</p>
            <button
              onClick={() => incrementItem(sku)}
              aria-label={`Add one ${cartEntry.name} to your cart`}
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeItem(sku)}
            aria-label={`Remove all ${cartEntry.name} from your cart`}
            className=''
          >
            Remove
          </button>
        </div>
        
        
      </article>
    )
  }

  return cart
}