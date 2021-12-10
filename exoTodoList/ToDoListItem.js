import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import stylesToDoListItem from './styles/ToDoListItem';
const ToDoListItem = props => {
  return (
    <View key={props.index.toString()} style={[stylesToDoListItem.container]}>
      <Text>{props.data}</Text>
      <TouchableOpacity
        style={[stylesToDoListItem.deleteButton]}
        onPress={props.delete}>
        <Text style={{color: 'white'}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoListItem;
