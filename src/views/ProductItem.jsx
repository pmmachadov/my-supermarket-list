import {
    Box,
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from '@mui/material'; // Importa componentes de la librería Material UI para usar en el diseño
import PropTypes from 'prop-types'; // Importa PropTypes para validar las propiedades del componente
import React from 'react'; // Importa la librería React para poder utilizar componentes
import styles from './ProductItem.module.css'; // Importa los estilos CSS específicos para este componente

// Definimos el componente funcional 'ProductItem' y desestructuramos las propiedades que recibirá. Se desestructuran para poder utilizarlas directamente sin tener que acceder a través de 'props'. Sino deberiamos poner 'props.product', 'props.quantity', 'props.onQuantityChange', 'props.onUnitTypeChange'.
const ProductItem = ({ product, quantity, onQuantityChange, onUnitTypeChange }) => {
    return (
        // Contenedor principal con una clase CSS personalizada
        <div className={styles.productCardContainer}>
            {/* Componente de tarjeta de Material UI con una clase de estilo personalizada */}
            <Card className={styles.card}>
                {/* Contenedor para la imagen del producto */}
                <Box className={styles.cardMedia}>
                    {/* Muestra la imagen del producto, asegurando que la URL esté correctamente codificada */}
                    <img
                        src={encodeURI(`/${product.image}`)} // Ruta de la imagen del producto
                        alt={product.name} // Texto alternativo con el nombre del producto
                        style={{ width: '100%' }} // Estilo inline para ajustar el ancho al 100%
                    />
                </Box>
                {/* Contenido de la tarjeta */}
                <CardContent className={styles.cardContent}>
                    {/* Muestra el nombre del producto con un estilo tipográfico */}
                    <Typography variant="h6" className={styles.productName}>
                        {product.name}
                    </Typography>
                    {/* Muestra la cantidad y el tipo de unidad del producto */}
                    <Typography variant="body2" className={styles.productQuantity}>
                        Cantidad: {quantity} {product.unitType}
                    </Typography>
                    <Box className={styles.inputField}>
                        <TextField
                            type="number"
                            label="Cantidad"
                            value={quantity ?? ''}
                            onChange={(e) => onQuantityChange(product.id, parseFloat(e.target.value))}
                            slotProps={{ htmlInput: { min: 0, step: 0.1, inputMode: 'decimal', pattern: '[0-9]*' } }}
                            fullWidth
                        />
                    </Box>
                    <FormControl component="fieldset" className={styles.unitTypeSelect}>
                        <FormLabel component="legend">Tipo de Unidad</FormLabel>
                        <RadioGroup
                            row
                            aria-label="unitType"
                            name="unitType"
                            value={product.unitType || 'unidad/es'}
                            onChange={(e) => onUnitTypeChange(product.id, e.target.value)}
                        >
                            <FormControlLabel value="unidad/es" control={<Radio />} label="Unidad/es" />
                            <FormControlLabel value="paquete/s" control={<Radio />} label="Paquete/s" />
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
        </div>
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
};

export default ProductItem;
