import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Outlet, useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    const { pathname } = location;
    return (
        <div className={`flex min-h-screen flex-col ${pathname === "/home" ? "h-screen" : ""}`}>
            <Navbar />
            <main className="background-pattern flex-auto h-full flex justify-center">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
