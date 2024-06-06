import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import useMe from '../hooks/useMe';
import useSignOut from '../hooks/useSignOut';
import { useNavigate } from 'react-router-native';

const topPadding = Constants.statusBarHeight;
const bottomPadding = topPadding / 3

const styles = StyleSheet.create({
  appBarStyle: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: bottomPadding,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
  },
  text: {
    color: theme.colors.textTertiary,
    fontWeight: theme.fontWeights.bold,
    marginHorizontal: 20
  }

});

const AppBar = () => {
  const { currentUser } = useMe();
  const navigate = useNavigate();
  console.log('AppBar current User', currentUser);
  const [signOut] = useSignOut();
  
  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/SignIn');
    } catch (error) {
      console.error('Sign-out error', error);
    }
  };

  return (
    <View style={styles.appBarStyle}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {currentUser ? (
          <>
            <Link to="/CreateReview">
              <Text style={styles.text}>Create a Review</Text>
            </Link>
            <Link to="/UserReviews">
              <Text style={styles.text}>My reviews</Text>
            </Link>
            <Text style={styles.text} onPress={handleSignOut}>Sign Out</Text>
          </>
        ) : (
          <>
            <Link to="/SignIn">
              <Text style={styles.text}>Sign In</Text>
            </Link>
            <Link to="/SignUp">
              <Text style={styles.text}>Sign Up</Text>
            </Link>
          </>
        )}
      </ScrollView>
    </View>
      
  );
};

export default AppBar;
