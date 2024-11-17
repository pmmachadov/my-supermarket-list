import React, { useState } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeIcon from '@mui/icons-material/Home';
import handlePrint from './handlePrint';
import ProductItem from './ProductItem';
import styles from './ProductSummary.module.css';

const ProductSummary = ({ products, onResetProducts, onGoHome }) => {
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

    const filteredProducts = products.filter(product => productQuantities[product.id] > 0);

    return (
        <div id="product-summary" className={ styles.summaryContainer }>
            <Typography variant="h4" className={ styles.title }>
                Resumen de Productos
            </Typography>

            <div className={ styles.buttonContainer }>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={ <RefreshIcon /> }
                    onClick={ onResetProducts }
                    className={ styles.resetButton }
                >
                    Resetear Productos
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={ <GetAppIcon /> }
                    onClick={ handlePrint }
                    className={ styles.downloadButton }
                >
                    Descargar Lista en PDF
                </Button>
                <Button
                    variant="contained"
                    startIcon={ <HomeIcon /> }
                    onClick={ onGoHome }
                    className={ styles.homeButton }
                >
                    Inicio
                </Button>
            </div>

            <Grid container spacing={ 3 }>
                { filteredProducts.map((product) => (
                    <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } key={ product.id }>
                        <ProductItem
                            product={ product }
                            quantity={ productQuantities[product.id] }
                            onQuantityChange={ handleQuantityChange }
                            onUnitTypeChange={ handleUnitTypeChange }
                        />
                    </Grid>
                )) }
            </Grid>
        </div>
    );
};

export default ProductSummary;