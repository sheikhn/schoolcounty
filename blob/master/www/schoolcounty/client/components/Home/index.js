
import React,{Component} from 'react'
import { connect } from 'react-redux'
import Search from "./Search/index";
import {setFilter} from '../../actions/schools'
class Home extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

             
                         <Search setFilter={this.props.setFilter} schools={this.props.schools}/>
               


            
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
        setFilter: (params) => {
            console.log(params);
            dispatch(setFilter(params));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)