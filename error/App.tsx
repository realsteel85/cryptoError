import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import Zilliqa from './src/components/Zilliqa';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Torch" />
      <Zilliqa zilAddress="zil1q8uzhhwy3lp37rj7m5ej5gervsslu422fldlex" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
});
export default App;