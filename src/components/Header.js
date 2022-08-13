import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
        <header>
            <NavLink to={"/"}>Home</NavLink>
        </header>
    </div>
  )
}

export default Header