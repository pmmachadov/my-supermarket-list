import PropTypes from 'prop-types'; // Importa PropTypes para validar las propiedades del componente
import React from 'react'; // Importa la librería React para poder utilizar componentes
import ProductItem from './ProductItem'; // Importa el componente ProductItem
import styles from './ProductList.module.css'; // Importa los estilos CSS específicos para este componente

// Definimos el componente funcional 'ProductList' y desestructuramos las propiedades que recibirá
const ProductList = ({ products, selectedCategory, searchQuery, onQuantityChange, onUnitTypeChange, onAddToSummary }) => {
    // Filtra los productos según la categoría seleccionada y la consulta de búsqueda
    const filteredProducts = products.filter((product) => {
        return (
            (!selectedCategory || product.category === selectedCategory) && // Si no hay categoría seleccionada o la categoría del producto coincide con la seleccionada
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) // El nombre del producto incluye la consulta de búsqueda (ignorando mayúsculas/minúsculas)
        );
    });

    return (
        // Contenedor principal con una clase CSS personalizada
        <div className={styles.productListContainer}>
            {/* Mapea los productos filtrados y renderiza un ProductItem para cada uno */}
            {filteredProducts.map((product) => (
                <ProductItem
                    key={product.id} // Clave única para cada elemento de la lista
                    product={product} // Pasa el objeto del producto como prop
                    quantity={product.quantity} // Pasa la cantidad del producto como prop
                    onQuantityChange={onQuantityChange} // Pasa la función para manejar el cambio de cantidad como prop
                    onUnitTypeChange={onUnitTypeChange} // Pasa la función para manejar el cambio de tipo de unidad como prop
                    onAddToSummary={onAddToSummary} // Pasa la función para agregar el producto al resumen como prop
                />
            ))}
        </div>
    );
};

// Definición de PropTypes para validar las propiedades del componente
ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        quantity: PropTypes.number,
        unitType: PropTypes.string,
        image: PropTypes.string
    })).isRequired,
    selectedCategory: PropTypes.string,
    searchQuery: PropTypes.string,
    onQuantityChange: PropTypes.func.isRequired,
    onUnitTypeChange: PropTypes.func.isRequired,
    onAddToSummary: PropTypes.func.isRequired
};

export default ProductList;
