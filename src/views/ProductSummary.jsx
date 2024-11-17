import React, { useState } from 'react';
import { Typography, Box, Stack, Button } from '@mui/material';
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
        <Box id="product-summary" className={ styles.summaryContainer }>
            <Typography variant="h4" className={ styles.title }>
                Resumen de Productos
            </Typography>

            <Box className={ styles.buttonContainer }>
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
            </Box>

            <Stack spacing={ 3 } direction="row" flexWrap="wrap" justifyContent="space-between">
                { filteredProducts.map((product) => (
                    <Box key={ product.id } flexBasis={ { xs: '100%', sm: '48%', md: '31%', lg: '23%' } }>
                        <ProductItem
                            product={ product }
                            quantity={ productQuantities[product.id] }
                            onQuantityChange={ handleQuantityChange }
                            onUnitTypeChange={ handleUnitTypeChange }
                        />
                    </Box>
                )) }
            </Stack>
        </Box>
    );
};

export default ProductSummary;