import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import handleDownloadPDF from './handleDownloadPDF';
import styles from './ProductSummary.module.css';

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
                onClick={ () => handleDownloadPDF(products) }
                className={ styles.downloadButton }
            >
                Descargar Lista en PDF
            </Button>
        </div>
    );
};

export default ProductSummary;