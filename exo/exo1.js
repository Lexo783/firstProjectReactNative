import {SafeAreaView, StyleSheet, View} from 'react-native';

const exo1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View
          style={{
            flex: 1,
            backgroundColor: 'darkorange',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View style={[styles.box]} />
          <View style={[styles.box]} />
          <View style={[styles.box]} />
        </View>
        <View style={{flex: 3, backgroundColor: 'green'}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'yellow',
  },
});
