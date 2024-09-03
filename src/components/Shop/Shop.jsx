import { useOutletContext } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

function Shop() {
    const [items, setItems] = useState(null);
    const [categories, setCategories] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [cart, setCart, cartIsOpen] = useOutletContext();
    let itemCount = 20;

    function categoryButtonClickHandler(e) {
        setSelectedCategory(e.target.textContent.toLowerCase());
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://fakestoreapi.com/products?limit=${itemCount}`,
            );
            const data = await response.json();
            setItems(data);
            setCategories([...new Set(data.map((item) => item.category))]);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    const categoryToDisplay = !selectedCategory
        ? categories
        : [selectedCategory];

    function firstLetterUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    console.log(cartIsOpen);
    return (
        <div
            className={`flex w-full max-w-screen-2xl flex-col sm:flex-row sm:items-start ${
                cartIsOpen ? "overflow-hidden" : ""
            }`}
        >
            {isLoading ? (
                <div className="flex items-center justify-center w-full">
                    <h2 className="text-3xl text-white translate-y-24">
                        Loading...
                    </h2>
                </div>
            ) : (
                <>
                    <ul className="flex w-full flex-col p-6 sm:w-auto">
                        {categories.map((category) => {
                            return (
                                <button
                                    key={category}
                                    className={
                                        "sm: w-full border-b-2 border-gray-600 p-2 text-center text-xl font-medium text-white transition-colors last:border-none hover:bg-gray-900 hover:bg-opacity-30 sm:w-auto sm:text-left"
                                        // + ${selectedCategory === category ? "!bg-gray-900 !bg-opacity-70": ""}
                                    }
                                    onClick={categoryButtonClickHandler}
                                >
                                    {firstLetterUpperCase(category)}
                                </button>
                            );
                        })}
                        {selectedCategory && (
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="mt-4 flex items-center justify-center gap-px border-2 border-red-500 p-2 text-white"
                            >
                                <X />
                                <p className="text-center">
                                    {firstLetterUpperCase(selectedCategory)}
                                </p>
                            </button>
                        )}
                    </ul>
                    <div className="grid-template-cols mx-4 grid gap-8 sm:mr-4 sm:w-5/6">
                        {items.map(
                            (item) =>
                                categoryToDisplay.find(
                                    (cat) => cat === item.category,
                                ) && (
                                    <ShopItem
                                        {...item}
                                        setCart={setCart}
                                        cart={cart}
                                        key={item.id}
                                    />
                                ),
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Shop;
