
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
/**components**/
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GoogleMapReact from 'google-map-react';
import Listingpage from "../../components/Listingpage/index";
import Filter from "../../components/Listingpage/Filter";
import SearchFilter from "../../components/Listingpage/SearchFilter"
import Search from "../../components/Home/Search"

/**Actions**/
import {getFilterStates, getFilterLevels,getSchoolsList,getFilterSyllabus,getFilterInfrastructure,getFilterActivities, setFilter} from '../../actions/schools'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

  class Listing extends Component {

    constructor(props) {
      super(props);
     // console.log(props);
    }

      componentWillMount(){
          //action to get schools data
          this.props.getSchools();
          this.props.getFilterStates();
          this.props.getFilterLevels();
          this.props.getFilterSyllabus();
          this.props.getFilterInfrastructure();
          this.props.getFilterActivities();
      }

    render() {

          let schoolList = null;
          if (this.props.schools.schoolList.fetched){
              schoolList = <Listingpage schools={this.props.schools.schoolList} history={this.props.history}/>;
          }

        return (
            <div>   
              <Header />
              <main class="cd-main-content" style={{top: '70px'}}>

              <SearchFilter setFilter={this.props.setFilter} schools={this.props.schools}/>
              
              <div class="col-md-12">
                  <div class="col-md-3">
                     <Filter setFilterParams={this.props.setFilter} filterParams={this.props.schools.schoolFilter}/>

                  </div>
                  <div class="col-md-9">

                  <section class="">
                    <div id="map">
                      <GoogleMapReact
                          api={'AIzaSyB-GPNJUs1UB3t-rQ8dQAd7BNAyDBYOCXQ'}
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
                    

                  </section>

                   {schoolList}

                  </div>
              </div>
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
            dispatch(getSchoolsList())
        },
        getFilterStates: () => {
          dispatch(getFilterStates());
        },
        getFilterLevels: () => {
          dispatch(getFilterLevels());
        },
        getFilterSyllabus: () => {
          dispatch(getFilterSyllabus());
        },
        getFilterInfrastructure: () => {
          dispatch(getFilterInfrastructure());
        },
        getFilterInfrastructure: () => {
          dispatch(getFilterInfrastructure());
        },
        getFilterActivities: () => {
          dispatch(getFilterActivities());
        },
        setFilter: (params) => {
            console.log(params);
          dispatch(setFilter(params));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Listing)
