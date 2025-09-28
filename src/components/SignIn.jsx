import { useFormik } from 'formik';
import Text from './Text';
import { Pressable, TextInput } from 'react-native';
import * as yup from 'yup';
import { View } from 'react-native-web';

const styles = {
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0366d6',
    padding: 10,
    alignItems: 'center',
  },
  inputError: {
    borderWidth: '1',
    borderColor: '#d73a4a',
    marginBottom: 0,
  },
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // 10-8
  return (
    <>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={[
          styles.input,
          formik.touched.username &&
            formik.errors.username &&
            styles.inputError,
        ]}
      />
      {formik.touched.username && formik.errors.username ? (
        <View style={{ marginBottom: 10 }}>
          <Text color="red">{formik.errors.username}</Text>
        </View>
      ) : null}
      <TextInput
        secureTextEntry
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={[
          styles.input,
          formik.touched.password &&
            formik.errors.password &&
            styles.inputError,
        ]}
      />
      {formik.touched.password && formik.errors.password ? (
        <View style={{ marginBottom: 10 }}>
          <Text color="red">{formik.errors.password}</Text>
        </View>
      ) : null}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text color="white" fontWeight="bold">
          Sign In
        </Text>
      </Pressable>
    </>
  );
};

export default SignIn;
