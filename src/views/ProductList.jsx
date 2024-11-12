import React from 'react';
import ProductItem from './ProductItem';
import { Grid, Typography } from '@mui/material';

const ProductList = React.forwardRef(
    ({ products, onQuantityChange, selectedCategory, searchQuery }, ref) => {
        const filteredProducts = products.filter(
            (product) =>
                (selectedCategory === null || product.category === selectedCategory) &&
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <div ref={ ref }>
                { filteredProducts.length > 0 ? (
                    <Grid container spacing={ 2 } justifyContent="center">
                        { filteredProducts.map((product) => (
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } key={ product.id }>
                                <ProductItem
                                    product={ product }
                                    onQuantityChange={ onQuantityChange }
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
