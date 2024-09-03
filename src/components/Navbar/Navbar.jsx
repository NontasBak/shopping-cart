import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Navbar({ cart, setCartIsOpen }) {
    return (
        <>
            <div className="flex items-center gap-px bg-black p-6 text-2xl text-white sm:gap-4">
                <Link
                    to="home"
                    className="rounded-lg p-2 text-3xl font-bold transition-colors hover:bg-slate-200 hover:bg-opacity-10"
                >
                    Scrootz
                </Link>
                <Link
                    to="home"
                    className="ml-auto rounded-lg p-2 transition-colors hover:bg-slate-200 hover:bg-opacity-10"
                >
                    Home
                </Link>
                <Link
                    to="shop"
                    className="rounded-lg p-2 transition-colors hover:bg-slate-200 hover:bg-opacity-10"
                >
                    Shop
                </Link>
                <button
                    onClick={() => setCartIsOpen(true)}
                    className="relative cursor-pointer rounded-lg p-2 transition-colors hover:bg-slate-200 hover:bg-opacity-10"
                >
                    {cart.length !== 0 && (
                        <div className="absolute bottom-0 right-0 flex size-5 place-content-center rounded-full bg-red-400 text-sm font-bold text-black">
                            {cart.length}
                        </div>
                    )}
                    <ShoppingCart />
                </button>
            </div>
        </>
    );
}

export default Navbar;
