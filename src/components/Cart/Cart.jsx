import React, { useState } from "react";
import { Minus, Plus, X } from "lucide-react";

function Cart({ cart, setCart, cartIsOpen, setCartIsOpen }) {
    const [isSlidingOut, setIsSlidingOut] = useState(false);

    const modifyItemAmount = (id, action) => {
        const itemIndex = cart.findIndex((item) => item.id === id);
        const item = cart[itemIndex];

        if (action === "increase") {
            const newCart = [...cart];
            newCart[itemIndex] = {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: +(item.totalPrice + item.price).toFixed(2), // Round to 2 decimals
            };
            setCart(newCart);
        } else if (action === "decrease") {
            if (item.quantity === 1) {
                const newCart = cart.filter((item) => item.id !== id);
                setCart(newCart);
                return;
            }

            const newCart = [...cart];
            newCart[itemIndex] = {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: +(item.totalPrice - item.price).toFixed(2), // Round to 2 decimals
            };
            setCart(newCart);
        }
    };

    const handleClose = () => {
        setIsSlidingOut(true);
        setTimeout(() => {
            setCartIsOpen(false);
            setIsSlidingOut(false);
        }, 300); // Duration of the slide-out animation
    };

    if (!cartIsOpen) return null;

    return (
        <>
            <div
                onClick={handleClose}
                className={`absolute inset-0 bg-black bg-opacity-50 ${isSlidingOut ? "animate-fadeOut" : "animate-fadeIn"}`}
            ></div>
            <div
                className={`absolute right-0 top-0 flex h-screen w-1/4 flex-col gap-8 overflow-y-scroll bg-black p-4 ${
                    isSlidingOut ? "animate-slideOut" : "animate-slideIn"
                }`}
            >
                <div className="flex justify-between">
                    <h2 className="text-3xl font-semibold text-white">Cart</h2>
                    <button onClick={handleClose}>
                        <X color="white" size={34} />
                    </button>
                </div>
                {cart.length === 0 && (
                    <h3 className="text-white text-center text-xl">Your cart is empty!</h3>
                )}
                <div className="flex flex-col gap-6">
                    {cart.map((item) => {
                        return (
                            <div
                                className="flex justify-between gap-4 text-white"
                                key={item.id}
                            >
                                <img
                                    src={item.image}
                                    className="h-40 w-1/2 bg-gray-100 object-contain"
                                />
                                <div className="flex w-1/2 flex-col justify-between">
                                    <h3 className="line-clamp-2 text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-xl font-bold">
                                        ${item.totalPrice}
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        <button
                                            onClick={() =>
                                                modifyItemAmount(
                                                    item.id,
                                                    "decrease",
                                                )
                                            }
                                        >
                                            <Minus />
                                        </button>
                                        <span className="text-lg font-medium">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                modifyItemAmount(
                                                    item.id,
                                                    "increase",
                                                )
                                            }
                                        >
                                            <Plus />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {cart.length !== 0 && (
                    <div className="flex justify-end gap-4 text-white">
                        <h3 className="self-end text-lg">Total:</h3>
                        <h4 className="text-3xl font-bold text-blue-200">
                            {"$" +
                                cart
                                    .reduce((total, item) => {
                                        return total + item.totalPrice;
                                    }, 0)
                                    .toFixed(2)}
                        </h4>
                    </div>
                )}
                {cart.length !== 0 && (
                    <button
                        onClick={() => alert("Sorry! This is just a demo")}
                        className="flex justify-center rounded-lg border-2 border-blue-400 bg-blue-900 bg-opacity-20 p-2 text-2xl font-bold text-white transition-colors hover:bg-blue-400 hover:bg-opacity-100 hover:text-black"
                    >
                        <p>Checkout</p>
                    </button>
                )}
            </div>
        </>
    );
}

export default Cart;
