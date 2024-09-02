import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
    it("should render the Home component correctly", () => {
        render(
            <BrowserRouter>
                <Home />)
            </BrowserRouter>,
        );

        expect(screen.getByRole("heading").textContent).toMatch("Scrootz");
        expect(screen.getByText(/best deals/i)).toBeInTheDocument();
        expect(screen.getByRole("link").textContent).toMatch("Shop now");
    });
});
