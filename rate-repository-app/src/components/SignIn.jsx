import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
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
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
})

const SignInForm = ({ onSubmit }) => {
  return (
  <View>
    <FormikTextInput name='username' placeholder='Username' />
    <FormikTextInput name='password' placeholder='Password' secureTextEntry={true}/>
    <Pressable onPress={onSubmit} style={styles.button}>
      <Text style={styles.buttonText}>Sign in</Text>
    </Pressable>
  </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
    {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
  
    const { username, password } = values;
      
    try {
      await signIn({ username, password })
      navigate(`/`)
    } catch (e) {
      console.log(e);
    }
  }

  return <SignInContainer onSubmit={onSubmit}/>
}

export default SignIn;

/*pre container
import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
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
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
})

const SignInForm = ({ onSubmit }) => {
  return (
  <View>
    <FormikTextInput name='username' placeholder='Username' />
    <FormikTextInput name='password' placeholder='Password' secureTextEntry={true}/>
    <Pressable onPress={onSubmit} style={styles.button}>
      <Text style={styles.buttonText}>Sign in</Text>
    </Pressable>
  </View>
  );
};

  const SignIn = () => {
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
    
      const { username, password } = values;
        
      try {
        const data = await signIn({ username, password });
        console.log('signIn data', data);
        console.log('accessToken', data.authenticate.accessToken);
      } catch (e) {
        console.log(e);
      }
    }

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn;
*/