import React, { useState, useEffect, useRef } from 'react';
import initialProducts from './models/ProductModel';
import initialCategories from './models/CategoryModel';
import {
  increaseQuantity,
  decreaseQuantity,
  addProduct,
} from './controllers/ProductController';
import { addCategory } from './controllers/CategoryController';
import ProductList from './views/ProductList';
import CategoryMenu from './views/CategoryMenu';
import {
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Fab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Add as AddIcon, GetApp as GetAppIcon } from '@mui/icons-material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import styles from './App.module.css';

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : initialCategories;
  });

  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories.length > 0 ? categories[0].id : null
  );

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

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

  const handleSelectCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const handleAddCategory = (categoryName) => {
    const newCategory = {
      id: categories.length > 0 ? categories[categories.length - 1].id + 1 : 1,
      name: categoryName,
    };
    setCategories((prevCategories) => addCategory(prevCategories, newCategory));
    setSelectedCategoryId(newCategory.id);
  };

  const [openAddProductDialog, setOpenAddProductDialog] = useState(false);
  const [newProductData, setNewProductData] = useState({
    name: '',
    quantity: 0,
    image: '',
  });

  const handleOpenAddProductDialog = () => {
    setOpenAddProductDialog(true);
  };

  const handleCloseAddProductDialog = () => {
    setOpenAddProductDialog(false);
    setNewProductData({ name: '', quantity: 0, image: '' });
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: newProductData.name,
      quantity: parseInt(newProductData.quantity, 10),
      image: newProductData.image,
      categoryId: selectedCategoryId,
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
    html2canvas(input, { scale: 2, useCORS: true })
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
        categories={ categories }
        selectedCategoryId={ selectedCategoryId }
        onSelectCategory={ handleSelectCategory }
        onAddCategory={ handleAddCategory }
      />
      <main className={ styles.mainContent }>
        <div className={ styles.toolbar } />
        <Container>
          { !isMobile && (
            <Button
              variant="contained"
              color="primary"
              onClick={ handleOpenAddProductDialog }
              style={ { marginBottom: '20px', marginRight: '10px' } }
              startIcon={ <AddIcon /> }
            >
              Add Product
            </Button>
          ) }
          { !isMobile && (
            <Button
              variant="contained"
              color="primary"
              onClick={ handleDownloadPDF }
              style={ { marginBottom: '20px' } }
              startIcon={ <GetAppIcon /> }
            >
              Download PDF
            </Button>
          ) }
          <ProductList
            products={ products }
            onIncrease={ handleIncrease }
            onDecrease={ handleDecrease }
            selectedCategoryId={ selectedCategoryId }
            ref={ productListRef }
          />
          { isMobile && (
            <Fab
              color="primary"
              aria-label="add"
              className={ styles.fab }
              onClick={ handleOpenAddProductDialog }
            >
              <AddIcon />
            </Fab>
          ) }
          { isMobile && (
            <Fab
              color="secondary"
              aria-label="download"
              className={ styles.fabDownload }
              onClick={ handleDownloadPDF }
            >
              <GetAppIcon />
            </Fab>
          ) }
        </Container>
      </main>
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
            label="Image URL"
            name="image"
            fullWidth
            value={ newProductData.image }
            onChange={ handleNewProductDataChange }
            helperText="Provide a URL or path to the image"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleCloseAddProductDialog }>Cancel</Button>
          <Button onClick={ handleAddProduct } color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
