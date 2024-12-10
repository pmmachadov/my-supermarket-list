import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styles from './App.module.css';
import CategoryMenu from './views/CategoryMenu';
import ProductList from './views/ProductList';
import ProductSummary from './views/ProductSummary';

const App = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState([]);
  const [summaryProducts, setSummaryProducts] = React.useState([]);

  const handleQuantityChange = (id, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const handleUnitTypeChange = (id, unitType) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, unitType } : product
      )
    );
  };

  const handleAddToSummary = (product) => {
    setSummaryProducts((prevSummaryProducts) => [...prevSummaryProducts, product]);
  };

  const handleResetProducts = () => {
    setProducts([]);
  };

  return (
    <Router>
      <div className={styles.appContainer}>
        <CategoryMenu
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onResetProducts={handleResetProducts}
        />
        <Switch>
          <Route path="/summary">
            <ProductSummary products={summaryProducts} onGoHome={() => { }} />
          </Route>
          <Route path="/">
            <ProductList
              products={products}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onQuantityChange={handleQuantityChange}
              onUnitTypeChange={handleUnitTypeChange}
              onAddToSummary={handleAddToSummary}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;