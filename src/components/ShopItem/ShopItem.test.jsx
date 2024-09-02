import { render, screen } from "@testing-library/react";
import ShopItem from "./ShopItem";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const defaultShopItem = {
    id: 1,
    title: "Chips",
    price: 2,
    image: "image.jpg",
    rating: 4,
};

describe("ShopItem component", () => {
    it("Should render the ShopItem component correctly", async () => {
        const user = userEvent.setup();
        const setCart = vi.fn();

        render(
            <BrowserRouter>
                <ShopItem {...defaultShopItem} cart={[]} setCart={setCart} />
            </BrowserRouter>,
        );

        expect(screen.getByRole("img").getAttribute("src")).toBe("image.jpg");
        expect(screen.getByRole("heading").textContent).toBe("Chips");
        expect(screen.getByText(/\$/).textContent).toBe("$2");

        await user.click(screen.getByRole("button"));
        expect(setCart).toHaveBeenCalled();
    });
});
