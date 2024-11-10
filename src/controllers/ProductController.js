export const increaseQuantity = (products, id) => {
    return products.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
};

export const decreaseQuantity = (products, id) => {
    return products.map((product) =>
        product.id === id && product.quantity > 0
            ? { ...product, quantity: product.quantity - 1 }
            : product
    );
};

export const addProduct = (products, newProduct) => {
    return [...products, newProduct];
};