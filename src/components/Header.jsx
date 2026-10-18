import { NavLink } from "react-router-dom";
import {ThemeContext} from "../context/ThemeContext";
import {CartContext} from "../context/CartContext";
import {useContext} from "react";

const linkStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary)" : "var(--text-muted)",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
});

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { items } = useContext(CartContext);
    const count = items.reduce((s, i) => s + i.qty, 0);

    return (
        <header style={{ display: "flex", gap: 20, alignItems: "center", padding: 16 }}>
            <NavLink to="/" style={linkStyle} end>Catalog</NavLink>
            <NavLink to="/cart" style={linkStyle}>Cart: {count}</NavLink>
            <NavLink to="/login" style={linkStyle}>Login</NavLink>
            <button onClick={toggleTheme} style={{ marginLeft: "auto" }}>
                {theme === "dark" ? "light" : "dark"}
            </button>
        </header>
    );
}
export default Header;