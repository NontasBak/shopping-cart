import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Outlet, useLocation } from "react-router-dom";

function App() {
    const [cart, setCart] = useState([]);
    const location = useLocation();
    const { pathname } = location;

    return (
        <div
            className={`flex min-h-screen flex-col ${pathname === "/home" ? "h-screen" : ""}`}
        >
            <Navbar />
            <main className="background-pattern flex h-full flex-auto justify-center">
                <Outlet context={[cart, setCart]} />
            </main>
        </div>
    );
}

export default App;
