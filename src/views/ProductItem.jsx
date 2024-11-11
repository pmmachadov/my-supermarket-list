import React from 'react';
import styles from './ProductItem.module.css';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    CardActions,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const ProductItem = ({ product, onIncrease, onDecrease }) => {

    const encodedImageUrl = encodeURI(product.image);

    return (
        <Card className={ styles.card }>
            <CardMedia
                component="img"
                height="140"
                image={ encodedImageUrl }
                alt={ product.name }
                onError={ (e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/140';
                } }
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    { product.name }
                </Typography>
            </CardContent>
            <CardActions className={ styles.actions }>
                <IconButton onClick={ () => onDecrease(product.id) }>
                    <Remove />
                </IconButton>
                <Typography variant="body1">{ product.quantity }</Typography>
                <IconButton onClick={ () => onIncrease(product.id) }>
                    <Add />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default ProductItem;
