import {useContext, useReducer, useState} from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import {CartContext} from "../context/CartContext.jsx";



function ProductCard({id, name, price, image}) {
    const {items, dispatch} = useContext(CartContext);
    const navigate = useNavigate();
    const inCart = items.find(i => i.id === id)?.qty ?? 0;
    const product = { id, name, price, image };

    return (
        <div className="product-card">
            <div className="product-card-info">
                <img className="product-card-image" src={image} alt={name} />
                <p className="product-card-name">{name}</p>
                <p className="product-card-price">Price: {price}</p>
                <span>In cart: {inCart}</span>

                <button className="btn-add" onClick={() => dispatch({ type: "add", product })}>Add to cart</button>

                {inCart > 0 && (
                    <>
                        <button className="btn-remove"
                                onClick={() => dispatch({ type: "decrease", id: product.id })}
                        >Remove</button>
                        <button className="btn-add"
                                onClick={() => navigate("/cart")}
                        >Go to cart</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default ProductCard;