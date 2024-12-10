import { Category as CategoryIcon, Refresh as RefreshIcon } from '@mui/icons-material'; // Iconos de Material-UI
import {
    Button, // Componente de Material-UI para botones
    Dialog, // Componente de Material-UI para diálogos
    DialogActions, // Componente de Material-UI para acciones de diálogos
    DialogContent, // Componente de Material-UI para contenido de diálogos
    DialogContentText, // Componente de Material-UI para texto de contenido de diálogos
    DialogTitle, // Componente de Material-UI para barras de herramientas
    Divider,
    Drawer, // Componente de Material-UI para crear un cajón deslizante
    List, // Componente de Material-UI para listas
    ListItemButton, // Componente de Material-UI para texto de elementos de lista
    ListItemIcon, // Componente de Material-UI para botones de lista
    ListItemText, // Componente de Material-UI para iconos de elementos de lista
    Toolbar, // Componente de Material-UI para barras de herramientas
} from '@mui/material';
import PropTypes from 'prop-types'; // Librería para validación de tipos de propiedades
import React, { useState } from 'react';
import styles from './CategoryMenu.module.css'; // Importación de estilos CSS

// Componente CategoryMenu
const CategoryMenu = ({
    selectedCategory, // Categoría actualmente seleccionada
    onSelectCategory, // Función para seleccionar una categoría
    open, // Estado de apertura del cajón
    onClose, // Función para cerrar el cajón
    onResetProducts // Función para resetear los productos
}) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    // Esta línea de código utiliza el hook useState de React para manejar el estado de apertura del diálogo de confirmación.
    // - isDialogOpen: una constante que representa el estado actual de si el diálogo está abierto o cerrado. Inicialmente, está configurado en false, lo que significa que el diálogo está cerrado.
    // - setIsDialogOpen: una función que se utiliza para actualizar el estado de isDialogOpen. Cuando se llama a esta función con true, el diálogo se abrirá; cuando se llama con false, el diálogo se cerrará.

    // Función para abrir el diálogo
    const handleOpenDialog = () => {
        setIsDialogOpen(true); // Cambia el estado para abrir el diálogo. De esta manera: setIsDialogOpen(true) se llama cuando el botón de reseteo se presiona, lo que abre el diálogo de confirmación.
    };

    // Función para cerrar el diálogo
    const handleCloseDialog = () => {
        setIsDialogOpen(false); // Cambia el estado para cerrar el diálogo
    };

    // Función para confirmar el reseteo de productos
    const handleConfirmReset = () => {
        onResetProducts(); // Llama a la función para resetear los productos
        handleCloseDialog(); // Cierra el diálogo después de confirmar
    };

    // Lista de categorías
    const categories = [
        "Alimentos",
        "Limpieza",
        "Dulces y postres",
        "Higiene",
        "Bebidas",
        "Panadería y pastelería",
        "Agua y refrescos",
        "Hogar",
        "Golosinas y postres",
    ];

    // Contenido del cajón
    const drawerContent = (
        <>
            <Toolbar /> {/* Espacio reservado para la barra de herramientas */}
            <Divider /> {/* Divisor */}
            <List component="nav"> {/* Lista de navegación */}
                <ListItemButton onClick={() => onSelectCategory(null)} className={styles.listItem}>
                    {/*Elemento de lista para mostrar todos los productos
                    al hacer clic en este elemento, onSelectCategory(null) se llama, lo que selecciona la categoría "Todo" */}
                    <ListItemIcon>
                        <CategoryIcon /> {/* Icono de categoría */}
                    </ListItemIcon>
                    <ListItemText primary="Todos los pro" classes={{ primary: styles.listItemText }} /> {/* Texto del elemento de lista */}
                </ListItemButton>
                {categories.map((category, index) => (
                    <ListItemButton
                        key={category}
                        selected={category === selectedCategory} // Marca el elemento como seleccionado si coincide con la categoría seleccionada
                        onClick={() => {
                            onSelectCategory(category); // Llama a la función para seleccionar la categoría
                            onClose(); // Cierra el cajón después de seleccionar la categoría
                        }}
                        className={styles.listItem}
                    >
                        <ListItemText primary={category} classes={{ primary: styles.listItemText }} /> {/* Texto del elemento de lista */}
                    </ListItemButton>
                ))}
            </List>
            <Divider className={styles.resetButtonSeparator} /> {/* Divisor */}
            <Button
                variant="contained"
                color="secondary"
                startIcon={<RefreshIcon />}
                onClick={handleOpenDialog} // Abre el diálogo de confirmación de reseteo
                className={styles.resetButton}
            >
                Resetear Productos
            </Button>
            <Dialog
                open={isDialogOpen} // Controla la apertura del diálogo
                onClose={handleCloseDialog} // Cierra el diálogo
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirmar Reseteo"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Resetear productos?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmReset} color="primary" autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );

    return (
        <Drawer
            anchor="left"
            open={open} // Controla la apertura del cajón
            onClose={onClose} // Cierra el cajón
            classes={{ paper: styles.drawerPaper }}
            variant="temporary"
        >
            {drawerContent}
        </Drawer>
    );
};

// Definición de tipos de propiedades
CategoryMenu.propTypes = {
    selectedCategory: PropTypes.string, // Categoría seleccionada
    onSelectCategory: PropTypes.func.isRequired, // Función para seleccionar una categoría
    open: PropTypes.bool.isRequired, // Estado de apertura del cajón
    onClose: PropTypes.func.isRequired, // Función para cerrar el cajón
    onResetProducts: PropTypes.func.isRequired, // Función para resetear los productos
};

export default CategoryMenu;
