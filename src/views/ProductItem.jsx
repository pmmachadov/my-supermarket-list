import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductItem.module.css';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Box
} from '@mui/material';

const ProductItem = ({ product, quantity, onQuantityChange, onUnitTypeChange }) => {


    return (
        <Card className={ styles.card }>
            <Box className={ styles.cardMedia }>
                <img src={ encodeURI(`/${product.image}`) } alt={ product.name } style={ { width: '100%' } } />
            </Box>
            <CardContent className={ styles.cardContent }>
                <Typography variant="h6" className={ styles.productName }>
                    { product.name }
                </Typography>
                <Typography variant="body2" className={ styles.productQuantity }>
                    Cantidad: { quantity } { product.unitType }
                </Typography>
                <Box className={ styles.inputField }>
                    <TextField
                        type="number"
                        label="Cantidad"
                        value={ quantity ?? '' }
                        onChange={ (e) => onQuantityChange(product.id, parseFloat(e.target.value)) }
                        inputProps={ { min: 0, step: 0.1, inputMode: 'decimal', pattern: '[0-9]*' } }
                        fullWidth
                    />
                </Box>
                <FormControl component="fieldset" className={ styles.unitTypeSelect }>
                    <FormLabel component="legend">Tipo de Unidad</FormLabel>
                    <RadioGroup
                        row
                        aria-label="unitType"
                        name="unitType"
                        value={ product.unitType || 'unidad/es' }
                        onChange={ (e) => onUnitTypeChange(product.id, e.target.value) }
                    >
                        <FormControlLabel value="unidad/es" control={ <Radio /> } label="Unidad/es" />
                        <FormControlLabel value="paquete/s" control={ <Radio /> } label="Paquete/s" />
                    </RadioGroup>
                </FormControl>
            </CardContent>
        </Card>
    );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string,
        image: PropTypes.string,
        quantity: PropTypes.number,
        unitType: PropTypes.string,
    }).isRequired,
    quantity: PropTypes.number,
    onQuantityChange: PropTypes.func,
    onUnitTypeChange: PropTypes.func,
    onAddToSummary: PropTypes.func.isRequired,
};

export default ProductItem;
