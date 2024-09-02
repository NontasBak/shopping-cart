import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Navbar() {
    return (
        <>
            <div className="flex items-center gap-4 bg-black p-6 text-2xl text-white">
                <Link
                    to="home"
                    className="rounded-lg p-2 transition-colors hover:bg-slate-200 hover:bg-opacity-10 font-bold text-3xl"
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
                <button className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-slate-200 hover:bg-opacity-10">
                    <ShoppingCart />
                </button>
            </div>
        </>
    );
}

export default Navbar;
