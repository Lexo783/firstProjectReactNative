import {StyleSheet} from 'react-native';

const toDoListItem = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'lightgray',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 10,
  },
});

export default toDoListItem;
