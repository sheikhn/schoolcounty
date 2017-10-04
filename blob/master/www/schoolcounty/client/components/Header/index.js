
import React, { Component } from 'react'
import LogReg from '../LogReg/index'

import Navbar from './Navbar/index'


class Header extends Component {


  render() {
    return (
      <div>

        <Navbar/>

        <LogReg />

    </div>
    )
  }
}

export default Header
