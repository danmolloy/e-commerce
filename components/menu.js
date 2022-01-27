import Link from "next/link";

export default function Menu() {
  return (
    <div className="menu">
      <Link href="/"><a className="menu-items">Home</a></Link>
      <Link href="/about" ><a className="menu-items">About</a></Link>
      <Link href="/products/viewAll" ><a className="menu-items">Products</a></Link>
      <Link href="/cart" ><a className="menu-items">Cart</a></Link>
      <Link href="/faq" ><a className="menu-items">FAQ</a></Link>
      <Link href="/contact" ><a className="menu-items">Contact</a></Link>
    </div>
  )
}