import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import * as actions from '../actions/actions';
import Home from '../components/Home';
import ProductsList from '../components/ProductsList';
import ProductForm from '../components/ProductForm';
import SellerForm from '../components/SellerForm';
import ShoppingList from '../components/ShoppingList';
import LoginPage from '../components/LoginPage';

const mapStateToProps = state => ({
  products: state.products.productsList,
  zip: state.products.zip,
  user_id: state.products.user_id,
  seller_id: state.products.seller_id
})

const mapDispatchToProps = dispatch => ({
  getProducts: (zip) => dispatch(actions.getProducts(zip)),
  addProduct: (product, zip) => dispatch(actions.addProduct(product, zip)),
  addSeller: (seller) => dispatch(actions.addSeller(seller))
})

class ProductsContainer extends React.Component {

  render() {
    const { user_id, seller_id, getProducts, addProduct, products, addSeller, zip } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home getProducts={getProducts}/>}/>
          <Route exact path="/new/seller" render={() => <SellerForm addSeller={addSeller}/>} />
          <Route exact path="/new/product" render={() => <ProductForm zip={zip} addProduct={addProduct}/>} />
          <Route exact path="/products" render={()=> <ProductsList user_id={user_id} seller_id={seller_id} zip={zip} getProducts={getProducts} products={products}/>} />
          <Route exact path="/list" render={()=> <ShoppingList />} />
          <Route exact path="/login" render={()=> <LoginPage />} />
        </Switch>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
