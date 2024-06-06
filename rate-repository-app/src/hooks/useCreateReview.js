import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  
  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    try {
      const { data } = await mutate({ 
        variables: {
          review: { ownerName, repositoryName, rating: Number(rating), text }}
      });
      console.log('useCreateReview review', data)
      return (data)

    } catch (e) {
      console.log('Sign-in error', e);
      throw e;
    }
    
  };

  return [createReview, result];
};

export default useCreateReview;