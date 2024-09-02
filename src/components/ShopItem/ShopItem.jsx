import { CirclePlus } from "lucide-react";

function ShopItem({ id, title, price, image, rating, setCart, cart }) {
    function addItemToCart(e) {
        if (itemAlreadyInCart) return;

        setCart((prevCart) => [...prevCart, { id, title, price, image, quantity: 1, totalPrice: price }]);
    }

    const itemAlreadyInCart = cart.find((item) => item.id === id);
    const ratingRounded = Math.round(rating);

    return (
        <div className="flex h-96 flex-col gap-2 rounded-lg bg-white p-4">
            <img src={image} className="h-4/6 object-contain" />
            <h3 className="line-clamp-2 text-lg font-medium">{title}</h3>
            <div className="flex items-center justify-between">
                <button
                    onClick={addItemToCart}
                    className={`flex items-center gap-2 rounded-lg border-2 border-green-600 p-2 transition-colors hover:bg-green-50 ${itemAlreadyInCart ? "!bg-green-100" : ""}`}
                >
                    <CirclePlus color="green" />
                    <p className="text-lg font-medium">
                        {!itemAlreadyInCart ? "Add" : "Added!"}
                    </p>
                </button>
                <p className="text-2xl font-bold">${price}</p>
            </div>
        </div>
    );
}

export default ShopItem;
