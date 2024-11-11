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
} from '@mui/material';
import { Category as CategoryIcon, Menu as MenuIcon } from '@mui/icons-material';
import styles from './CategoryMenu.module.css';

const CategoryMenu = ({ products, selectedCategory, onSelectCategory, open, onClose }) => {
    const categories = Array.from(new Set(products.map((product) => product.category)));

    const drawerContent = (
        <>
            <Toolbar />
            <Divider />
            <List component="nav">
                <ListItem button onClick={ () => onSelectCategory(null) }>
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Todo" />
                </ListItem>
                { categories.map((category, index) => (
                    <ListItem
                        button
                        key={ index }
                        selected={ category === selectedCategory }
                        onClick={ () => {
                            onSelectCategory(category);
                            onClose();
                        } }
                    >
                        <ListItemText primary={ category } />
                    </ListItem>
                )) }
            </List>
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
