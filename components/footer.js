import Link from 'next/link'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="https://facebook.com">
        <a target="_blank">
          <AiOutlineFacebook className='react-icons'/>
        </a>
      </Link>
      <Link href="https://twitter.com/">
        <a target="_blank">
          <AiOutlineTwitter className='react-icons'/>
        </a>
      </Link>
      <Link href="https://www.instagram.com/">
        <a target="_blank">
          <AiOutlineInstagram className='react-icons'/>
        </a>
      </Link>
    </footer>
  )
}