import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import Link from "next/link";
import { server } from '../../config/index'
import axios from "axios";
import products from '../../data/products.json'


export default function ProductPage({ products }) {
  const router = useRouter()
  const { id } = router.query
  const { addItem, redirectToCheckout } = useShoppingCart()

  const product = products.find(i => i.key === id)

  const handleClick = async() => {
    axios.post('/api/checkout_sessions', 
      [{"price": product.id,
      "quantity": "1"}]
    ).then(res => {
      redirectToCheckout({ sessionId: res.data.id })
    })
  }

  return (
    <Layout>
      <div className="flex flex-row items-center justify-between p-4">
        <h1>
          {product.name}
        </h1>
        <h2 className="price text-2xl">
            {formatCurrencyString({
              value: product.price,
              currency: 'GBP',
            })}
          </h2>
      </div>
      <div className="self-center">
      <Image src={product.image} height="400" width="600"/>

      </div>
      <p className="product-text">
        {product.description}
      </p>
      <div className="flex flex-row justify-between p-2">
      <Link href="/products/viewAll">
        <a className="button self-start bg-black text-white pl-3 hover:bg-gray-700">
          All Products
        </a>
      </Link>
        <button className="button add-btn" onClick={() => addItem(product)}>Add to Cart</button>
        <button className="button buy-btn" onClick={() => handleClick()}>Buy Now</button>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {


  return {
    props: {
      products,
    },
  }
}

export async function getStaticPaths() {

  const paths = products.map((i) => ({
    params: { id: i.key },
  }))

  return {
    paths,
    fallback: true 
  };
}