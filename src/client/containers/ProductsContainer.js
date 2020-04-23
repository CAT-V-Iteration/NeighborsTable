import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import * as actions from '../actions/actions';
import Home from '../components/Home';
import ProductsList from '../components/ProductsList';
import ProductForm from '../components/ProductForm';
import SellerForm from '../components/SellerForm';
import ShoppingList from '../components/ShoppingList';

const mapStateToProps = state => ({
  products: state.products.productsList,
  zip: state.products.zip,
})

const mapDispatchToProps = dispatch => ({
  getProducts: (zip) => dispatch(actions.getProducts(zip)),
  addProduct: (product, zip) => dispatch(actions.addProduct(product, zip)),
  addSeller: (seller) => dispatch(actions.addSeller(seller))
})

class ProductsContainer extends React.Component {

  render() {
    const { getProducts, addProduct, products, addSeller, zip } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home getProducts={getProducts}/>}/>
          <Route exact path="/new/seller" render={() => <SellerForm addSeller={addSeller}/>} />
          <Route exact path="/new/product" render={() => <ProductForm zip={zip} addProduct={addProduct}/>} />
          <Route exact path="/products" render={()=> <ProductsList zip={zip} getProducts={getProducts} products={products}/>} />
          <Route exact path="/list" render={()=> <ShoppingList />} />
        </Switch>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
