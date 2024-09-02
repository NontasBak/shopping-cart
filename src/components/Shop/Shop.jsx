import ShopItem from "../ShopItem/ShopItem";
import { useEffect, useState } from "react";

function Shop() {
    const [items, setItems] = useState(null);
    const [categories, setCategories] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    let itemCount = 20;

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://fakestoreapi.com/products?limit=${itemCount}`,
            );
            const data = await response.json();
            setItems(data);
            setCategories([...new Set(data.map((item) => item.category))]);
            setIsLoading(false);
            // console.log(data);
        }
        fetchData();
    }, []);

    return (
        <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-4 self-center sm:flex-row sm:items-start">
            {isLoading ? (
                <h2 className="-translate-y-16 text-3xl text-white">
                    Loading...
                </h2>
            ) : (
                <>
                    <ul className="flex w-full flex-col p-6 sm:w-auto">
                        {categories.map((category) => {
                            return (
                                <li
                                    className="sm: w-full border-b-2 border-gray-600 p-2 text-center text-xl font-medium text-white last:border-none sm:w-auto sm:text-left"
                                    key={category}
                                >
                                    {category}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="grid-template-cols mx-4 grid gap-8 sm:mr-4 sm:w-5/6">
                        {items.map((item) => (
                            <ShopItem {...item} key={item.id} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Shop;
