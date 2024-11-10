// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import initialProducts from './models/ProductModel';
import {
  increaseQuantity,
  decreaseQuantity,
  addProduct,
} from './controllers/ProductController';
import ProductList from './views/ProductList';
import CategoryMenu from './views/CategoryMenu';
import {
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Fab,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@mui/material';
import { Add as AddIcon, GetApp as GetAppIcon, Search as SearchIcon } from '@mui/icons-material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import styles from './App.module.css';

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  const [selectedCategory, setSelectedCategory] = useState(null); // Start with 'All' categories
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleIncrease = (id) => {
    setProducts((prevProducts) => {
      const updatedProducts = increaseQuantity(prevProducts, id);
      return updatedProducts;
    });
  };

  const handleDecrease = (id) => {
    setProducts((prevProducts) => {
      const updatedProducts = decreaseQuantity(prevProducts, id);
      return updatedProducts;
    });
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Reset search when category changes
  };

  const [openAddProductDialog, setOpenAddProductDialog] = useState(false);
  const [newProductData, setNewProductData] = useState({
    name: '',
    quantity: 0,
    image: '',
    category: '',
  });

  const handleOpenAddProductDialog = () => {
    setOpenAddProductDialog(true);
  };

  const handleCloseAddProductDialog = () => {
    setOpenAddProductDialog(false);
    setNewProductData({ name: '', quantity: 0, image: '', category: '' });
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: newProductData.name,
      quantity: parseInt(newProductData.quantity, 10),
      image: newProductData.image,
      category: newProductData.category,
    };
    setProducts((prevProducts) => addProduct(prevProducts, newProduct));
    handleCloseAddProductDialog();
  };

  const handleNewProductDataChange = (e) => {
    const { name, value } = e.target;
    setNewProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const productListRef = useRef();

  const handleDownloadPDF = () => {
    const input = productListRef.current;
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      logging: true,
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('product_list.pdf');
      })
      .catch((err) => {
        console.error('Failed to generate PDF', err);
      });
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={ styles.appContainer }>
      <CategoryMenu
        products={ products }
        selectedCategory={ selectedCategory }
        onSelectCategory={ handleSelectCategory }
      />
      <main className={ styles.mainContent }>
        <AppBar position="fixed" className={ styles.appBarContent }>
          <Toolbar>
            { isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={ handleOpenAddProductDialog }
              >
                <AddIcon />
              </IconButton>
            ) }
            <Typography variant="h6" className={ styles.title }>
              { selectedCategory || 'All Products' }
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
            { !isMobile && (
              <>
                <IconButton
                  color="inherit"
                  onClick={ handleOpenAddProductDialog }
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={ handleDownloadPDF }
                >
                  <GetAppIcon />
                </IconButton>
              </>
            ) }
          </Toolbar>
        </AppBar>
        <Container>
          <div className={ styles.toolbar } />
          <ProductList
            products={ products }
            onIncrease={ handleIncrease }
            onDecrease={ handleDecrease }
            selectedCategory={ selectedCategory }
            searchQuery={ searchQuery }
            ref={ productListRef }
          />
          { isMobile && (
            <>
              <Fab
                color="primary"
                aria-label="add"
                className={ styles.fab }
                onClick={ handleOpenAddProductDialog }
              >
                <AddIcon />
              </Fab>
              <Fab
                color="secondary"
                aria-label="download"
                className={ styles.fabDownload }
                onClick={ handleDownloadPDF }
              >
                <GetAppIcon />
              </Fab>
            </>
          ) }
        </Container>
        <Dialog open={ openAddProductDialog } onClose={ handleCloseAddProductDialog }>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Product Name"
              name="name"
              fullWidth
              value={ newProductData.name }
              onChange={ handleNewProductDataChange }
            />
            <TextField
              margin="dense"
              label="Quantity"
              name="quantity"
              type="number"
              fullWidth
              value={ newProductData.quantity }
              onChange={ handleNewProductDataChange }
            />
            <TextField
              margin="dense"
              label="Image Path"
              name="image"
              fullWidth
              value={ newProductData.image }
              onChange={ handleNewProductDataChange }
              helperText="Provide the path to the product image (e.g., images/product.jpg)"
            />
            <TextField
              margin="dense"
              label="Category"
              name="category"
              fullWidth
              value={ newProductData.category }
              onChange={ handleNewProductDataChange }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={ handleCloseAddProductDialog }>Cancel</Button>
            <Button onClick={ handleAddProduct } color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </div>
  );
}

export default App;
