import React from 'react';
import styles from './CategoryMenu.module.css';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    ListItemIcon,
    IconButton,
    TextField,
    Button,
    Toolbar,
    AppBar,
    Typography,
    Divider,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    ExpandLess,
    ExpandMore,
    Category as CategoryIcon,
    Add as AddIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const CategoryMenu = ({
    categories,
    selectedCategoryId,
    onSelectCategory,
    onAddCategory,
}) => {
    const [open, setOpen] = React.useState(true);
    const [newCategoryName, setNewCategoryName] = React.useState('');
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleAddCategory = () => {
        if (newCategoryName.trim() !== '') {
            onAddCategory(newCategoryName.trim());
            setNewCategoryName('');
        }
    };

    const drawerContent = (
        <div>
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
                        { categories.map((category) => (
                            <ListItem
                                button
                                key={ category.id }
                                selected={ category.id === selectedCategoryId }
                                onClick={ () => {
                                    onSelectCategory(category.id);
                                    if (isMobile) setMobileOpen(false);
                                } }
                                className={ styles.nested }
                            >
                                <ListItemText primary={ category.name } />
                            </ListItem>
                        )) }
                        <ListItem className={ styles.addCategory }>
                            <TextField
                                label="New Category"
                                variant="outlined"
                                size="small"
                                value={ newCategoryName }
                                onChange={ (e) => setNewCategoryName(e.target.value) }
                            />
                            <IconButton
                                color="primary"
                                onClick={ handleAddCategory }
                                disabled={ newCategoryName.trim() === '' }
                            >
                                <AddIcon />
                            </IconButton>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    );

    return (
        <nav className={ styles.drawer } aria-label="categories">
            <AppBar position="fixed" className={ styles.appBar }>
                <Toolbar>
                    { isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={ handleDrawerToggle }
                        >
                            <MenuIcon />
                        </IconButton>
                    ) }
                    <Typography variant="h6" noWrap>
                        Supermarket List
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant={ isMobile ? 'temporary' : 'permanent' }
                open={ isMobile ? mobileOpen : true }
                onClose={ handleDrawerToggle }
                classes={ {
                    paper: styles.drawerPaper,
                } }
                ModalProps={ {
                    keepMounted: true,
                } }
            >
                { drawerContent }
            </Drawer>
        </nav>
    );
};

export default CategoryMenu;
