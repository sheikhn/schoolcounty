import React, { Component } from 'react'

class Login extends Component {


  render() {
    return (
        
<div id="cd-login">
                <form class="cd-form">
                  <p class="fieldset">
                    <label class="image-replace cd-email" for="signin-email">E-mail</label>
                    <input class="full-width has-padding has-border" id="signin-email" type="email" placeholder="E-mail"/>
                      <span class="cd-error-message">Error message here!</span>
                  </p>

                  <p class="fieldset">
                    <label class="image-replace cd-password" for="signin-password">Password</label>
                    <input class="full-width has-padding has-border" id="signin-password" type="text"  placeholder="Password"/>
                      <a href="#0" class="hide-password">Hide</a>
                      <span class="cd-error-message">Error message here!</span>
                  </p>

                  <p class="fieldset">
                    <input type="checkbox" id="remember-me" checked />
                      <label for="remember-me">Remember me</label>
                  </p>

                  <p class="fieldset">
                    <input class="full-width" type="submit" value="Login"/>
                  </p>
                </form>

                <p class="cd-form-bottom-message"><a href="#0">Forgot your password?</a></p>

              </div>
              


             
    )
  }
}

export default Login
