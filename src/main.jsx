import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop.jsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" replace />,
    },
    {
        path: "/",
        element: <App />,
        children: [
            { path: "home", element: <Home /> },
            { path: "shop", element: <Shop /> },
            // { path: "about", element: <About /> },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
