import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Box } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import HomeIcon from '@mui/icons-material/Home';
import handlePrint from './handlePrint';
import styles from './ProductSummary.module.css';

const ProductSummary = ({ products, onGoHome }) => {
    const filteredProducts = products.filter(product => product.quantity > 0);

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
                            <img src={ encodeURI(`/${product.image}`) } alt={ product.name } className={ styles.productImage } />
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

ProductSummary.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        unitType: PropTypes.string.isRequired,
    })).isRequired,
    onGoHome: PropTypes.func.isRequired,
};

export default ProductSummary;