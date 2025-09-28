import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';
import { ScrollView } from 'react-native-web';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarPrimary,
    paddingBottom: 15,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  link: {
    marginRight: 15,
    textDecorationLine: 'none',
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" component={Pressable} style={styles.link}>
          <Text fontWeight="bold" color="white">
            Repositories
          </Text>
        </Link>
        <Link to="/signin" component={Pressable} style={styles.link}>
          <Text fontWeight="bold" color="white">
            Sign In
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
