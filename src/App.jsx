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
} from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, ArrowUpward as ArrowUpwardIcon } from '@mui/icons-material';
import styles from './App.module.css';

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : initialProducts;
  });
  const [summaryProducts, setSummaryProducts] = useState(() => {
    const storedSummaryProducts = localStorage.getItem('summaryProducts');
    return storedSummaryProducts ? JSON.parse(storedSummaryProducts) : [];
  });
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

      const updatedProduct = updatedProducts.find((product) => product.id === id);

      // Actualizar summaryProducts
      setSummaryProducts((prevSummaryProducts) => {
        if (newQuantity > 0) {
          const existingProduct = prevSummaryProducts.find((p) => p.id === id);
          if (existingProduct) {
            // Actualizar la cantidad del producto existente
            return prevSummaryProducts.map((p) =>
              p.id === id ? { ...p, quantity: newQuantity } : p
            );
          } else {
            // Agregar nuevo producto al resumen
            return [...prevSummaryProducts, { ...updatedProduct }];
          }
        } else {
          // Eliminar producto del resumen si la cantidad es 0
          return prevSummaryProducts.filter((p) => p.id !== id);
        }
      });

      return updatedProducts;
    });
  };

  const handleUnitTypeChange = (id, newUnitType) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, unitType: newUnitType } : product
      )
    );
  };

  const handleAddToSummary = (product) => {
    setSummaryProducts((prevSummaryProducts) => {
      const existingProduct = prevSummaryProducts.find((p) => p.id === product.id);
      if (existingProduct) {
        // Actualizar la cantidad del producto existente
        return prevSummaryProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: product.quantity } : p
        );
      } else {
        // Añadir nuevo producto al resumen
        return [...prevSummaryProducts, { ...product }];
      }
    });
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
            <div>
              <Button
                color="inherit"
                onClick={ handleShowSummary }
                style={ {
                  fontWeight: 'bold',
                  borderRadius: '0.4rem',
                  backgroundColor: 'rgba(118 12 122 / 0.8)',
                  marginLeft: '1rem',
                  padding: '0.7rem',
                } }
              >
                Resumen
              </Button>
            </div>
          </Toolbar>
        </AppBar>
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
