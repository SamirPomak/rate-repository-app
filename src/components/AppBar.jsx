import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarPrimary,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('Pressed!')}>
        <Text fontWeight="bold" color="white">
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
