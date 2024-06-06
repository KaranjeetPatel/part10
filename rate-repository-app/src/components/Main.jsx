import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepositoryView from './SingleRepositoryView';
import ReviewForm from './ReviewForm';
import SignUpForm from './SignUpForm';
import ReviewsView from './ReviewsView';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/SignIn' element={<SignIn />} /> 
        <Route path='*' element={<Navigate to="/" replace />} /> 
        <Route path='/:id' element={<SingleRepositoryView />} />
        <Route path='/CreateReview' element={<ReviewForm />} />
        <Route path='/SignUp' element={<SignUpForm />} />
        <Route path='/UserReviews' element={<ReviewsView />} />
      </Routes>
    </View>

  );
};

export default Main;