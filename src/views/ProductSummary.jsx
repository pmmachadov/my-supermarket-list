import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import HomeIcon from '@mui/icons-material/Home';
import handlePrint from './handlePrint';
import ProductItem from './ProductItem';
import styles from './ProductSummary.module.css';

const ProductSummary = ({ products, onGoHome }) => {
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
                    color="primary"
                    startIcon={ <GetAppIcon /> }
                    onClick={ handlePrint }
                    className={ styles.commonButton }
                >
                    Descargar Lista
                </Button>
                <Button
                    variant="contained"
                    startIcon={ <HomeIcon /> }
                    onClick={ onGoHome }
                    className={ `${styles.commonButton} ${styles.homeButton}` }
                >
                    Inicio
                </Button>
            </div>

            <Box className={ styles.cardContainer }>
                { filteredProducts.map((product) => (
                    <Box className={ styles.card } key={ product.id }>
                        <div className={ styles.cardMedia }>
                            <img src={ encodeURI(product.image) } alt={ product.name } className={ styles.productImage } />
                        </div>
                        <div className={ styles.productDetails }>
                            <div className={ styles.productName }>{ product.name }</div>
                            <div className={ styles.productQuantity }>{ product.quantity } { product.unitType }</div>
                        </div>
                    </Box>
                )) }
            </Box>
        </div>
    );
};

export default ProductSummary;