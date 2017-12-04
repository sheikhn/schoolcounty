import React, {Component} from 'react'
import { connect } from 'react-redux'
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Details from "../../components/Details/index";

import {getSchoolDetails} from '../../actions/schools';



class SchoolDetails extends Component{


	componentWillMount(){
          //action to get schools data
          let id =this.props.location.query.id
          console.log('SD',this.props.getSchoolDetail(id));
      
      }


    render(){
    	const {schooldetail} = this.props;
   
    	if (schooldetail.fetched){
    		return(

        		<div>

            		<Header/>

    				<Details schoolDetail={this.props.schooldetail}/>

    				<Footer/>

        		</div>

       	    )
		} else {
			return (<div></div>);
    	}
	}
}

function mapStateToProps(state) {
    return {
        schooldetail: state.schools.schoolDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSchoolDetail: (id) => {
            dispatch(getSchoolDetails(id));
        }
    }
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(SchoolDetails)
