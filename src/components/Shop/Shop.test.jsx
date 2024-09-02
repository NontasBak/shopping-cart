import { render, screen, act, waitFor } from "@testing-library/react";
import Shop from "./Shop";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

// Mock the react-router-dom module
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useOutletContext: () => [[], vi.fn()],
    };
});

global.fetch = vi.fn(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                json: () =>
                    Promise.resolve([
                        {
                            id: 1,
                            title: "Chips",
                            price: 2,
                            image: "image1.jpg",
                            rating: 4,
                            category: "Snacks",
                        },
                        {
                            id: 2,
                            title: "Chocolate",
                            price: 3,
                            image: "image2.jpg",
                            rating: 5,
                            category: "Sweets",
                        },
                    ]),
            });
        }, 1000);
    });
});

describe("Shop component", () => {
    it("Should render the Shop component correctly", async () => {
        vi.useFakeTimers();
        const user = userEvent.setup();

        await act(async () => {
            render(
                <BrowserRouter>
                    <Shop />
                </BrowserRouter>,
            );
        });

        expect(screen.getByText(/loading/i)).toBeInTheDocument();

        await act(async () => {
            vi.runAllTimers();
        });

        //Check categories
        expect(screen.getByRole("list")).toBeInTheDocument();
        expect(screen.getByRole("list").children).to.have.length(2);

        //Check items
        expect(screen.getByText(/chips/i)).toBeInTheDocument();
        expect(screen.getByText(/chocolate/i)).toBeInTheDocument();
        expect(screen.getAllByText(/add/i)).to.have.length(2);
    });
});
