import {createContext, useContext, useReducer, useState} from "react";

export const CartContext = createContext(null);

function CartReducer(items, action) {
    switch (action.type) {
        case "add": {
            const existing = items.find(item => item.id === action.product.id);

            if (existing) {
                return items.map(i =>
                    i.id === existing.id ? {...i, qty: i.qty + 1} : i
                )
            }
            return [...items, {...action.product, qty: 1}];
        }

        case "decrease":
            return items
                .map(i => i.id === action.id ? {...i, qty: i.qty - 1} : i)
                .filter(i => i.qty > 0);

        case "remove":
            return items.filter(i => i.id !== action.id);

        default:
            return items;
    }
}


export function CartProvider({ children}) {
    const [items, dispatch] = useReducer(CartReducer, [])

    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <CartContext.Provider value={{items, total, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}