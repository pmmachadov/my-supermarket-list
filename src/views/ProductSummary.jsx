import React, { useState } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import handleDownloadPDF from './handleDownloadPDF';
import ProductItem from './ProductItem';
import ProductList from './ProductList';
import styles from './ProductSummary.module.css';

const ProductSummary = ({ products }) => {
    const [productQuantities, setProductQuantities] = useState(
        products.reduce((acc, product) => {
            acc[product.id] = product.quantity;
            return acc;
        }, {})
    );

    const handleQuantityChange = (id, newQuantity) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: newQuantity,
        }));
    };

    const handleUnitTypeChange = (id, newUnitType) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: { ...prevQuantities[id], unitType: newUnitType },
        }));
    };

    return (
        <div id="product-summary" className={ styles.summaryContainer }>
            <Typography variant="h4" className={ styles.title }>
                Resumen de Productos
            </Typography>

            <Grid container spacing={ 2 }>
                { products.map((product) => (
                    <Grid item xs={ 12 } key={ product.id }>
                        <ProductItem
                            product={ product }
                            quantity={ productQuantities[product.id] }
                            onQuantityChange={ handleQuantityChange }
                            onUnitTypeChange={ handleUnitTypeChange }
                        />
                    </Grid>
                )) }
            </Grid>
            <Button
                variant="contained"
                color="primary"
                startIcon={ <GetAppIcon /> }
                onClick={ () => handleDownloadPDF(products) }
                className={ styles.downloadButton }
            >
                Descargar Lista en PDF
            </Button>
        </div>
    );
};

export default ProductSummary;