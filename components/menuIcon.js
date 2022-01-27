export default function MenuIcon(props) {
  return (
      <svg onClick={() => props.showMenu()} xmlns="http://www.w3.org/2000/svg" className="header-icons active:rotate-45 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
  )
}