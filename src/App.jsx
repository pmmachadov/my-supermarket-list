import React, { useState } from 'react';
import initialProducts from './models/ProductModel';
import ProductList from './views/ProductList';
import CategoryMenu from './views/CategoryMenu';
import ProductSummary from './views/ProductSummary';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
} from '@mui/material';
import { Menu as MenuIcon, Add as AddIcon, GetApp as GetAppIcon, Search as SearchIcon } from '@mui/icons-material';
import styles from './App.module.css';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

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

  const handleQuantityChange = (id, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handleUnitTypeChange = (id, newUnitType) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, unitType: newUnitType } : product
      )
    );
  };

  const handleShowSummary = () => {
    setShowSummary(true);
  };

  const handleResetProducts = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, quantity: 0 }))
    );
  };

  const handleGoHome = () => {
    setShowSummary(false);
  };

  return (
    <div className={ styles.appContainer }>
      <CategoryMenu
        products={ products }
        selectedCategory={ selectedCategory }
        onSelectCategory={ handleSelectCategory }
        open={ isMenuOpen }
        onClose={ handleCloseMenu }
        onResetProducts={ handleResetProducts }
      />
      <main className={ styles.mainContent }>
        <AppBar position="fixed" className={ styles.appBarContent }>
          <Toolbar className={ styles.toolbar }>
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
            <Button color="inherit" onClick={ handleShowSummary } className={ `${styles.verResumenButton}` }>
              Resumen
            </Button>
          </Toolbar>
        </AppBar>
        <div className={ styles.productContainer }>
          { showSummary ? (
            <ProductSummary
              products={ products }
              onGoHome={ handleGoHome }
            />
          ) : (
            <ProductList
              products={ products }
              selectedCategory={ selectedCategory }
              searchQuery={ searchQuery }
              onQuantityChange={ handleQuantityChange }
              onUnitTypeChange={ handleUnitTypeChange }
            />
          ) }
        </div>
      </main>
    </div>
  );
}

export default App;
