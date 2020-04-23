import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class LoginPage extends React.Component {
  constructor (props) {
    super(props);
    this.defaultState = {
      toggle: 'login',
      username: '',
      password: '',
    }
    this.state = this.defaultState;
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    
    if (this.state.toggle === 'login') {
      this.props.login(username, password);
    }
    else {
      this.props.addUser(username, password);
    }
    this.setState(this.defaultState);
  }

  handleToggle = () => {
    const toggle = this.state.toggle === 'login' ? 'signup' : 'login';
    this.setState({
      ...this.state,
      toggle,
    })
  }


  render() {
    return (
      <div>
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

              {/* --------- Toggle Login/Signup --------- */}
              <h3 style={styles.h3}>
              {
                this.state.toggle === 'login' ?
                'Login' : 'Sign Up'
              }
              </h3>

              {/* -------------- Username -------------- */}
              <div style={styles.inputDiv}>
                <label>Username</label>
                <input 
                value={this.state.username}
                onChange={this.handleChange}
                style={styles.input}
                name='username'
                />
              </div>

              {/* -------------- Seller  -------------- */}
              <div style={styles.inputDiv}>
                <label>Password</label>
                <input 
                value={this.state.password}
                onChange={this.handleChange}
                style={styles.input}
                name='password'
                />
              </div>

              {/* --------- Toggle Login/Signup --------- */}
              <div>
                <a 
                  onClick={this.handleToggle}
                  style={styles.atag}
                >
                  {
                    this.state.toggle === 'login'
                    ? `Don't have an account? Sign up.`
                    : `Return to login.`
                  }
                </a>
              </div>
            </div> 
            <div style={styles.buttonDiv}>
              <Link to="/products">
                <button style={styles.back_button}type='submit'>Back</button>
              </Link>
                <button style={styles.button}type='submit'>
                {
                  this.state.toggle === 'login' ?
                  'Login' : 'Sign Up'
                }
                </button>
            </div>
          </ form>
        </div>
      </div>
    )
  }
}

export default LoginPage;

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

  },
  atag: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '150px',
    fontSize: '0.75rem',
    fontWeight: '500',
    borderRadius: '5px',
    padding: '8px 8px',
    cursor: 'pointer',
    margin: '2.5rem',
    border:'2px solid #3F9E4D',
    background: '#F9F9F9',
    color: 'black',
    opacity: '.9'
  },
  back_button: {
    minWidth: '150px',
    fontSize: '1.2rem',
    fontWeight: '500',
    borderRadius: '5px',
    padding: '8px 16px',
    cursor: 'pointer',
    margin: '2.5rem',
    background:'#EAEAEA',
    color: 'black',
    opacity: '.9'
  },
}
