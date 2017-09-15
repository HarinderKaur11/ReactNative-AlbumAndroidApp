//import lib
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


//create a Component:js fn that eturns some jsx
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//render it to the device
AppRegistry.registerComponent('albums', () => App);
//one component per file
//src contains my code
