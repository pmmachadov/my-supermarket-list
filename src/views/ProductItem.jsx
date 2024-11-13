import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductItem.module.css';
import {
    Card,
    CardMedia,
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';

const ProductItem = ({ product, onQuantityChange, onUnitTypeChange }) => {
    const encodedImageUrl = encodeURI(product.image);

    const handleQuantityChange = (event) => {
        const newQuantity = parseFloat(event.target.value);
        if (!isNaN(newQuantity)) {
            onQuantityChange(product.id, newQuantity);
        }
    };

    const handleUnitTypeChange = (event) => {
        onUnitTypeChange(product.id, event.target.value);
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
                            className: styles.inputField,
                        } }
                    />
                    <FormControl variant="outlined" className={ styles.formControl }>
                        <InputLabel id={ `unit-type-label-${product.id}` }>Tipo de Unidad</InputLabel>
                        <Select
                            labelId={ `unit-type-label-${product.id}` }
                            value={ product.unitType || 'unidad/es' }
                            onChange={ handleUnitTypeChange }
                            label="Tipo de Unidad"
                        >
                            <MenuItem value="unidad/es">Unidad/es</MenuItem>
                            <MenuItem value="paquete/s">Paquete/s</MenuItem>
                        </Select>
                    </FormControl>
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
    onUnitTypeChange: PropTypes.func.isRequired,
};

export default ProductItem;

export const addCategory = (categories, newCategory) => {
    return [...categories, newCategory];
};
