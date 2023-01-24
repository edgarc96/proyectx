import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import Navigation from "./nav";

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route path="/products/:id" component={ProductPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/checkout" component={CheckoutPage} />
    </Router>
  );
}

export default App;
