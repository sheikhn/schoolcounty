
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from '../../components/Home'

import {getSchoolsList} from '../../actions/schools'

class App extends Component {

    constructor(props) {
      super(props);
    }

    componentWillMount(){
          //action to get schools data
          this.props.getSchools();
      }


  render() {
    console.log('home',this.props.schools.schoolList);
    const { todos, actions, children } = this.props
    return (
        <body>
        <Header />


        <Home />


        <Footer/>
        </body>

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
        }
    }
}





export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
