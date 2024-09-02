function ShopItem({ title, price, image, rating }) {
    return (
        <div className="flex h-96 flex-col gap-2 rounded-lg bg-white p-4">
            <img src={image} className="h-4/6 object-contain" />
            <h3 className="line-clamp-2 text-lg font-medium">{title}</h3>
            <p className="self-end text-2xl font-bold">${price}</p>
        </div>
    );
}

export default ShopItem;
