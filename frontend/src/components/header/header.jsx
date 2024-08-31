import Link from "next/link"

const Header = () => {
  return (
    <div style={{height: '50px'}}>
        Header
      <Link href="/">
        <br />Home
      </Link>
    </div>
  )
}

export default Header