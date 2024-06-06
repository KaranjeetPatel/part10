import useMe from '../hooks/useMe'
import ReviewItem from './ReviewItem'
import { View, FlatList } from 'react-native';
import { repositoryStyles } from './repositoryStyles';

const styles = repositoryStyles;
const ItemSeparator = () => <View style={styles.separator} />;

const ReviewsView = () => {
  const { currentUser, reviews } = useMe(true)
  console.log('RV current user', currentUser)

  const reviewsData = reviews ? reviews.edges.map(edge => edge.node) : null;
  console.log('RV reviews data', reviewsData);

  return (
    <View>
        <>
          <FlatList
            data={reviewsData}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
          />
        </>
    </View>
  ) 

}



export default ReviewsView;