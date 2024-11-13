import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductItem.module.css';
import {
    Card,
    CardMedia,
    Typography,
    TextField,
} from '@mui/material';

const ProductItem = ({ product, onQuantityChange }) => {
    const encodedImageUrl = encodeURI(product.image);

    const handleQuantityChange = (event) => {
        const newQuantity = parseFloat(event.target.value);
        if (!isNaN(newQuantity)) {
            onQuantityChange(product.id, newQuantity);
        }
    };

    const handleKeyPress = (event) => {
        const charCode = event.charCode;
        if (charCode !== 46 && charCode !== 44 && (charCode < 48 || charCode > 57)) {
            event.preventDefault();
        }
    };

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
                    <TextField
                        type="number"
                        value={ product.quantity ?? '' }
                        onChange={ handleQuantityChange }
                        onKeyPress={ handleKeyPress }
                        inputProps={ { min: 0, step: 0.1, inputMode: 'decimal', pattern: '[0-9]*' } }
                        InputProps={ {
                            className: styles.inputField, // Aplica la clase CSS
                        } }
                    />
                    <Typography variant="body1" style={ { color: 'white' } }>
                        { product.unitType }
                    </Typography>
                </div>
            </div>
        </Card>
    );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number,
        unitType: PropTypes.string,
    }).isRequired,
    onQuantityChange: PropTypes.func.isRequired,
};

export default ProductItem;

export const addCategory = (categories, newCategory) => {
    return [...categories, newCategory];
};
