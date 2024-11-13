import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { Grid, Typography } from '@mui/material';
import styles from './ProductList.module.css';

const ProductList = React.forwardRef(
    ({ products, onQuantityChange, onUnitTypeChange, selectedCategory, searchQuery }, ref) => {
        const filteredProducts = products.filter(
            (product) =>
                (selectedCategory === null || product.category === selectedCategory) &&
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <div ref={ ref } className={ styles.productListContainer }>
                { filteredProducts.length > 0 ? (
                    <Grid container spacing={ 2 } justifyContent="center">
                        { filteredProducts.map((product) => (
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } key={ product.id }>
                                <ProductItem
                                    product={ product }
                                    onQuantityChange={ onQuantityChange }
                                    onUnitTypeChange={ onUnitTypeChange }
                                />
                            </Grid>
                        )) }
                    </Grid>
                ) : (
                    <Typography variant="body1">No products found.</Typography>
                ) }
            </div>
        );
    }
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onUnitTypeChange: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string,
    searchQuery: PropTypes.string,
};

export default ProductList;
