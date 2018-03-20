
import React, { Component } from 'react'
import LogReg from '../LogReg/index'

import Navbar from './Navbar/index'


class Header extends Component {


  render() {
    return (

      <div>
     
      <div id="preloader" class="smooth-loader-wrapper">
        <div class="smooth-loader">
          <div class="loader1">
          <div class="loader-target">
            <div class="loader-target-main"></div>
            <div class="loader-target-inner"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-wrapper">

       <header id="pageTop" class="header">

      

      <div class="nav-wrapper navbarWhite">
   
        <nav id="menuBar" class="navbar navbar-default lightHeader animated " role="navigation">
          <div class="container">

           
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/">
                <div class="title" >
                  <p style={{padding: '10px',borderStyle: 'solid',color: '#2196f3',fontSize: '18px'}}>SchoolCounty</p>
                </div>
              </a>
            </div>

           
           
           
          </div>
        </nav>
      </div>
    </header>
    </div>
    </div>
    
    )
  }
}

export default Header
