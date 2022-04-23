import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <Text
        style={{
          textAlign: 'center',
          color: '#1c8cfc',
          fontSize: 30,
          fontStyle: 'italic',
        }}>
        Hello World
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
