// Importing necessary components and icons from Material-UI and React
import { ArrowUpward as ArrowUpwardIcon, Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Fab,
  IconButton,
  InputBase,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import initialProducts from './models/ProductModel';
import CategoryMenu from './views/CategoryMenu';
import ProductList from './views/ProductList';
import ProductSummary from './views/ProductSummary';

// Component to hide AppBar on scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Main App component
function App() {
  // State variables
  const [showScroll, setShowScroll] = useState(false); // To show/hide scroll to top button
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : initialProducts; // Load products from localStorage or use initialProducts
  });
  const [summaryProducts, setSummaryProducts] = useState([]); // Products in the summary
  const [selectedCategory, setSelectedCategory] = useState(null); // Selected category
  const [searchQuery, setSearchQuery] = useState(''); // Search query
  const [showSummary, setShowSummary] = useState(false); //  With the useState hook, we can create a state variable that will hold the current state of the component. We can also provide an initial value to the useState hook. In this case, we are providing an initial value of false to the showSummary state variable. This means that the summary will not be shown by default when the component is rendered.
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To show/hide category menu

  // Toggle category menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close category menu
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // Select a category
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Show summary
  const handleShowSummary = () => {
    handleAddToSummary();
    setShowSummary(true);
  };

  // Go back to home (product list)
  const handleGoHome = () => {
    setShowSummary(false);
  };

  // Reset products to initial state
  const handleResetProducts = () => {
    setProducts(initialProducts);
    setSummaryProducts([]);
    localStorage.removeItem('products');
    localStorage.removeItem('summaryProducts');
  };

  // Change product quantity
  const handleQuantityChange = (id, newQuantity) => { // The handleQuantityChange function takes two arguments: id and newQuantity. The id argument is the id of the product whose quantity is being changed, and the newQuantity argument is the new quantity of the product. The function updates the quantity of the product in the products state variable and calls the updateSummaryProducts function to update the quantity of the product in the summaryProducts state variable.
    setProducts((prevProducts) => { // The setProducts function is called with a callback function that takes the previous products state variable as an argument. The callback function returns a new array of products where the quantity of the product with the specified id is updated to the new quantity. The setProducts function then updates the products state variable with the new array of products.
      const updatedProducts = prevProducts.map((product) => // The map method is used to iterate over the products array and update the quantity of the product with the specified id. If the id of the product matches the id argument, the quantity of the product is updated to the newQuantity argument. Otherwise, the product is returned as is.
        product.id === id ? { ...product, quantity: newQuantity } : product // The map method returns a new array of products with the updated quantity of the product with the specified id. The updatedProducts array is then used to update the products state variable using the setProducts function.
      );
      updateSummaryProducts(id, newQuantity, updatedProducts);  // The updateSummaryProducts function is called with the id, newQuantity, and updatedProducts arguments to update the quantity of the product in the summaryProducts state variable.
      return updatedProducts; // The updatedProducts array is returned from the callback function, which is then used to update the products state variable using the setProducts function.
    });
  };

  // Update summary products based on quantity change
  const updateSummaryProducts = (id, newQuantity, updatedProducts) => { // The updateSummaryProducts function takes three arguments: id, newQuantity, and updatedProducts. The id argument is the id of the product whose quantity is being changed, the newQuantity argument is the new quantity of the product, and the updatedProducts argument is the updated array of products with the new quantity of the product.
    const updatedProduct = updatedProducts.find((product) => product.id === id); // The find method is used to find the product with the specified id in the updatedProducts array. The updatedProduct variable stores the product with the specified id.

    setSummaryProducts((prevSummaryProducts) => {
      if (newQuantity > 0) { // The setSummaryProducts function is called with a callback function that takes the previous summaryProducts state variable as an argument. The callback function returns a new array of summary products based on the quantity change of the product.
        const existingProduct = prevSummaryProducts.find((p) => p.id === id); // The find method is used to find the product with the specified id in the prevSummaryProducts array. The existingProduct variable stores the product with the specified id if it exists in the prevSummaryProducts array.
        if (existingProduct) {  // If the existingProduct variable is truthy, the quantity of the product is updated to the new quantity in the prevSummaryProducts array. The map method is used to iterate over the prevSummaryProducts array and update the quantity of the product with the specified id to the new quantity.
          return prevSummaryProducts.map((p) => // The map method returns a new array of summary products where the quantity of the product with the specified id is updated to the new quantity. The updated product is then returned as is.
            p.id === id ? { ...p, quantity: newQuantity } : p // The map method returns a new array of summary products with the updated quantity of the product with the specified id. The updated summary products array is then used to update the summaryProducts state variable using the setSummaryProducts function.
          );
        } else {
          return [...prevSummaryProducts, { ...updatedProduct }]; // If the existingProduct variable is falsy, a new product object is added to the prevSummaryProducts array with the updated quantity of the product. The new product object is created by spreading the updatedProduct object.
        }
      } else {
        return prevSummaryProducts.filter((p) => p.id !== id);  // If the new quantity is 0, the product is removed from the prevSummaryProducts array. The filter method is used to filter out the product with the specified id from the prevSummaryProducts array.
      }
    });
  };

  // Change product unit type
  const handleUnitTypeChange = (id, newUnitType) => { // The handleUnitTypeChange function takes two arguments: id and newUnitType. The id argument is the id of the product whose unit type is being changed, and the newUnitType argument is the new unit type of the product. The function updates the unit type of the product in the products state variable.
    setProducts((prevProducts) =>  // The setProducts function is called with a callback function that takes the previous products state variable as an argument. The callback function returns a new array of products where the unit type of the product with the specified id is updated to the new unit type. The setProducts function then updates the products state variable with the new array of products.
      prevProducts.map((product) => // The map method is used to iterate over the products array and update the unit type of the product with the specified id. If the id of the product matches the id argument, the unit type of the product is updated to the newUnitType argument. Otherwise, the product is returned as is.
        product.id === id ? { ...product, unitType: newUnitType } : product // The map method returns a new array of products with the updated unit type of the product with the specified id. The updatedProducts array is then used to update the products state variable using the setProducts function.
      )
    );
  };

  // Add all products to summary
  const handleAddToSummary = () => {  // The handleAddToSummary function is called when the user clicks on the Resumen button in the AppBar. The function adds all products to the summaryProducts state variable with a quantity of 0.
    const allProductsWithQuantities = products.map((product) => ({  // The map method is used to iterate over the products array and create a new array of products with a quantity of 0. The new array of products is stored in the allProductsWithQuantities variable.
      ...product, // The spread operator is used to copy the properties of the product object.
      quantity: product.quantity || 0,  // The quantity property of the product object is set to 0 if it does not exist.
    }));
    setSummaryProducts(allProductsWithQuantities);  // The setSummaryProducts function is called with the allProductsWithQuantities array to update the summaryProducts state variable with all products and quantities set to 0.
  };

  // Check if scroll position is greater than 100 to show scroll to top button
  const checkScrollTop = () => {  // The checkScrollTop function is called when the user scrolls the page. The function checks if the scroll position is greater than 100 pixels and sets the showScroll state variable to true if it is. If the scroll position is less than or equal to 100 pixels, the showScroll state variable is set to false.
    if (!showScroll && window.scrollY > 100) {  // The  checkScrollTop function is called when the user scrolls the page. The function checks if the scroll position is greater than 100 pixels and sets the showScroll state variable to true if it is. If the scroll position is less than or equal to 100 pixels, the showScroll state variable is set to false.
      setShowScroll(true);  // The showScroll state variable is used to determine whether the scroll to top button should be displayed. If the showScroll state variable is true, the scroll to top button is displayed. If the showScroll state variable is false, the scroll to top button is hidden.
    } else if (showScroll && window.scrollY <= 100) { // The checkScrollTop function is called when the user scrolls the page. The function checks if the scroll position is greater than 100 pixels and sets the showScroll state variable to true if it is. If the scroll position is less than or equal to 100 pixels, the showScroll state variable is set to false.
      setShowScroll(false); // The showScroll state variable is used to determine whether the scroll to top button should be displayed. If the showScroll state variable is true, the scroll to top button is displayed. If the showScroll state variable is false, the scroll to top button is hidden.
    }
  };

  // Scroll to top of the page  
  const scrollTop = () => { // The scrollTop function is called when the user clicks on the scroll to top button. The function scrolls the page to the top using the window.scrollTo method with the top property set to 0 and the behavior property set to smooth.
    window.scrollTo({ top: 0, behavior: 'smooth' });  // The scrollTop function is called when the user clicks on the scroll to top button. The function scrolls the page to the top using the window.scrollTo method with the top property set to 0 and the behavior property set to smooth.
  };

  // Add scroll event listener on mount and remove on unmount
  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);  // The useEffect hook is used to add a scroll event listener to the window object when the component is mounted. The checkScrollTop function is called when the user scrolls the page to check if the scroll position is greater than 100 pixels and show the scroll to top button.
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  // Save products to localStorage when products state changes
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]); // The useEffect hook is used to save the products state variable to localStorage when the products state variable changes. The JSON.stringify method is used to convert the products array to a JSON string, which is then stored in localStorage with the key 'products'.

  // Save summary products to localStorage when summaryProducts state changes
  useEffect(() => {
    localStorage.setItem('summaryProducts', JSON.stringify(summaryProducts));
  }, [summaryProducts]);

  return (
    <div className={styles.appContainer}>
      <CategoryMenu
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        open={isMenuOpen}
        onClose={handleCloseMenu}
        onResetProducts={handleResetProducts}
      />  {/* The CategoryMenu component is rendered with the selectedCategory, onSelectCategory, open, onClose, and onResetProducts props. The selectedCategory prop is set to the selectedCategory state variable, which holds the currently selected category. The onSelectCategory prop is set to the handleSelectCategory function, which updates the selectedCategory state variable with the selected category. The open prop is set to the isMenuOpen state variable, which determines whether the category menu is open or closed. The onClose prop is set to the handleCloseMenu function, which closes the category menu. The onResetProducts prop is set to the handleResetProducts function, which resets the products state variable to its initial state. */}
      <main className={styles.mainContent}>
        <HideOnScroll>
          <AppBar position="fixed" className={styles.appBarContent}>
            <Toolbar className={styles.toolbar}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleToggleMenu}
                className={styles.menuButton}
              > {/* The IconButton component is rendered with the color, aria-label, edge, onClick, and className props. The color prop is set to 'inherit' to inherit the color from the parent element. The aria-label prop is set to 'open drawer' to provide an accessible label for the icon button. The edge prop is set to 'start' to position the icon button at the start of the toolbar. The onClick prop is set to the handleToggleMenu function, which toggles the category menu. The className prop is set to the menuButton class from the App.module.css file to style the icon button. */}
                <MenuIcon fontSize="inherit" />
              </IconButton>
              <Typography variant="h6" className={styles.title}>
                {selectedCategory || 'Caseta de Cristian'}
              </Typography>
              <div className={styles.search}>
                <div className={styles.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search products…"
                  classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput,
                  }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  inputProps={{ 'aria-label': 'search' }}
                />  {/* The InputBase component is rendered with the placeholder, classes, value, onChange, and inputProps props. The placeholder prop is set to 'Search products…' to provide a placeholder text for the input field. The classes prop is set to an object with the root and input properties. The root property is set to the inputRoot class from the App.module.css file to style the input field. The input property is set to the inputInput class from the App.module.css file to style the input field. The value prop is set to the searchQuery state variable, which holds the search query entered by the user. The onChange prop is set to an arrow function that updates the searchQuery state variable with the value entered by the user. The inputProps prop is set to an object with the aria-label property set to 'search' to provide an accessible label for the input field. */}
              </div>
              <div>
                <Button
                  color="inherit"
                  onClick={handleShowSummary}
                  style={{
                    fontWeight: 'bold',
                    borderRadius: '0.4rem',
                    backgroundColor: 'rgba(118 12 122 / 0.8)',
                    margin: '1rem',
                    padding: '1.3rem',
                  }}
                > {/* The Button component is rendered with the color, onClick, and style props. The color prop is set to 'inherit' to inherit the color from the parent element. The onClick prop is set to the handleShowSummary function, which shows the summary of the products. The style prop is set to an object with the fontWeight, borderRadius, backgroundColor, margin, and padding properties to style the button. */}
                  Resumen
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <div className={styles.productContainer}>
          {showSummary ? (
            <ProductSummary
              products={summaryProducts}
              onGoHome={handleGoHome}
            />  // The ProductSummary component is rendered with the products and onGoHome props. The products prop is set to the summaryProducts state variable, which holds the products in the summary. The onGoHome prop is set to the handleGoHome function, which hides the summary and shows the product list.
          ) : ( // The ProductList component is rendered with the products, selectedCategory, searchQuery, onQuantityChange, onUnitTypeChange, and onAddToSummary props. The products prop is set to the products state variable, which holds the list of products. The selectedCategory prop is set to the selectedCategory state variable, which holds the currently selected category. The searchQuery prop is set to the searchQuery state variable, which holds the search query entered by the user. The onQuantityChange prop is set to the handleQuantityChange function, which updates the quantity of a product. The onUnitTypeChange prop is set to the handleUnitTypeChange function, which updates the unit type of a product. The onAddToSummary prop is set to the handleAddToSummary function, which adds all products to the summary.
            <ProductList
              products={products}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onQuantityChange={handleQuantityChange}
              onUnitTypeChange={handleUnitTypeChange}
              onAddToSummary={handleAddToSummary}
            />
          )}
        </div>
      </main>
      <Box className={styles.arrowButton}>
        <Fab
          color="primary"
          aria-label="scroll back to top"
          className={styles.scrollTop}
          onClick={scrollTop}
          style={{ display: showScroll ? 'flex' : 'none' }}
        > {/* The Fab component is rendered with the color, aria-label, className, onClick, and style props. The color prop is set to 'primary' to use the primary color theme for the button. The aria-label prop is set to 'scroll back to top' to provide an accessible label for the button. The className prop is set to the scrollTop class from the App.module.css file to style the button. The onClick prop is set to the scrollTop function, which scrolls the page to the top. The style prop is set to an object with the display property set to 'flex' if the showScroll state variable is true, and 'none' if the showScroll state variable is false. */}
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </div>
  );
}

export default App;
