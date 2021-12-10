/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const App: () => Node = () => {
  return exo2();
};

const exo2 = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>
        <TextInput style={styles.input} placeholder={'Email'} />
        <TextInput style={styles.input} placeholder={'Mot de passe'} />
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Validé')}>
          <View style={styles.button}>
            <Text>Touch Here</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
