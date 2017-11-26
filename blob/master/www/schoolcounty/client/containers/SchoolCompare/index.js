
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Comparepage from '../../components/Comparepage/index'

import {getCompareSchoolsList} from '../../actions/schools'


class SchoolCompare extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        //action to get schools data
        console.log(this.props.location.state.ids);
        this.props.getSchools(this.props.location.state.ids);
    }


    render() {
        const {compareSchoolList} = this.props;
       // console.log('comapre',this.props);
        if (!compareSchoolList.fetched){
             return (<div>
                 no data
             </div>)
        }

        return (
            <div>
                <Header />

                <Comparepage schoolUnits={compareSchoolList.list} />

                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        compareSchoolList: state.schools.schoolList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSchools: (selectedSchools) => {
            dispatch(getCompareSchoolsList(selectedSchools));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SchoolCompare)
