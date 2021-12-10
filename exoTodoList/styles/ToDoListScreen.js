import {StyleSheet} from 'react-native';

const toDoListScreen = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
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
  inputSearch: {
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
  },
  inputTodo: {
    borderColor: 'lightgray',
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 4,
    borderRadius: 10,
    paddingLeft: 5,
    marginRight: 10,
  },
  buttonTodo: {
    padding: 6,
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#00e600',
  },
  containerTodo: {
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderStyle: 'solid',
    paddingTop: 5,
    width: '100%',
  },
});

export default toDoListScreen;
