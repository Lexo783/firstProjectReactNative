import React from 'react';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import toDoListDetails from './styles/ToDoListDetails';
const ToDoListDetails = ({route, navigation}) => {
  const {back, data} = route.params;
  return (
    <SafeAreaView style={[toDoListDetails.container]}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>{back}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 8}}>
        <Text>{'todo:'}</Text>
        <Text style={{fontWeight: 'bold'}}>{data}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ToDoListDetails;
