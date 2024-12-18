import React, { useState, useEffect } from 'react';
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
  Fab,
  Box,
  Slide,
  useScrollTrigger
} from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, ArrowUpward as ArrowUpwardIcon } from '@mui/icons-material';
import styles from './App.module.css';

// Nuevo componente HideOnScroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={ false } direction="down" in={ !trigger }>
      { children }
    </Slide>
  );
}

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : initialProducts;
  });
  const [summaryProducts, setSummaryProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleShowSummary = () => {
    handleAddToSummary();
    setShowSummary(true);
  };

  const handleGoHome = () => {
    setShowSummary(false);
  };

  const handleResetProducts = () => {
    setProducts(initialProducts);
    setSummaryProducts([]);
    localStorage.removeItem('products');
    localStorage.removeItem('summaryProducts');
  };

  const handleQuantityChange = (id, newQuantity) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      );
      updateSummaryProducts(id, newQuantity, updatedProducts);
      return updatedProducts;
    });
  };

  const updateSummaryProducts = (id, newQuantity, updatedProducts) => {
    const updatedProduct = updatedProducts.find((product) => product.id === id);

    setSummaryProducts((prevSummaryProducts) => {
      if (newQuantity > 0) {
        const existingProduct = prevSummaryProducts.find((p) => p.id === id);
        if (existingProduct) {
          return prevSummaryProducts.map((p) =>
            p.id === id ? { ...p, quantity: newQuantity } : p
          );
        } else {
          return [...prevSummaryProducts, { ...updatedProduct }];
        }
      } else {
        return prevSummaryProducts.filter((p) => p.id !== id);
      }
    });
  };

  const handleUnitTypeChange = (id, newUnitType) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, unitType: newUnitType } : product
      )
    );
  };

  const handleAddToSummary = () => {
    const allProductsWithQuantities = products.map((product) => ({
      ...product,
      quantity: product.quantity || 0,
    }));
    setSummaryProducts(allProductsWithQuantities);
  };

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 100) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('summaryProducts', JSON.stringify(summaryProducts));
  }, [summaryProducts]);

  return (
    <div className={ styles.appContainer }>
      <CategoryMenu
        selectedCategory={ selectedCategory }
        onSelectCategory={ handleSelectCategory }
        open={ isMenuOpen }
        onClose={ handleCloseMenu }
        onResetProducts={ handleResetProducts }
      />
      <main className={ styles.mainContent }>
        <HideOnScroll>
          <AppBar position="fixed" className={ styles.appBarContent }>
            <Toolbar className={ styles.toolbar }>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={ handleToggleMenu }
                className={ styles.menuButton }
              >
                <MenuIcon fontSize="inherit" />
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
              <div>
                <Button
                  color="inherit"
                  onClick={ handleShowSummary }
                  style={ {
                    fontWeight: 'bold',
                    borderRadius: '0.4rem',
                    backgroundColor: 'rgba(118 12 122 / 0.8)',
                    margin: '1rem',
                    padding: '1.3rem',
                  } }
                >
                  Resumen
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <div className={ styles.productContainer }>
          { showSummary ? (
            <ProductSummary
              products={ summaryProducts }
              onGoHome={ handleGoHome }
            />
          ) : (
            <ProductList
              products={ products }
              selectedCategory={ selectedCategory }
              searchQuery={ searchQuery }
              onQuantityChange={ handleQuantityChange }
              onUnitTypeChange={ handleUnitTypeChange }
              onAddToSummary={ handleAddToSummary }
            />
          ) }
        </div>
      </main>
      <Box className={ styles.arrowButton }>
        <Fab
          color="primary"
          aria-label="scroll back to top"
          className={ styles.scrollTop }
          onClick={ scrollTop }
          style={ { display: showScroll ? 'flex' : 'none' } }
        >
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </div>
  );
}

export default App;
