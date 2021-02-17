import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';

import Register from './src/screens/Register';
import Login from './src/screens/Login';


function App() {
  return (
    <View>
      <StatusBar />


      {/* <Login /> */}
      <Register />
    </View>
  )
}

export default App;