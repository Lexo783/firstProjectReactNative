import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const Flex = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');
  const [error, setError] = useState(false);
  const isSamePassword = useMemo(() => {
    return passwordConfirm !== password;
  }, [password, passwordConfirm]);
  const confirmLogin = useCallback(() => {
    Alert.alert(
      'Hey There!',
      'Inscription enregistrée ' +
        lastName +
        ' ' +
        firstName +
        ' votre mot de passe est:  ' +
        password,
    );
  }, [firstName, lastName, password]);
  useEffect(() => {
    if (!password) {
      return;
    }
    password.length < 3 ? setError(true) : setError(false);
  }, [password]);
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.div, {flex: 1}]}>
        <Text style={{fontWeight: 'bold'}}>Inscription</Text>
        <Image
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Image.png',
          }}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'gray',
            borderRadius: 50,
          }}
          resizeMode="cover"
        />
      </View>
      <View
        style={[styles.div, {flex: 3, justifyContent: 'space-around'}]}
        keyboardType="numeric">
        <TextInput
          style={[styles.inputText]}
          placeholder={'Prénom'}
          keyboardType="default"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={[styles.inputText]}
          placeholder={'Nom'}
          keyboardType="default"
          value={lastName}
          onChangeText={setlastName}
        />
        <TextInput
          style={[
            styles.inputText,
            error && {borderStyle: 'solid', borderWidth: 1, borderColor: 'red'},
          ]}
          placeholder={'Mot de passe'}
          keyboardType="default"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={[
            styles.inputText,
            isSamePassword && {
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: 'red',
            },
          ]}
          placeholder={'Confirmation du mot de passe'}
          keyboardType="default"
          secureTextEntry={true}
          value={passwordConfirm}
          onChangeText={setpasswordConfirm}
        />
      </View>
      <View style={[styles.div, {flex: 1}]}>
        <TouchableOpacity
          style={{
            padding: 10,
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 10,
          }}
          onPress={() => confirmLogin()}>
          {<Text>Envoyer</Text>}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
  },
  div: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  inputText: {
    width: '100%',
    padding: 20,
    backgroundColor: '#A8A8A8',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: 3,
  },
});
export default Flex;
