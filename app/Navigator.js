'use strict'
import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native'
import Home from './screens/Home'

class AppNavigator extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }
    switch(route.ident) {
      case "Home":
        return (
          <Home
            {...globalNavigatorProps} />
        )
      }
    }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="Navigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.PushFromRight })} />
    )
  }

}

const styles = StyleSheet.create({

  navigatorStyles: {
    flex:1
  }

})

module.exports = AppNavigator
