import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  
  const signUp = async ({ username, password }) => {
    try {
      const { data } = await mutate({ 
        variables: {
          user: { username, password }}
      })
      return {data}
      ;
    } catch (e) {
      console.log('Sign-up error', e);
      throw e;
    }
    
  };

  return [signUp, result];
};

export default useSignUp;