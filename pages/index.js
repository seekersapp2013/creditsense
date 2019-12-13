/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React from 'react';
import {
  Flex, Box, Button,
} from 'rebass';

import { User, getConfig } from 'radiks';
import Style from '../styled/Style';
import Text from '../styled/typography';
import Customer from '../models/Customer';
// import Person from '../models/Person';

import Dashboard from '../components/dashboard';
import Customers from '../components/Customers';

class Home extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  state = {
    currentUser: null,
    customers: [],
  }

  static async getInitialProps() {
    return {
    };
  }



  async componentDidMount() {
    const { userSession } = getConfig();
    if (userSession.isUserSignedIn()) {
      const currentUser = userSession.loadUserData();
      this.setState({ currentUser });

      const customers = await Customer.fetchOwnList({
        sort: '-createdAt',
        limit: 10,
      }, { decrypt: false });
      console.log({customers});
      this.setState({customers});
    } else if (userSession.isSignInPending()) {
      const currentUser = await userSession.handlePendingSignIn();
      await User.createWithCurrentUser();
      this.setState({ currentUser });
    }
  }

  login = () => {
    const { userSession } = getConfig();
    userSession.redirectToSignIn();
  }

  logout = () => {
    const { userSession } = getConfig();
    userSession.signUserOut();
    this.setState({
      currentUser: null,
    });
  }

  render() {
    const { currentUser, customers } = this.state;
    console.log({customers})
    return (
      <>
      
      
            
            {/* <Text.h1 textAlign="center">Credit Sense</Text.h1> */}
            {currentUser ? (
              <>
                <Text.small textAlign="center" display="block">Logged in as
{' '}
                  {currentUser.username}
                  {'. '}
                  <a href="javascript:void(0)" onClick={this.logout}>Log Out</a>
                </Text.small>
                <Dashboard customers={customers} />
                <Customers customers={customers} />
              </>
            ) : (
              <>
              <Style></Style>
      <div className="bg-default"> 
        <div className="main-content">
          {/* Navbar */}
          <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
            <div className="container px-4">
              <a className="navbar-brand" href="./index.html">
                <img src="./assets/img/brand/white.png" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbar-collapse-main">
                {/* Collapse header */}
                <div className="navbar-collapse-header d-md-none">
                  <div className="row">
                    <div className="col-6 collapse-brand">
                      <a href="./index.html">
                        <img src="./assets/img/brand/blue.png" />
                      </a>
                    </div>
                    <div className="col-6 collapse-close">
                      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                        <span />
                        <span />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Navbar items */}
                {/* <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="./index.html">
                <i class="ni ni-planet"></i>
                <span class="nav-link-inner--text">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="register.html">
                <i class="ni ni-circle-08"></i>
                <span class="nav-link-inner--text">Register</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="login.html">
                <i class="ni ni-key-25"></i>
                <span class="nav-link-inner--text">Login</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="profile.html">
                <i class="ni ni-single-02"></i>
                <span class="nav-link-inner--text">Profile</span>
              </a>
            </li>
          </ul> */}
              </div>
            </div>
          </nav>
          {/* Header */}
          <div className="header bg-gradient-primary py-7 py-lg-8">
            <div className="container">
              <div className="header-body text-center mb-7">
                <div className="row justify-content-center">
                  <div className="col-lg-5 col-md-6">
                    {/* <h1 class="text-white">Welcome!</h1> */}
                    {/* <p class="text-lead text-light">Use these awesome forms to login or create new account in your project for free.</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon className="fill-default" points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </div>
          {/* Page content */}
          <div className="container mt--8 pb-5">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-7">
                <div className="card bg-secondary shadow border-0">
                  <div className="card-body px-lg-5 py-lg-5">
                            {/* Login content */}
                                     <Text.p textAlign="center">Log in with Blockstack to get started.
</Text.p>

                <Button mt={3} onClick={this.login} mx="auto" style={{ display: 'block' }}>Log In
 </Button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    {/* <a href="#" className="text-light"><small>Forgot password?</small></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="py-5">
            <div className="container">
              <div className="row align-items-center justify-content-xl-between">
                <div className="col-xl-6">
                  <div className="copyright text-center text-xl-left text-muted">
                    ©  <a href="./" className="font-weight-bold ml-1" target="_blank">Credit Sense</a>
                  </div>
                </div>
                <div className="col-xl-6">
                  <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                    <li className="nav-item">
                      <a href="./" className="nav-link" target="_blank">About Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
   

              </>
            )}
        
  
      </>
    );
  }
}

export default Home;
