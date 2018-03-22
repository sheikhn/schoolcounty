
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
              <section class="clerfix">
              <div class="container">
              <div class="row">
                {schoolList}
                <Filter setFilterParams={this.props.setFilter} filterParams={this.props.schools.schoolFilter} filter={this.props.schools.getFilter} />

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
