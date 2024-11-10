// src/views/CategoryMenu.jsx
import React from 'react';
import styles from './CategoryMenu.module.css';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    ListItemIcon,
    Toolbar,
    IconButton,
    Divider,
} from '@mui/material';
import {
    ExpandLess,
    ExpandMore,
    Category as CategoryIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const CategoryMenu = ({
    products,
    selectedCategory,
    onSelectCategory,
}) => {
    const [open, setOpen] = React.useState(true);

    const handleToggle = () => {
        setOpen(!open);
    };

    // Generate categories from products
    const categories = Array.from(
        new Set(products.map((product) => product.category))
    );

    return (
        <nav className={ styles.drawer } aria-label="categories">
            <Drawer
                variant="permanent"
                classes={ {
                    paper: styles.drawerPaper,
                } }
            >
                <Toolbar />
                <Divider />
                <List component="nav">
                    <ListItem button onClick={ handleToggle }>
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Categories" />
                        { open ? <ExpandLess /> : <ExpandMore /> }
                    </ListItem>
                    <Collapse in={ open } timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                button
                                selected={ selectedCategory === null }
                                onClick={ () => onSelectCategory(null) }
                                className={ styles.nested }
                            >
                                <ListItemText primary="All" />
                            </ListItem>
                            { categories.map((category, index) => (
                                <ListItem
                                    button
                                    key={ index }
                                    selected={ category === selectedCategory }
                                    onClick={ () => onSelectCategory(category) }
                                    className={ styles.nested }
                                >
                                    <ListItemText primary={ category } />
                                </ListItem>
                            )) }
                        </List>
                    </Collapse>
                </List>
            </Drawer>
        </nav>
    );
};

export default CategoryMenu;
