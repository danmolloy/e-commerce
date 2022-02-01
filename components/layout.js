import Head from "next/head";
import { useState } from "react";
import Footer from "./footer";
import Menu from "./menu";
import MenuIcon from "./menuIcon";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useShoppingCart } from 'use-shopping-cart'


export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false)
  const { cartCount } = useShoppingCart()

  return (
    <div className="layout">
      <Head>
        <title>Dan's Coffee</title>
          <meta name="description" content="Dan's Coffee | London" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <div className="header-title">
        <Link href="/">
          <a>
            <h1 className="header-name">Dan's Coffee</h1>
          </a>
        </Link>
        </div>
        <div className="all-header-icons">
        <Link href="/cart">
          <a className="flex flex-row items-center text-blue-500">
            <AiOutlineShoppingCart className='header-icons'/>
            {cartCount > 0 && <p>{cartCount}</p>}
          </a>
        </Link>
        <MenuIcon showMenu={() => setShowMenu(!showMenu)}/>
        </div>
        
      </header>
      {showMenu && <Menu showMenu={() => setShowMenu(false)}/>}
      <main className=" fade-element main">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}