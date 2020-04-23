import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class SellerForm extends React.Component {
  constructor () {
    super();
    this.defaultState = {
      name: '',
      email: '',
      phone: '',
      about: '',
      zip: '',
    }
    this.state = this.defaultState;
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addSeller(this.state);
    this.setState(this.defaultState);
  }


  render() {
    return (
      <div>=
        <nav style={styles.nav}>
          <div>
            <Link to='/' style={styles.navLinkHome}>
              <img src="../../../public/assets/NeighborsTableUC.png" height="150"></img>
            </Link>
          </div>
        </nav>
        <div style={styles.formContainer} className="formContainer">
          <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <div style={styles.subFormDiv}>

              <h3 style={styles.h3}>Seller Description</h3>

              {/* -------------- Seller Name -------------- */}
              <div style={styles.inputDiv}>
                <label>Name</label>
                <input 
                value={this.state.name}
                onChange={this.handleChange}
                style={styles.input}
                name='name'
                />
              </div>

              {/* -------------- Seller Email -------------- */}
              <div style={styles.inputDiv}>
                <label>Email</label>
                <input 
                value={this.state.email}
                onChange={this.handleChange}
                style={styles.input}
                name='email'
                />
              </div>

              {/* -------------- Seller Phone -------------- */}
              <div style={styles.inputDiv}>
                <label>Phone</label>
                <input 
                value={this.state.phone} 
                onChange={this.handleChange} 
                style={styles.input} 
                name='phone'
                />
              </div>

              {/* -------------- Seller About -------------- */}
              <div style={styles.inputDiv}>
                <label>About</label>
                <input 
                value={this.state.about}
                onChange={this.handleChange}
                style={styles.input}
                name='about'
                />
              </div>

              {/* -------------- Seller Zip -------------- */}
              <div style={styles.inputDiv}>
                <label>Zip</label>
                <input 
                value={this.state.zip}
                onChange={this.handleChange}
                style={styles.input}
                name='zip'
                />
              </div>

            </div> 
            <div style={styles.buttonDiv}>
              <Link to="/products">
                <button style={styles.button}type='submit'>Back</button>
              </Link>
                <button style={styles.button}type='submit'>Submit</button>
            </div>
          </ form>
        </div>
      </div>
    )
  }
}

export default SellerForm;

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '10rem',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '10rem',
  },
  input: {
    minWidth: '200px',
    fontSize: '1rem',
    marginLeft: '2rem',
    color: 'grey',
  },
  button: {
    minWidth: '150px',
    fontSize: '1.2rem',
    fontWeight: '500',
    borderRadius: '5px',
    padding: '8px 16px',
    cursor: 'pointer',
    margin: '2.5rem',
    background:'#3F9E4D',
    color: 'aliceblue',
    opacity: '.9'
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
  inputDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '.5rem'
  },
  subFormDiv: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
    padding: '1rem',
    marginTop: '2rem',
    borderRadius: '8px',
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    paddingBottom: '2rem',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  h3: {
    textAlign: 'center',

  }
}
