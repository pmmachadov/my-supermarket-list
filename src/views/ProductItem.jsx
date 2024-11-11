import React from 'react';
import styles from './ProductItem.module.css';
import {
    Card,
    CardMedia,
    Typography,
    IconButton,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const ProductItem = ({ product, onIncrease, onDecrease }) => {
    const encodedImageUrl = encodeURI(product.image);

    return (
        <Card className={ styles.card }>
            <CardMedia
                component="img"
                className={ styles.cardMedia }
                image={ encodedImageUrl }
                alt={ product.name }
                onError={ (e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300';
                } }
            />
            <div className={ styles.overlay }>
                <Typography variant="h6" className={ styles.productName }>
                    { product.name }
                </Typography>
                <div className={ styles.actions }>
                    <IconButton onClick={ () => onDecrease(product.id) }>
                        <Remove style={ { color: 'white' } } />
                    </IconButton>
                    <Typography variant="body1" style={ { color: 'white' } }>
                        { product.quantity }
                    </Typography>
                    <IconButton onClick={ () => onIncrease(product.id) }>
                        <Add style={ { color: 'white' } } />
                    </IconButton>
                </div>
            </div>
        </Card>
    );
};

export default ProductItem;
