import React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Toolbar,
    IconButton,
    Divider,
    Button,
} from '@mui/material';
import { Category as CategoryIcon, Menu as MenuIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import styles from './CategoryMenu.module.css';

const CategoryMenu = ({ products, selectedCategory, onSelectCategory, open, onClose, onResetProducts }) => {
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
                <ListItem button={ true } onClick={ () => onSelectCategory(null) } className={ styles.listItem }>
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Todo" classes={ { primary: styles.listItemText } } />
                </ListItem>
                { categories.map((category, index) => (
                    <ListItem
                        button={ true }
                        key={ index }
                        selected={ category === selectedCategory }
                        onClick={ () => {
                            onSelectCategory(category);
                            onClose();
                        } }
                        className={ styles.listItem }
                    >
                        <ListItemText primary={ category } classes={ { primary: styles.listItemText } } />
                    </ListItem>
                )) }
            </List>
            <Divider className={ styles.resetButtonSeparator } />
            <Button
                variant="contained"
                color="secondary"
                startIcon={ <RefreshIcon /> }
                onClick={ onResetProducts }
                className={ styles.resetButton }
            >
                Resetear Productos
            </Button>
        </>
    );

    return (
        <Drawer
            anchor="left"
            open={ open }
            onClose={ onClose }
            classes={ { paper: styles.drawerPaper } }
            ModalProps={ {
                keepMounted: true,
            } }
            variant="temporary"
        >
            { drawerContent }
        </Drawer>
    );
};

export default CategoryMenu;
