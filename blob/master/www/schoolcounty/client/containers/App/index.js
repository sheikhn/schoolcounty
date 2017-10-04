
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from '../../components/Home'


class App extends Component {
  render() {
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





export default connect(

)(App)
