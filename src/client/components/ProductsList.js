import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
const path = require('path');

const ProductsList = ({ products }) => {
  if (!products) {
    console.log('no zip')
  } else console.log('zip')

  const renderProducts = () => {
    return products.map((product, i)=> {
      return <Product key={`product: ${i}`}{...product}/>
    })
  }
    return(
      <> 
        <nav style={styles.nav}>
          <div>
            <Link to='/' style={styles.navLinkHome}>
              <img src={path.join(__dirname, "/public/assets/NeighborsTableUC.png")}height="150"></img>
            </Link>
          </div>
          <Link to='/new/seller' style={styles.navLinkProduct}>Register as Seller</Link>
          <Link to='/new/product' style={styles.navLinkProduct}>Add New Product</Link>
          <Link to='/list' style={styles.navLinkCart}>Shopping List</Link>
        </nav>
        <div style={styles.container}>{renderProducts()}</div>
      </>
    )
}

export default ProductsList;

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
    gridGap: '1rem',
    margin: '10rem 2rem'
  },
  nav: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    color: '#EAEAEA',
    backgroundColor: '#3F9E4D',
    minHeight: '15vh',
    width: '100%',
    padding: '0 2rem',
    marginTop: '-.5rem',
    marginLeft: '-.5rem',
    opacity: '.9',
    position: 'fixed',
    top: '0'
  },
  navLinkHome: {
    fontFamily: 'Varela Round',
    fontSize: '2rem',
    color: '#EAEAEA',
    fontWeight: '900',
    textDecoration: 'none',
  },
  navLinkProduct: {
    fontFamily: 'Varela Round',
    fontSize: '1.2rem',
    color: 'aliceblue',
    fontWeight: '900',
    textDecoration: 'none',
    marginLeft: '4rem',
  },
  navLinkCart: {
    fontFamily: 'Varela Round',
    fontSize: '1.2rem',
    color: 'aliceblue',
    fontWeight: '900',
    textDecoration: 'none',
    marginLeft: '15rem',
  }
}
