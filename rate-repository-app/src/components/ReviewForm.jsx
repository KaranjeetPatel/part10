import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
}; 

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.normal,
    paddingVertical: 20,
    margin: 20,
  },
  buttonText: {
    color: theme.colors.textTertiary,
    textAlign: 'center',
  }
});

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating must be between 0 and 100')
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating cannot exceed 100'),
  text: yup
    .string()

})

const CreateReviewForm = ({ onSubmit }) => {
  return (
  <View>
    <FormikTextInput name='ownerName' placeholder='Repository owner name' />
    <FormikTextInput name='repositoryName' placeholder='Repository name' />
    <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
    <FormikTextInput name='text' placeholder='Review' multiline rows={5} />
    <Pressable onPress={onSubmit} style={styles.button}>
      <Text style={styles.buttonText}>Create a Review</Text>
    </Pressable>
  </View>
  );
};

export const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
    {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
  
    const { ownerName, repositoryName, rating, text } = values;
      
    try {
      const data = await createReview({ ownerName, repositoryName, rating, text });
      console.log('review data', data.createReview.repositoryId);
      navigate(`/${data.createReview.repositoryId}`)
      
    } catch (e) {
      console.log(e);
    }
  }

  return <CreateReviewContainer onSubmit={onSubmit}/>
}

export default CreateReview;