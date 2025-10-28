import { NavLink } from "react-router-dom"
import { CartStatus } from "./CartStatus"

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar expand-lg">
                <NavLink className="navbar-brand" to="/">App</NavLink>
                <div className="nav">
                    <NavLink className="nav-link" to='/'>Product</NavLink>
                    <NavLink className='nav-link' to='/cart'>Cart</NavLink>
                </div>
              <CartStatus/>
            </nav>
        </div>
    )
}