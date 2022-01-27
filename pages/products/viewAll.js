import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import ProductTile from "../../components/productTile";
import { useShoppingCart } from 'use-shopping-cart'

export default function() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart();

  useEffect(() => {
    setLoading(true)
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <Layout>
      <h1>
        Our Products
      </h1>
      <div className="products-all">
        {data && data.map(i => <ProductTile product={i} key={i.sku}/>)}        
      </div>
    </Layout>
  )
}