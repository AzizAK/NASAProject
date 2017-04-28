'use-strict'

import React, { Component } from 'react'
import Navigation from './Navigator'

function Setup(): ReactClass<{}> {
  class Root extends Component {
    constructor(){
      super()
      this.state = {

      }
    }


    render() {
      return (
        <Navigation initialRoute={{ident: "Home"}} />
    	)
    }

  }

  return Root
}

module.exports = Setup
