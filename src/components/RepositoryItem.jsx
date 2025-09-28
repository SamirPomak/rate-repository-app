import { StyleSheet } from 'react-native';
import { Image, Text, View } from 'react-native-web';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginBottom: 10,
  },
  languageTag: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.languageTagBackground,
    color: theme.colors.white,
    padding: 4,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 4,
    marginBottom: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  statItem: {
    alignItems: 'center',
  },
  statCount: {
    fontWeight: 'bold',
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{ uri: repository.ownerAvatarUrl }}
          style={styles.avatar}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
            {repository.fullName}
          </Text>
          <Text style={{ color: '#586069', marginTop: 4 }}>
            {repository.description}
          </Text>
          <Text style={styles.languageTag}>{repository.language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{repository.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{repository.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{repository.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{repository.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
