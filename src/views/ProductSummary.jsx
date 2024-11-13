import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Button,
} from '@mui/material';
import { GetApp as GetAppIcon } from '@mui/icons-material';
import styles from './ProductSummary.module.css';
import handleDownloadWord from './handleDownloadWord';

const ProductSummary = ({ products }) => {
    return (
        <div className={ styles.summaryContainer }>
            <Typography variant="h4" className={ styles.title }>
                Resumen de Productos
            </Typography>

            <Grid container spacing={ 2 }>
                { products.map((product) => (
                    <Grid item xs={ 12 } key={ product.id }>
                        <Card className={ styles.card }>
                            <CardMedia
                                component="img"
                                className={ styles.cardMedia }
                                image={ encodeURI(product.image) }
                                alt={ product.name }
                            />
                            <CardContent className={ styles.productDetails }>
                                <Typography variant="h6" className={ styles.productName }>
                                    { product.name }
                                </Typography>
                                <Typography variant="body2" className={ styles.productQuantity }>
                                    Cantidad: { product.quantity } { product.unitType }
                                </Typography>
                            </CardContent>
                        </Card>

                    </Grid>
                )) }
            </Grid>
            <Button
                variant="contained"
                color="primary"
                startIcon={ <GetAppIcon /> }
                onClick={ () => handleDownloadWord(products) }
                className={ styles.downloadButton }
            >
                Descargar Lista en Word
            </Button>
        </div>
    );
};

ProductSummary.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            unitType: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProductSummary;