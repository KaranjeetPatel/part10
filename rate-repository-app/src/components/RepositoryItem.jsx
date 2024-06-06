import React from 'react';
import { View, Image } from 'react-native';
import Text from './Text';
import { repositoryStyles } from './repositoryStyles'

const formatCount = (count) => {
  if (count >= 1000 ) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

const RepositoryItem = ({item}) => {
  const styles = repositoryStyles;
  
  return (
    <View testID='repositoryItem' style={styles.container}>
        <View style={styles.headlineInfoContainer}>
          <Image 
            style={styles.headlineImage}
            source={{ uri: item.ownerAvatarUrl }} />  
          <View style={styles.headlineTextContainer}>
            <Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
            <Text color='textSecondary'>{item.description}</Text>
            <View style={styles.languageContainer}>
              <Text style={styles.language}>{item.language}</Text>
            </View>
          </View>
        </View>
        <View style={styles.countsContainer}>
          <View style={styles.count}>
            <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.stargazersCount)}</Text>
            <Text style={{ textAlign: 'center' }}>Stars</Text>  
          </View>
          <View style={styles.count}>
            <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.forksCount)}</Text>
            <Text style={{ textAlign: 'center' }}>Forks</Text>  
          </View>
          <View style={styles.count}>
            <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.reviewCount)}</Text>
            <Text style={{ textAlign: 'center' }}>Reviews</Text>  
          </View>
          <View style={styles.count}>
            <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.ratingAverage)}</Text>
            <Text style={{ textAlign: 'center' }}>Rating</Text>  
          </View>
        </View>
    </View>
  )}

export default RepositoryItem;

/*
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    padding: 20,
    borderBottomWidth: 10,
    borderBottomColor: theme.colors.borderColor,
  },
  
  headlineInfoContainer: {
    flexDirection: 'row',
  },

  headlineImage: {
    width: 75,
    height: 75,
    borderRadius: theme.borderRadius.normal,
    marginRight: 20,
  },

  headlineTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  countsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  
  count: {
    textAlign: 'center',
    flex: 1,
  }, 
  
  languageContainer: {
    marginTop: 4,
    alignItems: 'flex-start',
  },
  
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textTertiary,
    borderRadius: theme.borderRadius.normal,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});

const formatCount = (count) => {
  if (count >= 1000 ) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

const RepositoryItem = ({item}) => 
    <View style={styles.container}>
      <View style={styles.headlineInfoContainer}>
        <Image 
          style={styles.headlineImage}
          source={{ uri: item.ownerAvatarUrl }} />  
        <View style={styles.headlineText}>
          <Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
          <Text color='textSecondary'>{item.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.countsContainer}>
        <View style={styles.count}>
          <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.stargazersCount)}</Text>
          <Text style={{ textAlign: 'center' }}>Stars</Text>  
        </View>
        <View style={styles.count}>
          <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.forksCount)}</Text>
          <Text style={{ textAlign: 'center' }}>Forks</Text>  
        </View>
        <View style={styles.count}>
          <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.reviewCount)}</Text>
          <Text style={{ textAlign: 'center' }}>Reviews</Text>  
        </View>
        <View style={styles.count}>
          <Text style={{ textAlign: 'center' }} fontWeight='bold'>{formatCount(item.ratingAverage)}</Text>
          <Text style={{ textAlign: 'center' }}>Rating</Text>  
        </View>
      </View>
    </View>

export default RepositoryItem;
*/