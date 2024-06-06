import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  
  const { data, error, loading } = useQuery(GET_REPOSITORIES, 
    {
      variables: { orderBy, orderDirection, searchKeyword },
      fetchPolicy: 'cache-and-network'
    }
  );
  
  if (loading) {
    return { loading: true, repositories: null, error: null };
  }

  if (error) {
    return {loading: false, repositories: null, error };
  }
  const repositories = data.repositories;
  return { loading: false, repositories, error: null };
};

export default useRepositories;

