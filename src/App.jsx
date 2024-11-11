import React, { useState, useEffect } from 'react';
import initialProducts from './models/ProductModel';
import {
  increaseQuantity,
  decreaseQuantity,
  addProduct,
} from './controllers/ProductController';
import ProductList from './views/ProductList';
import CategoryMenu from './views/CategoryMenu';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@mui/material';
import { Menu as MenuIcon, Add as AddIcon, GetApp as GetAppIcon, Search as SearchIcon } from '@mui/icons-material';
import styles from './App.module.css';

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    handleCloseMenu();
  };

  return (
    <div className={ styles.appContainer }>
      <CategoryMenu
        products={ products }
        selectedCategory={ selectedCategory }
        onSelectCategory={ handleSelectCategory }
        open={ isMenuOpen }
        onClose={ handleCloseMenu }
      />
      <main className={ styles.mainContent }>
        <AppBar position="fixed" className={ styles.appBarContent }>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={ handleToggleMenu }
              className={ styles.menuButton }
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={ styles.title }>
              { selectedCategory || 'Caseta de Cristian' }
            </Typography>
            <div className={ styles.search }>
              <div className={ styles.searchIcon }>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search products…"
                classes={ {
                  root: styles.inputRoot,
                  input: styles.inputInput,
                } }
                value={ searchQuery }
                onChange={ (e) => setSearchQuery(e.target.value) }
                inputProps={ { 'aria-label': 'search' } }
              />
            </div>
          </Toolbar>
        </AppBar>
        <div className={ styles.productContainer }>
          <ProductList
            products={ products }
            selectedCategory={ selectedCategory }
            searchQuery={ searchQuery }
          />
        </div>
      </main>
    </div>
  );
}

export default App;
