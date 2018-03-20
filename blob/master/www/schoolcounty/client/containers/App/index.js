
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from '../../components/Home'
import Categories from '../../components/Home/Categories/index';

import {getSchoolsList, setFilter} from '../../actions/schools'

class App extends Component {

    constructor(props) {
      super(props);
    }

    componentWillMount(){
          //action to get schools data
          //this.props.getSchools();
      }


  render() {
    const { todos, actions, children } = this.props
    return (
        <div>
        <Header />


        <Home schools={this.props.schools} setFilter={this.props.setFilter} />




<section class="clearfix interestArea">
  <div class="container">
    <div class="page-header text-center">
      <h2>What are You Interested in? <small>Explore and connect with best schools</small></h2>
    </div>
    <div class="row">
      <div class="col-sm-4 col-xs-12">
      </div>
      <div class="col-sm-4 col-xs-12">
        <a href="all-business.html" class="interestContent">
          <span>
            <i class="icon-listy icon-more"></i>
            Coming Soon
          </span>
        </a>
      </div>
      <div class="col-sm-4 col-xs-12">
      </div>
    </div>
  </div>
</section>


<section class="clearfix thingsArea">
  <div class="container">
    <div class="page-header text-center">
      <h2>Popular Schools Near You <small>This are some of most popular listing</small></h2>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div id="thubmnailSlider" class="carousel slide thumbnailCarousel">

          <ol class="carousel-indicators">
            <li data-target="#thubmnailSlider" data-slide-to="0" class="active"></li>
            <li data-target="#thubmnailSlider" data-slide-to="1"></li>
            <li data-target="#thubmnailSlider" data-slide-to="2"></li>
            <li data-target="#thubmnailSlider" data-slide-to="3"></li>
            <li data-target="#thubmnailSlider" data-slide-to="4"></li>
            <li data-target="#thubmnailSlider" data-slide-to="5"></li>
            <li data-target="#thubmnailSlider" data-slide-to="6"></li>
            <li data-target="#thubmnailSlider" data-slide-to="7"></li>
          </ol>

         
          <div class="carousel-inner">
            <div class="item row active">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="thingsBox">
                  <div class="thingsImage">
                    <img src="./assets/img/school1.jpg" alt="Image things" />
                    <div class="thingsMask">
                      <ul class="list-inline rating">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      </ul>
                      <a href="listing-details-left.html"><h2>Bangalore Education Society <i class="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                      <p>Bangalore</p>
                    </div>
                  </div>
                  <div class="thingsCaption ">
                    <ul class="list-inline captionItem">
                      <li><i class="fa fa-heart-o" aria-hidden="true"></i> 8 k</li>
                      <li><a href="category-list-full.html">More</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="item row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="thingsBox">
                  <div class="thingsImage">
                    <img src="./assets/img/school2.jpg" alt="Image things" />
                    <div class="thingsMask">
                      <ul class="list-inline rating">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                      </ul>
                      <a href="listing-details-left.html"><h2>Carmel High School</h2></a>
                      <p>Bangalore</p>
                    </div>
                  </div>
                  <div class="thingsCaption ">
                    <ul class="list-inline captionItem">
                      <li><i class="fa fa-heart-o" aria-hidden="true"></i> 9.2 k</li>
                      <li><a href="category-grid-full.html">More</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="item row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="thingsBox">
                  <div class="thingsImage">
                    <img src="./assets/img/school3.jpg" alt="Image things" />
                    <div class="thingsMask">
                      <ul class="list-inline rating">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      </ul>
                      <a href="listing-details-left.html"><h2>Delhi Public School <i class="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                      <p>Bangalore</p>
                    </div>
                  </div>
                  <div class="thingsCaption ">
                    <ul class="list-inline captionItem">
                      <li><i class="fa fa-heart-o" aria-hidden="true"></i> 5k</li>
                      <li><a href="category-grid-full.html">More</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="item row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="thingsBox">
                  <div class="thingsImage">
                    <img src="./assets/img/school4.jpg" alt="Image things" />
                    <div class="thingsMask">
                      <ul class="list-inline rating">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      </ul>
                      <a href="listing-details-left.html"><h2>Wisdom School</h2></a>
                      <p>Bangalore</p>
                    </div>
                  </div>
                  <div class="thingsCaption ">
                    <ul class="list-inline captionItem">
                      <li><i class="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                      <li><a href="category-grid.html"> More</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="thingsBox ">
                  <div class="thingsImage">
                    <img src="./assets/img/school1.jpg" alt="Image things" />
                    <div class="thingsMask">
                      <ul class="list-inline rating">
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      </ul>
                      <a href="listing-details-left.html"><h2>K.V H.A.L <i class="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                      <p>Bangalore</p>
                    </div>
                  </div>
                  <div class="thingsCaption ">
                    <ul class="list-inline captionItem">
                      <li><i class="fa fa-heart-o" aria-hidden="true"></i> 15 k</li>
                      <li><a href="category-list-full.html">More</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="left carousel-control" href="#thubmnailSlider" data-slide="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
          <a class="right carousel-control" href="#thubmnailSlider" data-slide="next"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>



<section class="clearfix countUpSection">
  <div class="container">
    <div class="page-header text-center">
      <h2>Why SchoolCounty?</h2>
    </div>
    <div class="row">
      <div class="col-sm-3 col-xs-12">
        <div class="text-center countItem">
          <div class="counter">40</div>
          <div class="counterInfo bg-color-1">Syllabus</div>
        </div>
      </div>
      <div class="col-sm-3 col-xs-12">
        <div class="text-center countItem">
          <div class="counter">1200</div>
          <div class="counterInfo bg-color-2">Courses</div>
        </div>
      </div>
      <div class="col-sm-3 col-xs-12">
        <div class="text-center countItem">
          <div class="counter">18</div>
          <div class="counterInfo bg-color-3">Cities</div>
        </div>
      </div>
      <div class="col-sm-3 col-xs-12">
        <div class="text-center countItem">
          <div class="counter">220</div>
          <div class="counterInfo bg-color-4">Schools</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="btnArea text-center">
          <a href="#" class="btn btn-primary">Get it now</a>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="clearfix worksArea">
  <div class="container">
    <div class="page-header text-center">
      <h2>How it Works? <small>This are some of most popular listing</small></h2>
    </div>
    <div class="row">
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail text-center worksContent">
          <img src="./assets/img/works-1.png" alt="Image works" />
          <div class="caption">
            <a href="how-it-works.html"><h3>Find what you want</h3></a>
            <p>sample data</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail text-center worksContent">
          <img src="./assets/img/works-2.png" alt="Image works" />
          <div class="caption">
            <a href="how-it-works.html"><h3>Review & Plan your school</h3></a>
            <p>sample data</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail text-center worksContent">
          <img src="./assets/img/works-3.png" alt="Image works" />
          <div class="caption">
            <a href="how-it-works.html"><h3>Explore Location</h3></a>
            <p>sample data</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="btnArea text-center"><a href="#" class="btn btn-primary">Watch it now <i class="fa fa-play-circle" aria-hidden="true"></i></a></div>
      </div>
    </div>
  </div>
</section>


<section class="clearfix articlesArea">
  <div class="container">
    <div class="page-header text-center">
      <h2>Articles <small>Browse latest schools from our blog </small></h2>
    </div>
    <div class="row">
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail articleContent">
          <a href="blog-details.html"><img src="./assets/img/school1.jpg" style={{height:'200px'}} alt="Image articles" class="img-responsive" /></a>
          <div class="caption">
            <h4>Jan 22, 2018 by <a href="#">Jno Deo</a></h4>
            <h3><a href="blog-details.html">article1</a></h3>
            <p>sample data.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail articleContent">
          <a href="blog-details.html"><img src="./assets/img/school2.jpg" style={{height:'200px'}} alt="Image articles" class="img-responsive" /></a>
          <div class="caption">
            <h4>jan 20, 2018 by <a href="#">Adam Smith</a></h4>
            <h3><a href="blog-details.html">article2</a></h3>
            <p>sample data.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12">
        <div class="thumbnail articleContent">
          <a href="blog-details.html"><img src="./assets/img/school3.jpg" style={{height:'200px'}} alt="Image articles" class="img-responsive" /></a>
          <div class="caption">
            <h4>Jan 10, 2018 by <a href="#">Kathy Brown</a></h4>
            <h3><a href="blog-details.html">article3</a></h3>
            <p>sample data.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        <Footer/>
        </div>

    )
  }
}

function mapStateToProps(state) {
    return {
        schools: state.schools.schoolList
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getSchools: () => {
            dispatch(getSchoolsList())
        },
        setFilter: (params) => {
            dispatch(setFilter(params))
        }
    }
}





export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
