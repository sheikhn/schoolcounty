import React, { Component } from 'react'

import Login from './Login'
import Signup from "./Signup/index";
import Resetpassword from "./Resetpassword/index";


class LogReg extends Component {


  render() {
    return (
    	 <div class="cd-user-modal " >
            <div class="cd-user-modal-container">
              <ul class="cd-switcher">
                <li><a href="#0">Sign in</a></li>
                <li><a href="#0">New account</a></li>
              </ul>

              <Login />

              <Signup/>

              <Resetpassword/>

            </div>
          </div>
        
    )
  }
}

export default LogReg
