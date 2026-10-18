import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";

function CartPage() {
    const { items, total, dispatch } = useContext(CartContext);

    if (items.length === 0) return <p>Cart is empty</p>;

    return (
        <div>
            {items.map(i => (
                <div key={i.id} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <span>{i.name} × {i.qty}</span>
                    <span>{i.price * i.qty}</span>
                    <button className="btn-remove" onClick={() => dispatch({ type: "remove", id: i.id })}>Remove</button>
                </div>
            ))}
            <h3>Total: {total}</h3>
        </div>
    );
}

export default CartPage;