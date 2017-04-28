'use strict'
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

class Home extends Component {
	render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{flex:1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});



module.exports = Home
