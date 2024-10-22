import {
  addressType,
  loginType,
  resetPasswordType,
  SignupType,
  updateUserType,
  verifyType,
} from '../../types/types';

export const inputsfields = (data: SignupType) => {
  const upper = [
    {
      id: 1,
      name: 'name',
      value: data.name,
      title: 'Full Name',
      placeholder: 'Enter your name',
      marginTop: 37,
    },
    {
      id: 2,
      name: 'email',
      value: data.email,
      title: 'Email',
      placeholder: 'example@example.com',
      marginTop: 16,
    },
    {
      id: 3,
      name: 'mobileNumber',
      value: data.mobileNumber,
      title: 'Mobile Number',
      placeholder: '+ 123 4567890',
      marginTop: 16,
    },
  ];
  const lower = [
    {
      id: 4,
      name: 'password',
      value: data.password,
      title: 'Password',
      placeholder: 'password here',
      marginTop: 16,
    },
    {
      id: 5,
      name: 'confirmPassword',
      value: data.confirmPassword,
      title: 'Confirm Password',
      placeholder: 'password here',
      marginTop: 16,
    },
  ];
  return {upper, lower};
};

export const verifyInputs = (data: verifyType) => {
  return [
    {
      id: 1,
      name: 'email',
      value: data.email,
      title: 'Email',
      placeholder: 'example@example.com',
      marginTop: 0,
    },
    {
      id: 2,
      name: 'verificationCode',
      value: data.verificationCode,
      title: 'Verification Code here',
      placeholder: 'Code here',
      marginTop: 16,
    },
  ];
};

export const loginInputs = (data: loginType) => {
  return [
    {
      id: 1,
      name: 'email',
      value: data.email,
      title: 'Email',
      placeholder: 'example@example.com',
      marginTop: 0,
      eye: false,
    },
    {
      id: 2,
      name: 'password',
      value: data.password,
      eye: true,
      title: 'Password',
      placeholder: '* * * * * * * *',
      marginTop: 23,
    },
  ];
};

export const resetPasswordInputs = (data: resetPasswordType) => {
  return [
    {
      id: 1,
      name: 'resetCode',
      value: data.resetCode,
      title: 'Code',
      placeholder: 'Type Code here',
      marginTop: 52,
    },
    {
      id: 2,
      name: 'password',
      value: data.password,
      eye: true,
      title: 'Password',
      placeholder: '* * * * * * * *',
      marginTop: 16,
    },
    {
      id: 3,
      name: 'confirmPassword',
      value: data.confirmPassword,
      eye: true,
      title: 'Confirm Password',
      placeholder: '* * * * * * * *',
      marginTop: 16,
    },
  ];
};

export const addressInputs = (data: addressType) => {
  return [
    {
      id: 1,
      name: 'country',
      value: data.country,
      title: 'Country',
      placeholder: 'Enter Your Country',
      marginTop: 24,
    },
    {
      id: 2,
      name: 'state',
      value: data.state,
      title: 'State',
      placeholder: 'Enter your State',
      marginTop: 16,
    },
    {
      id: 3,
      name: 'city',
      value: data.city,
      title: 'City',
      placeholder: 'Enter your City',
      marginTop: 16,
    },
    {
      id: 4,
      name: 'postalCode',
      value: data.postalCode,
      title: 'Postal Code',
      placeholder: 'Enter your Postal Code',
      marginTop: 16,
    },
    {
      id: 5,
      name: 'street',
      value: data.street,
      title: 'Street',
      placeholder: 'Enter your Street',
      marginTop: 16,
    },
  ];
};

export const editProfileInputs = (data: updateUserType) => {
  return [
    {
      id: 1,
      name: 'name',
      value: data.name,
      title: 'Full Name',
      placeholder: 'Enter your name',
      marginTop: 35,
    },
    {
      id: 2,
      name: 'email',
      value: data.email,
      title: 'Email',
      placeholder: 'Enter your email',
      marginTop: 14,
    },
    {
      id: 3,
      name: 'mobileNumber',
      value: data.mobileNumber,
      title: 'Mobile Number',
      placeholder: '+92 123 2334456',
      marginTop: 14,
    },
  ];
};
