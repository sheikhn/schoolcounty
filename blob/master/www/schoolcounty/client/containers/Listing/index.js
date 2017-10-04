
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
/**components**/
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GoogleMapReact from 'google-map-react';
import Listingpage from "../../components/Listingpage/index";
import Filter from "../../components/Listingpage/Filter";
/**Actions**/
import * as SchoolActions from '../../actions/schools'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

  class Listing extends Component {

      componentWillMount(){
          //action to get schools data
          this.props.getSchools();
          this.props.getFilterParams();
      }

    render() {


        return (
            <div>
              <Header />
              <main class="cd-main-content" style={{top: '50px'}}>



                <div class="cd-tab-filter-wrapper">
                  <div class="cd-tab-filter">
                    <ul class="cd-filters">
                      <li class="placeholder">
                        <a data-type="all" href="#0">All</a>
                      </li>
                      <li class="filter"><a class="selected" href="#0" data-type="all">All</a></li>
                      <li class="filter" data-filter=".color-1"><a href="#0" data-type="color-1">Distance</a></li>
                      <li class="filter" data-filter=".color-2"><a href="#0" data-type="color-2">Budget</a></li>
                      <li class="filter" data-filter=".color-3"><a href="#0" data-type="color-3">Ranking</a></li>
                    </ul>
                  </div>
                </div>

                <section class="cd-gallery">
                  <div id="map">
                    <GoogleMapReact
                        defaultCenter={{lat: 12.971599, lng: 77.594563}}
                        defaultZoom={10}
                    >
                      <AnyReactComponent
                          lat={12.971599}
                          lng={77.594563}
                          text={'Kreyser Avrora'}
                      />
                    </GoogleMapReact>
                  </div>
                  <ul>

                     <Listingpage schools={this.props.schools.schoolList}/>

                    <li class="mix">
                      <a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top" role="button" title="Click to return on the top page" data-toggle="tooltip" data-placement="left"><span class="glyphicon glyphicon-chevron-up"></span></a>

                    </li>
                    <li class="gap"></li>
                    <li class="gap"></li>
                    <li class="gap"></li>
                  </ul>

                  <div class="cd-fail-message">No results found</div>
                </section>

                <Filter filterParams={this.props.schools.schoolFilter}/>

                <a href="#0" class="cd-filter-trigger">Filters</a>
              </main>
              <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        schools: state.schools
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getSchools: () => {
            dispatch(SchoolActions.getSchoolsList())
        },
        getFilterParams: () => {
          dispatch(SchoolActions.getFilterParams());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Listing)
