import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Outlet, useLocation } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
    const [cart, setCart] = useState([]);
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;

    return (
        <div
            className={`relative flex min-h-screen flex-col ${pathname === "/home" ? "h-screen" : ""} ${cartIsOpen ? "h-screen overflow-hidden" : ""}`}
        >
            <Navbar setCartIsOpen={setCartIsOpen} />
            <main
                className="background-pattern flex h-full flex-auto justify-center"
            >
                <Outlet context={[cart, setCart, cartIsOpen]} />
            </main>
            <Cart
                cartIsOpen={cartIsOpen}
                setCartIsOpen={setCartIsOpen}
                cart={cart}
                setCart={setCart}
            />
        </div>
    );
}

export default App;
