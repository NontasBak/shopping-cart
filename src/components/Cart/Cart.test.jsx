import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Cart component", () => {
    it("should render the Cart component correctly", () => {
        render(
            <BrowserRouter>
                <Cart
                    cart={[]}
                    setCart={vi.fn()}
                    cartIsOpen={true}
                    setCartIsOpen={vi.fn()}
                />
            </BrowserRouter>,
        );

        expect(
            screen.getAllByRole("heading", { name: /cart/i })[0].textContent,
        ).toMatch("Cart");
        expect(
            screen.getAllByRole("heading", { name: /cart/i })[1].textContent,
        ).toMatch(/your cart is empty!/i);
    });

    it("should render the Cart component correctly with items", () => {
        render(
            <BrowserRouter>
                <Cart
                    cart={[
                        {
                            id: 1,
                            title: "Chips",
                            price: 2,
                            image: "image.jpg",
                            quantity: 1,
                            totalPrice: 2,
                        },
                        {
                            id: 2,
                            title: "Chocolate",
                            price: 3,
                            image: "image2.jpg",
                            quantity: 2,
                            totalPrice: 6,
                        },
                    ]}
                    setCart={vi.fn()}
                    cartIsOpen={true}
                    setCartIsOpen={vi.fn()}
                />
            </BrowserRouter>,
        );

        expect(screen.getByText(/chips/i)).toBeInTheDocument();
        expect(screen.getByText(/chocolate/i)).toBeInTheDocument();
        expect(screen.getByText(/8/)).toBeInTheDocument();
    });
});
