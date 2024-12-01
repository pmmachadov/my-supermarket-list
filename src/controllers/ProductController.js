export const increaseQuantity = (products, id) => {
    return products.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1.0 } : product
    );
};

export const decreaseQuantity = (products, id) => {
    return products.map((product) =>
        product.id === id && product.quantity > 0
            ? { ...product, quantity: product.quantity - 1.0 }
            : product
    );
};

export const updateQuantity = (products, id, newQuantity) => {
    return products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
    );
};

export const addProduct = (products, newProduct) => {
    return [...products, newProduct];
};

export const updateUnitType = (products, id, newUnitType) => {
    return products.map((product) =>
        product.id === id ? { ...product, unitType: newUnitType } : product
    );
};

export const resetProducts = () => {
    return [];
};
