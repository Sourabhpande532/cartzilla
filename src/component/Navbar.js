import { NavLink } from "react-router-dom"
import { CartStatus } from "./CartStatus"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Navbar = () => {
    const { setTheme } = useContext( ThemeContext )
    return (
        <div>
            <nav className="navbar expand-lg">
                <button onClick={ () => setTheme( ( theme ) => theme === "dark" ? "light" : "dark" ) } className="btn btn-outline-secondary">Toggle</button>
                <div className="nav">
                    <NavLink className="nav-link" to='/'>Product</NavLink>
                    <NavLink className='nav-link' to='/cart'>Cart</NavLink>
                    <NavLink className='nav-link' to='/books'>Books library</NavLink>
                    <NavLink className='nav-link' to='/addbooks'>Add Books</NavLink>
                </div>
                <CartStatus />
            </nav>
        </div>
    )
}