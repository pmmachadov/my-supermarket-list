import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Toolbar,
    Divider,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import { Category as CategoryIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';
import styles from './CategoryMenu.module.css';

const CategoryMenu = ({ products, selectedCategory, onSelectCategory, open, onClose, onResetProducts }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleConfirmReset = () => {
        onResetProducts();
        handleCloseDialog();
    };

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

    const drawerContent = (
        <>
            <Toolbar />
            <Divider />
            <List component="nav">
                <ListItemButton onClick={ () => onSelectCategory(null) } className={ styles.listItem }>
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Todo" classes={ { primary: styles.listItemText } } />
                </ListItemButton>
                { categories.map((category, index) => (
                    <ListItemButton
                        key={ category }
                        selected={ category === selectedCategory }
                        onClick={ () => {
                            onSelectCategory(category);
                            onClose();
                        } }
                        className={ styles.listItem }
                    >
                        <ListItemText primary={ category } classes={ { primary: styles.listItemText } } />
                    </ListItemButton>
                )) }
            </List>
            <Divider className={ styles.resetButtonSeparator } />
            <Button
                variant="contained"
                color="secondary"
                startIcon={ <RefreshIcon /> }
                onClick={ handleOpenDialog }
                className={ styles.resetButton }
            >
                Resetear Productos
            </Button>
            <Dialog
                open={ isDialogOpen }
                onClose={ handleCloseDialog }
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{ "Confirmar Reseteo" }</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Resetear productos?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleCloseDialog } color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={ handleConfirmReset } color="primary" autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );

    return (
        <Drawer
            anchor="left"
            open={ open }
            onClose={ onClose }
            classes={ { paper: styles.drawerPaper } }
            variant="temporary"
        >
            { drawerContent }
        </Drawer>
    );
};

CategoryMenu.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedCategory: PropTypes.string,
    onSelectCategory: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onResetProducts: PropTypes.func.isRequired,
};

export default CategoryMenu;
