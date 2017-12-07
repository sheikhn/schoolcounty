
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from '../../components/Home'

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
