import { useFormik } from "formik";
import * as Yup from 'yup';
import  Input  from "../common/Input";
import RadioButton from "../common/RadioButton";

const initialValues={name:"",email:"",phoneNumber:"",password:"",passwordConfirmation:"",gender:""}
const onSubmit=(values)=>{
    console.log(values);
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema=Yup.object({
    name:Yup.string().required('name is required').min(6,"min character is 6"),
    email:Yup.string().email('the input is not an email').required('email is required'),
    phoneNumber:Yup.string().email('the input is not an email').required('email is required'),
    phoneNumber: Yup.string().required("phone number is required").matches(phoneRegExp, 'Phone number is not valid'),
    password:Yup.string().required('password is required'),
    passwordConfirmation:Yup.string().required('password confirmation is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
    gender:Yup.string().required("please select your gender")
})

const genderOptions=[
    {id:1,label:"male",value:"male"},
    {id:2,label:"female",value:"female"}
]
const FormikAndYupCommon = () => {
    const formik=useFormik({initialValues,onSubmit,validationSchema,validateOnMount:true});
    console.log(formik.errors);
    console.log(formik.touched)
    console.log(formik.isValid);
    return ( 
        <div className="bg-green-500">
            <form onSubmit={formik.handleSubmit} className="container mx-auto max-w-md p-2 ">
                <div className="flex flex-col justify-center items-center">
                <Input name='name'  formik={formik} />
                <Input name='email'  formik={formik} />
                <Input name='phoneNumber' formik={formik} />
                <Input name='password' formik={formik} />
                <Input name='passwordConfirmation'  formik={formik} />
                <RadioButton options={genderOptions} formik={formik} name="gender" />
                <button disabled={!formik.isValid} className="py-2 px-4 bg-blue-500 rounded-md w-full" type="submit">submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default FormikAndYupCommon;