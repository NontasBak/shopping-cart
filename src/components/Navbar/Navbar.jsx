import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="flex gap-4 bg-black p-6 text-2xl text-white">
                <Link to="home">Scrootz</Link>
                <Link to="home" className="ml-auto">
                    Home
                </Link>
                <Link to="shop">Shop</Link>
                <div className="cart">Cart</div>
            </div>
        </>
    );
}

export default Navbar;
