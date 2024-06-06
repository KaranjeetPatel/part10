import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: theme.borderRadius.normal,
    borderColor: theme.colors.borderColor,
    padding: 10,
    margin: 10,
  },
  errorInput: {
    borderColor: theme.colors.error,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style, 
    styles.input,
    error && styles.errorInput
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;