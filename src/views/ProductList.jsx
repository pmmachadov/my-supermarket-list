// src/views/ProductList.jsx
import React from 'react';
import ProductItem from './ProductItem';
import { Grid, Typography } from '@mui/material';

const ProductList = React.forwardRef(
    ({ products, onIncrease, onDecrease, selectedCategory, searchQuery }, ref) => {
        const filteredProducts = products.filter(
            (product) =>
                (selectedCategory === null || product.category === selectedCategory) &&
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
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
                    <Typography variant="body1">No products found.</Typography>
                ) }
            </div>
        );
    }
);

export default ProductList;
