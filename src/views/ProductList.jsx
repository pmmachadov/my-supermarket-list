import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
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
            <Grid container spacing={ 2 }>
                { filteredProducts.map((product) => (
                    <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } key={ product.id }>
                        <ProductItem
                            product={ product }
                            quantity={ product.quantity }
                            onQuantityChange={ onQuantityChange }
                            onUnitTypeChange={ onUnitTypeChange }
                        />
                    </Grid>
                )) }
            </Grid>
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
