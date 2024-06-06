import React from 'react';
import { View, Pressable, Linking, FlatList } from 'react-native';
import Text from './Text';
import { useParams } from 'react-router-native';
import useSingleRepository from '../hooks/useSingleRepository';
import RepositoryItem from './RepositoryItem';
import { repositoryStyles } from './repositoryStyles';
import ReviewItem from './ReviewItem';

const styles = repositoryStyles;
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  const handleOpenGitHub = () => {
    Linking.openURL(repository.url);
  }
  console.log('RepositoryInfo repository', repository)
  return (
    <View>
      <RepositoryItem item={repository}/>
      <Pressable onPress={handleOpenGitHub}>
        <Text style={styles.bigButton}>Open in GitHub</Text>
      </Pressable>
      <ItemSeparator/>
    </View>
  )
}

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { repository } = useSingleRepository(id);

  if (repository) {
    const reviews = repository.reviews.edges.map(edge => edge.node)
    
    return (
      <View>
          <>
            <FlatList
              data={reviews}
              renderItem={({ item }) => <ReviewItem review={item} />}
              keyExtractor={({ id }) => id}
              ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
              ItemSeparatorComponent={ItemSeparator}
            />
          </>
      </View>
    ) 
  }
};

export default SingleRepositoryView;