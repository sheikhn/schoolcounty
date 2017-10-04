import React, { Component } from 'react'

class Signup extends Component{

	render(){

		return(

 <div id="cd-signup">

                <div class="cd-form row">
                  <div class="col-xs-12 col-md-3 col-sm-2">
                    <a href="#" class="btn btn-lg btn-block omb_btn-facebook" style={{background: '#3b5998'}}>
                      <i class="fa fa-facebook visible-xs"></i>
                      <span>Facebook</span>
                    </a>
                  </div>
                  <div class="col-xs-12 col-md-3 col-sm-2">
                    <a href="#" class="btn btn-lg btn-block omb_btn-twitter" style={{background: '#00aced'}}>
                      <i class="fa fa-twitter visible-xs"></i>
                      <span>Twitter</span>
                    </a>
                  </div>
                  <div class="col-xs-12 col-md-3 col-sm-2">
                    <a href="#" class="btn btn-lg btn-block omb_btn-google" style={{background: '#c32f10'}}>
                      <i class="fa fa-google-plus visible-xs"></i>
                      <span>Google+</span>
                    </a>
                  </div>
                  <div class="col-xs-12 col-md-3 col-sm-2">
                    <a href="#" class="btn btn-lg btn-block omb_btn-linkedin" style={{background: '#a4c639'}}>
                      <i class="fa fa-linkedin-square visible-xs"></i>
                      <span>Linkedin</span>
                    </a>
                  </div>
                </div>

                <form class="cd-form">
                  <p class="fieldset">
                    <label class="image-replace cd-username" for="signup-username">Username</label>
                    <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="Username"/>
                      <span class="cd-error-message">Error message here!</span>
                  </p>

                  <p class="fieldset">
                    <label class="image-replace cd-email" for="signup-email">E-mail</label>
                    <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail"/>
                      <span class="cd-error-message">Error message here!</span>
                  </p>

                  <p class="fieldset">
                    <label class="image-replace cd-password" for="signup-password">Password</label>
                    <input class="full-width has-padding has-border" id="signup-password" type="text"  placeholder="Password"/>
                      <a href="#0" class="hide-password">Hide</a>
                      <span class="cd-error-message">Error message here!</span>
                  </p>

                  <p class="fieldset">
                    <input type="checkbox" id="accept-terms"/>
                      <label for="accept-terms">I agree to the <a href="#0">Terms & Conditions</a></label>
                  </p>

                  <p class="fieldset">
                    <input class="full-width has-padding" type="submit" value="Create account"/>
                  </p>
                </form>

              </div>


			)
	}
}


export default Signup
