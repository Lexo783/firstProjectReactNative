import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import ToDoListItem from './ToDoListItem';
import toDoListScreen from './styles/ToDoListScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [];

const ToDoListScreen = ({navigation}) => {
  const [todoFilter, setTodoFilter] = useState('');
  const [todo, setTodo] = useState('');
  const [todoItems, setTodoItems] = useState(data);

  useEffect(() => {
    getData().then(value => {
      if (value === null) {
        setTodoItems('');
      } else {
        setTodoItems(value);
      }
    });
  }, [todoItems]);

  const handleTodo = useCallback(async () => {
    setTodoItems([...todoItems, todo]);
    await setData([...todoItems, todo]);
    setTodo('');
  }, [todo, todoItems]);

  const removeTodo = useCallback(
    index => {
      let copy = [...todoItems];
      getData().then(value => {
        const copyValue = [...value];
        copyValue.splice(index, 1);
        setData(copyValue);
      });
      copy.splice(index, 1);
      setTodoItems(copy);
    },
    [todoItems],
  );

  const dataFiltered = useMemo(() => {
    return todoItems === ''
      ? todoItems
      : todoItems.filter(o => o.includes(todoFilter));
  }, [todoFilter, todoItems]);

  const setData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('todoList', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('todoList');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <View style={[toDoListScreen.container]}>
        <TextInput
          style={[toDoListScreen.inputSearch]}
          placeholder={'cherche'}
          value={todoFilter}
          onChangeText={setTodoFilter}
        />

        <FlatList
          data={dataFiltered}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('Details', {
                    back: '< back',
                    data: item,
                  })
                }>
                <ToDoListItem
                  data={item}
                  index={index}
                  delete={() => removeTodo(index)}
                />
              </TouchableOpacity>
            );
          }}
        />
        <View style={[toDoListScreen.containerTodo]}>
          <TextInput
            style={[toDoListScreen.inputTodo]}
            placeholder={'À faire'}
            value={todo}
            onChangeText={setTodo}
          />
          <TouchableOpacity
            style={[toDoListScreen.buttonTodo]}
            onPress={handleTodo}>
            <Text
              style={{
                textAlign: 'center',
                padding: 6,
              }}>
              Ajouter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToDoListScreen;
