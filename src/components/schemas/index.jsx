import  *  as Yup from 'yup';

export const SignupSchema = Yup.object({
    first_name : Yup.string().min(2).max(20).required('please enter your  first name'),
    last_name : Yup.string().min(2).max(20).required('please enter your  last name'),
    phone_number : Yup.number().required('please enter your phone number'),
    email : Yup.string().email().required('please enter your email'),
    username : Yup.string().min(2).max(20).required('please enter your username'),
    password : Yup.string().min(6).required('please enter your password')
});


export const loginSchema= Yup.object({
    email: Yup.string().email().required('email is required'),
    password: Yup.string().min(6).required('please enter password')
});