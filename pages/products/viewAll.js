import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import ProductTile from "../../components/productTile";
import { useShoppingCart } from 'use-shopping-cart'
import products from '../../data/products.json'

export default function() {
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart();



  return (
    <Layout>
      <h1>
        Our Products
      </h1>
      <div className="products-all">
        {products.map(i => <ProductTile product={i} key={i.sku}/>)}        
      </div>
    </Layout>
  )
}