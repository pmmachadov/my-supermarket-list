import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductItem.module.css';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';

const ProductItem = ({ product, quantity, onQuantityChange, onUnitTypeChange }) => {
    const [isHovered, setIsHovered] = useState(false);
    const anchorRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Card
            className={ styles.card }
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
        >
            <div className={ styles.cardMedia }>
                <img src={ encodeURI(`/${product.image}`) } alt={ product.name } style={ { width: '100%', borderRadius: '5px' } } />
            </div>
            <CardContent className={ styles.cardContent }>
                <Typography variant="h6" className={ styles.productName }>
                    { product.name }
                </Typography>
                <Typography variant="body2" className={ styles.productQuantity }>
                    Cantidad: { quantity } { product.unitType }
                </Typography>
                { isHovered && (
                    <div className={ styles.overlay }>
                        <TextField
                            type="number"
                            value={ quantity ?? '' }
                            onChange={ (e) => onQuantityChange(product.id, parseFloat(e.target.value)) }
                            className={ styles.inputField }
                            slotProps={ { htmlInput: { min: 0, step: 0.1, inputMode: 'decimal', pattern: '[0-9]*' } } }
                        />
                        <FormControl className={ styles.unitTypeSelect } ref={ anchorRef }>
                            <InputLabel id={ `unit-type-label-${product.id}` }></InputLabel>
                            <Select
                                labelId={ `unit-type-label-${product.id}` }
                                value={ product.unitType || 'unidad/es' }
                                onChange={ (e) => onUnitTypeChange(product.id, e.target.value) }
                                MenuProps={ {
                                    anchorEl: anchorRef.current,
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    },
                                    transformOrigin: {
                                        vertical: 'top',
                                        horizontal: 'center',
                                    },
                                    getContentAnchorEl: null,
                                } }
                            >
                                <MenuItem value="unidad/es">Unidad/es</MenuItem>
                                <MenuItem value="paquete/s">Paquete/s</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                ) }
            </CardContent>
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
    quantity: PropTypes.number.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onUnitTypeChange: PropTypes.func.isRequired,
};

export default ProductItem;
