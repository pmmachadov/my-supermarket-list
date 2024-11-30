import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import styles from './ProductList.module.css';

const ProductList = ({ products, selectedCategory, searchQuery, onQuantityChange, onUnitTypeChange, onAddToSummary }) => {
    const filteredProducts = products.filter((product) => {
        return (
            (!selectedCategory || product.category === selectedCategory) &&
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div className={ styles.productListContainer }>
            { filteredProducts.map((product) => (
                <ProductItem
                    key={ product.id }
                    product={ product }
                    quantity={ product.quantity }
                    onQuantityChange={ onQuantityChange }
                    onUnitTypeChange={ onUnitTypeChange }
                    onAddToSummary={ onAddToSummary }
                />
            )) }
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedCategory: PropTypes.string,
    searchQuery: PropTypes.string.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onUnitTypeChange: PropTypes.func.isRequired,
    onAddToSummary: PropTypes.func.isRequired,
};

export default ProductList;
