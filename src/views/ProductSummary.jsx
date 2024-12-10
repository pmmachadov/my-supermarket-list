import GetAppIcon from '@mui/icons-material/GetApp'; // Importa el icono GetApp
import HomeIcon from '@mui/icons-material/Home'; // Importa el icono Home
import { Box, Button, Typography } from '@mui/material'; // Importa componentes de Material UI
import PropTypes from 'prop-types'; // Importa PropTypes para validar las propiedades del componente
import React, { useEffect } from 'react'; // Importa React y el hook useEffect
import handlePrint from './handlePrint'; // Importa la función handlePrint
import styles from './ProductSummary.module.css'; // Importa los estilos CSS específicos para este componente

// Definimos el componente funcional 'ProductSummary' y desestructuramos las propiedades que recibirá
const ProductSummary = ({ products, onGoHome }) => {
    // useEffect para verificar si el elemento enfocado tiene un ancestro con aria-hidden=true
    useEffect(() => {
        const checkAriaHidden = (element) => {
            let currentElement = element;
            while (currentElement) {
                if (currentElement.getAttribute && currentElement.getAttribute('aria-hidden') === 'true') {
                    console.warn('An ancestor of the focused element has aria-hidden set to true.');
                    break;
                }
                currentElement = currentElement.parentElement;
            }
        };

        const focusedElement = document.activeElement;
        if (focusedElement) {
            checkAriaHidden(focusedElement); // Verifica si el elemento enfocado tiene un ancestro con aria-hidden=true
        }
    }, []); // El array vacío como segundo argumento asegura que este efecto se ejecute solo una vez después del primer renderizado

    return (
        // Contenedor principal con una clase CSS personalizada
        <Box className={styles.productSummaryContainer}>
            {/* Título del resumen de productos */}
            <Typography variant="h4" className={styles.title}>
                Resumen de Productos
            </Typography>
            {/* Lista de productos */}
            <Box className={styles.productList}>
                {products.map((product) => (
                    <Box key={product.id} className={styles.productItem}>
                        <Typography variant="body1">{product.name}</Typography>
                        <Typography variant="body2">Cantidad: {product.quantity}</Typography>
                    </Box>
                ))}
            </Box>
            {/* Botón para imprimir el resumen */}
            <Button
                variant="contained"
                color="primary"
                startIcon={<GetAppIcon />}
                onClick={handlePrint}
                className={styles.printButton}
            >
                Imprimir
            </Button>
            {/* Botón para volver a la página principal */}
            <Button
                variant="contained"
                color="secondary"
                startIcon={<HomeIcon />}
                onClick={onGoHome}
                className={styles.homeButton}
            >
                Volver a Inicio
            </Button>
        </Box>
    );
};

// Definición de PropTypes para validar las propiedades del componente
ProductSummary.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onGoHome: PropTypes.func.isRequired
};

export default ProductSummary;