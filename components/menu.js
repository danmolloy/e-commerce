import Link from "next/link";
import { AiOutlineClose } from 'react-icons/ai'

export default function Menu(props) {
  return (
    <div className="menu">
      <button className="" onClick={() => props.showMenu()}>
        <AiOutlineClose className="w-10 h-10 text-black rounded-full p-2 hover:bg-gray-100 active:bg-gray-200"/>
      </button>
      <Link href="/"><a className="menu-items">Home</a></Link>
      <Link href="/about" ><a className="menu-items">About</a></Link>
      <Link href="/products/viewAll" ><a className="menu-items">Products</a></Link>
      <Link href="/cart" ><a className="menu-items">Cart</a></Link>
      <Link href="/faq" ><a className="menu-items">FAQ</a></Link>
      <Link href="/contact" ><a className="menu-items">Contact</a></Link>
    </div>
  )
}