import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
const path = require('path');
import Cookies from 'js-cookie';

const ProductsList = ({ products, user_id, seller_id, logout, zip, getProducts }) => {
  zip = Cookies.get('zip');
  getProducts(zip);
  
  const renderProducts = () => {
    return products.map((product, i)=> {
      return <Product key={`product: ${i}`}{...product}/>
    })
  }

  const handleLogout = () => {
    // Invoke logout action
    logout();
  }
    return(
      <> 
        <nav style={styles.nav}>
          <div>
            <Link to='/' style={styles.navLinkHome}>
              <img src={path.join(__dirname, "/public/assets/NeighborsTableUC.png")}height="150"></img>
            </Link>
          </div>
          {/* ---------------- No: User, No: Seller ---------------- */}
          { !user_id ?
          <Link to='/login' style={styles.navLinkProduct}>Login / Signup</Link>
          : <Link onClick={handleLogout} style={styles.navLinkCart}>Logout</Link>
          }
          {/* ---------------- Yes: User, No: Seller ---------------- */}
          { user_id ?
          <Link to='/new/seller' style={styles.navLinkProduct}>Register as Seller</Link>
          : <div />
          }
          { user_id ?
          <Link to='/list' style={styles.navLinkCart}>Shopping List</Link>
          : <div />
          }
          {/* ---------------- Yes: User, Yes: Seller ---------------- */}
          { (seller_id && seller_id !== 'j:null') && user_id ?
          <Link to='/new/product' style={styles.navLinkProduct}>Add New Product</Link>
          : <div />
          }

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
