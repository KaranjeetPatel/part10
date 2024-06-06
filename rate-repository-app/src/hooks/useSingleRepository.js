import { useQuery } from '@apollo/client';
import { SINGLE_REPOSITORY  } from '../graphql/queries';

const useSingleRepository = (id) => {
  const { data, error, loading } = useQuery(SINGLE_REPOSITORY, 
    {
      variables: { id },
      fetchPolicy: 'cache-and-network'
    }
  );

  if (loading) {
    return { loading: true, repository: null, error: null };
  }

  if (error || !data) {
    return {loading: false, repository: null, error: error || new Error('no data')};
  }
  
  const repository = data.repository;
  return { loading: false, repository, error: null };
};

export default useSingleRepository; 