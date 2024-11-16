import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardMedia, CardContent, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styles from './ProductList.module.css';

const ProductList = ({ products, onQuantityChange, onUnitTypeChange, selectedCategory, searchQuery }) => {
    const [hoveredProductId, setHoveredProductId] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredProductId(id);
    };

    const handleMouseLeave = () => {
        setHoveredProductId(null);
    };

    const filteredProducts = products.filter(
        (product) =>
            (selectedCategory === null || product.category === selectedCategory) &&
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={ styles.productListContainer }>
            { filteredProducts.map((product) => (
                <Card
                    key={ product.id }
                    className={ styles.card }
                    onMouseEnter={ () => handleMouseEnter(product.id) }
                    onMouseLeave={ handleMouseLeave }
                >
                    <CardMedia
                        component="img"
                        className={ styles.cardMedia }
                        image={ encodeURI(`/${product.image}`) }
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
                    { hoveredProductId === product.id && (
                        <div className={ styles.overlay }>
                            <TextField
                                type="number"
                                value={ product.quantity ?? '' }
                                onChange={ (e) => onQuantityChange(product.id, parseFloat(e.target.value)) }
                                className={ styles.inputField }
                                inputProps={ { min: 0, step: 0.1, inputMode: 'decimal', pattern: '[0-9]*' } }
                            />
                            <FormControl className={ styles.unitTypeSelect }>
                                <InputLabel id={ `unit-type-label-${product.id}` }>Tipo de Unidad</InputLabel>
                                <Select
                                    labelId={ `unit-type-label-${product.id}` }
                                    value={ product.unitType || 'unidad/es' }
                                    onChange={ (e) => onUnitTypeChange(product.id, e.target.value) }
                                >
                                    <MenuItem value="unidad/es">Unidad/es</MenuItem>
                                    <MenuItem value="paquete/s">Paquete/s</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    ) }
                </Card>
            )) }
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onUnitTypeChange: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string,
    searchQuery: PropTypes.string,
};

export default ProductList;
