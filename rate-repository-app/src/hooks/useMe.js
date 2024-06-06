import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = (includeReviews = false) => {
  console.log('includeReviews', includeReviews)
  const { data, error, loading } = useQuery(ME, 
    {
      fetchPolicy: 'cache-and-network',
      variables: { includeReviews }
    }
  );
  
  if (loading) {
    return { loading: true, error: null };
  }

  if (error) {
    return {loading: false, error };
  }

  const currentUser = data.me;
  const reviews = includeReviews ? data.me.reviews : null;
  
  console.log('useMe current user', currentUser)
  console.log('useMe reviews', reviews)
  
  return { loading: false, currentUser, reviews, error: null };
};

export default useMe;

