import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const {Zilliqa} = require("@zilliqa-js/zilliqa");
const zilliqa = new Zilliqa("https://api.zilliqa.com");
interface Props {
  zilAddress: string;
}
const Header: React.FC<Props> = ({zilAddress}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{zilAddress}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
export default Header;