import { render, screen } from "@testing-library/react";
import ShopItem from "./ShopItem";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

const defaultShopItem = {
    id: 1,
    title: "Chips",
    price: 2,
    image: "image.jpg",
    rating: 4,
};

describe("ShopItem component", () => {
    it("Should render the ShopItem component correctly", () => {
        render(
            <BrowserRouter>
                <ShopItem {...defaultShopItem} />
            </BrowserRouter>,
        );

        expect(screen.getByRole("img").getAttribute("src")).toBe("image.jpg");
        expect(screen.getByRole("heading").textContent).toBe("Chips");
        expect(screen.getByText(/\$/).textContent).toBe("$2");
    });
});
