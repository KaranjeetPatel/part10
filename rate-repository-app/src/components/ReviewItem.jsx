import React from 'react';
import { View } from 'react-native';
import Text from './Text';
import { repositoryStyles } from './repositoryStyles';

const styles = repositoryStyles;

const ReviewItem = ({ review }) => {
  const date = (new Date(review.createdAt)).toLocaleDateString('en-GB')
  
  return (
    <View style={styles.container}>
      <View style={styles.headlineInfoContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
        <View style={styles.headlineTextContainer}>
          <Text fontWeight='bold' fontSize='subheading'>{review.repository.fullName}</Text>
          <Text color='textSecondary'>{date}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  )
}


export default ReviewItem;