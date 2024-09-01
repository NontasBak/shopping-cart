import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="background-pattern flex h-full flex-1 flex-col items-center justify-center">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
