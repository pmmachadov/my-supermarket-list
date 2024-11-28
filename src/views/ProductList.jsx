import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import styles from './ProductList.module.css';

const ProductList = ({ products, onQuantityChange, onUnitTypeChange, selectedCategory, searchQuery }) => {
    const filteredProducts = products.filter(
        (product) =>
            (selectedCategory === null || product.category === selectedCategory) &&
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={ styles.productListContainer }>
            { filteredProducts.map((product) => (
                <div className={ styles.productItemWrapper } key={ product.id }>
                    <ProductItem
                        product={ product }
                        quantity={ product.quantity }
                        onQuantityChange={ onQuantityChange }
                        onUnitTypeChange={ onUnitTypeChange }
                    />
                </div>
            )) }
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onUnitTypeChange: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string,
    searchQuery: PropTypes.string,
};

export default ProductList;
