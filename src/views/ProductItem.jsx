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

                    {/* Contenedor para el campo de entrada de cantidad */}
                    <Box className={styles.inputField}>
                        {/* Campo de texto para ingresar la cantidad del producto */}
                        <TextField
                            type="number" // Tipo de entrada numérica
                            label="Cantidad" // Etiqueta del campo de texto
                            value={quantity ?? ''} // Valor del campo de texto, si quantity es null o undefined, se muestra una cadena vacía
                            onChange={(e) => onQuantityChange(product.id, parseFloat(e.target.value))} // Maneja el cambio de valor del campo de texto. 
                            // 'e' es el evento que se dispara cuando el valor del campo cambia.
                            // 'e.target.value' es el nuevo valor ingresado en el campo de texto.
                            // 'parseFloat(e.target.value)' convierte el valor ingresado a un número de punto flotante.
                            // 'onQuantityChange' es una función pasada como prop que se llama con el id del producto y el nuevo valor.
                            // Esto permite actualizar la cantidad del producto en el componente padre.
                            slotProps={{ htmlInput: { min: 0, step: 0.1, inputMode: 'decimal', pattern: '[0-9]*' } }} // Propiedades adicionales para el input HTML dentro del TextField.
                            // 'min: 0' establece el valor mínimo permitido en el campo de texto a 0.
                            // 'step: 0.1' establece el incremento de valor permitido a 0.1, permitiendo decimales.
                            // 'inputMode: 'decimal'' sugiere al navegador que el teclado debe estar en modo decimal (útil en dispositivos móviles).
                            // 'pattern: '[0-9]*'' es una expresión regular que permite solo números en el campo de texto.
                            fullWidth // Propiedad del TextField que hace que el campo de texto ocupe todo el ancho disponible del contenedor.
                        />
                    </Box>

                    {/* Control de formulario para seleccionar el tipo de unidad */}
                    <FormControl component="fieldset" className={styles.unitTypeSelect}>
                        {/* Etiqueta para el grupo de botones de radio */}
                        <FormLabel component="legend">Tipo de Unidad</FormLabel>
                        {/* Grupo de botones de radio para seleccionar el tipo de unidad */}
                        <RadioGroup
                            row // Disposición en fila
                            aria-label="unitType" // Etiqueta accesible para el grupo de botones de radio
                            name="unitType" // Nombre del grupo de botones de radio
                            value={product.unitType || 'unidad/es'} // Valor seleccionado, por defecto 'unidad/es' si product.unitType es null o undefined
                            onChange={(e) => onUnitTypeChange(product.id, e.target.value)} // Maneja el cambio de valor, llama a la función onUnitTypeChange con el id del producto y el nuevo valor
                        >
                            {/* Botón de radio para seleccionar 'Unidad/es' */}
                            <FormControlLabel value="unidad/es" control={<Radio />} label="Unidad/es" />
                            {/* Botón de radio para seleccionar 'Paquete/s' */}
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
