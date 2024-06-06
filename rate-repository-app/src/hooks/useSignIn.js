import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  
  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({ 
        variables: {
          credentials: { username, password }}
      });
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
      return data;
    } catch (e) {
      console.log('Sign-in error', e);
      throw e;
    }
    
  };

  return [signIn, result];
};

export default useSignIn;

/*
import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  
  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({ 
        variables: {
          credentials: { username, password }}
      });
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
      return data;
    } catch (e) {
      console.log('Sign-in error', e);
      throw e;
    }
    
  };

  return [signIn, result];
};

export default useSignIn;
*/