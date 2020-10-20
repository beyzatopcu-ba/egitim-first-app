/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from "react-native";
import Home from "./src/Components/Home";
import HomeFunction from "./src/Components/Home/HomeFunction"

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#363431"/>
      <HomeFunction />
    </>
  );
};

export default App;
