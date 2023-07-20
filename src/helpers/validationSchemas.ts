import * as yup from 'yup';

export const RegistrationResolver = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  street: yup.string().required('Street is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zip: yup
    .string()
    .required('Zip code is required')
    .matches(/^[0-9]+$/, 'Zip code must contain only digits')
    .min(5, 'Zip code must be exactly 5 digits')
    .max(5, 'Zip code must be exactly 5 digits'),
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(/[A-z]/, 'Password must contain at least 1 letter')
    .matches(/[0-9]/, 'Password must contain at least 1 number')
    .min(8, 'Password must be at least 8 characters long'),
});
