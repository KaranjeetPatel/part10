import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
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
  username: yup
    .string()
    .min(5, 'Username must be between 5 and 30 characters')
    .max(30, 'Username must be between 5 and 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be between 5 and 50 characters')
    .max(50, 'Password must be between 5 and 50 characters')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Confirmation must match password")
    .required('Password confirmation is required')
})

const CreateSignUpForm = ({ onSubmit }) => {
  return (
  <View>
    <FormikTextInput name='username' placeholder='Username' />
    <FormikTextInput name='password' placeholder='Password' secureTextEntry={true}/>
    <FormikTextInput name='passwordConfirm' placeholder='Password confirmation' secureTextEntry={true}/>
    <Pressable onPress={onSubmit} style={styles.button}>
      <Text style={styles.buttonText}>Sign up</Text>
    </Pressable>
  </View>
  );
};

export const CreateSignUpContainer = ({ onSubmit }) => {
  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
    {({ handleSubmit }) => <CreateSignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log('values', values)  
    try {
    await signUp({ username, password });
      await signIn({ username, password })
      navigate(`/`)
    } catch (e) {
      console.log(e);
    }
  }

  return <CreateSignUpContainer onSubmit={onSubmit}/>
}

export default SignUp;