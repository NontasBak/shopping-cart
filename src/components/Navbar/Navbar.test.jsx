import { render, screen } from "@testing-library/react";
import NavBar from "./Navbar";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("NavBar component", () => {
    it("Should render Navbar correctly", () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        expect(screen.getByRole("link", { name: /scrootz/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /shop/i })).toBeInTheDocument();
    })
})