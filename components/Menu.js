import React from 'react';
import Style from '../styled/Style';


export default class Menu extends React.Component {
  render() {
    return (

        <div>
                    <Style></Style>
        <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div className="container-fluid">
          {/* Toggler */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Brand */}
          <a className="navbar-brand pt-0" href="./index.html">
            <img src="https://digimatix2.herokuapp.com/assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
          </a>
          {/* User */}
          <ul className="nav align-items-center d-md-none">
            <li className="nav-item dropdown">
              <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ni ni-bell-55" />
              </a>
              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="./assets/img/theme/team-1-800x800.jpg
" />
                  </span>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="profile.html" className="dropdown-item">
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </a>
                <a href="profile.html" className="dropdown-item">
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </a>
                <a href="profile.html" className="dropdown-item">
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </a>
                <a href="profile.html" className="dropdown-item">
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="./index.html">
                    <img src="./assets/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-4 mb-3 d-md-none">
              <div className="input-group input-group-rounded input-group-merge">
                <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search" />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="fa fa-search" />
                  </div>
                </div>
              </div>
            </form>
            {/* Navigation */}
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className=" nav-link active " href="/"><img src="https://digimatix2.herokuapp.com/assets/img/icons/common/home.png"></img>&nbsp;  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="icons.html">
                  <i className="ni ni-planet text-blue" /> Icons
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="maps.html">
                  <i className="ni ni-pin-3 text-orange" /> Maps
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="profile.html">
                  <i className="ni ni-single-02 text-yellow" /> User profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="tables.html">
                  <i className="ni ni-bullet-list-67 text-red" /> Tables
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">
                  <i className="ni ni-key-25 text-info" /> Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="register.html">
                  <i className="ni ni-circle-08 text-pink" /> Register
                </a>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-3" />
            {/* Heading */}
            <h6 className="navbar-heading text-muted">Documentation</h6>
            {/* Navigation */}
            <ul className="navbar-nav mb-md-3">
              <li className="nav-item">
                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html">
                  <i className="ni ni-spaceship" /> Getting started
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html">
                  <i className="ni ni-palette" /> Foundation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html">
                  <i className="ni ni-ui-04" /> Components
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}
