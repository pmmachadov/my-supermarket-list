import React from 'react';
import styles from './ProductList.module.css';
import ProductItem from './ProductItem';
import { Grid, Typography } from '@mui/material';

const ProductList = React.forwardRef(
    ({ products, onIncrease, onDecrease, selectedCategoryId }, ref) => {
        const filteredProducts = products.filter(
            (product) => product.categoryId === selectedCategoryId
        );

        return (
            <div ref={ ref }>
                { filteredProducts.length > 0 ? (
                    <Grid container spacing={ 2 }>
                        { filteredProducts.map((product) => (
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ product.id }>
                                <ProductItem
                                    product={ product }
                                    onIncrease={ onIncrease }
                                    onDecrease={ onDecrease }
                                />
                            </Grid>
                        )) }
                    </Grid>
                ) : (
                    <Typography variant="body1">No products in this category.</Typography>
                ) }
            </div>
        );
    }
);

export default ProductList;
