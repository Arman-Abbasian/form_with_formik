import { useFormik } from "formik";
import * as Yup from 'yup';
import BooleanCheckBox from "../common/BooleanCheckBox";
import CheckBox from "../common/CheckBox";
import CheckboxToggle from "../common/CheckboxToggle";
import  Input  from "../common/Input";
import RadioButton from "../common/RadioButton";
import SelectOptions from "../common/SelectOptions";

const initialValues={name:"",email:"",phoneNumber:"",password:"",passwordConfirmation:"",gender:"",nationality:"",interests:[],terms:false,termToggle:false}
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
    gender:Yup.string().required("please select your gender"),
    nationality:Yup.string().required("please select your nationality"),
    interests:Yup.array().required("please select a option").min(1),
    terms:Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.'),
    termToggle:Yup.boolean()
})

const genderOptions=[
    {id:1,label:"male",value:"male"},
    {id:2,label:"female",value:"female"}
];
const nationalityOptions=[
    {id:0,label:"select a country",value:""},
    {id:1,label:"Iran",value:"IR"},
    {id:2,label:"Germany",value:"GR"},
    {id:3,label:"France",value:"FR"}
];
const interestsOptions=[
    {id:1,label:"React",value:"React"},
    {id:2,label:"Veu",value:"Veu"},
    {id:3,label:"Angular",value:"Angular"}
];
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
                <SelectOptions options={nationalityOptions} name="nationality" formik={formik} />
                <CheckBox options={interestsOptions} name="interests" formik={formik} />
                <BooleanCheckBox name="terms" label="I am agree with the website's laws" formik={formik} />
                <CheckboxToggle name="termToggle" label="form toggle" formik={formik} />
                <button disabled={!formik.isValid} className="py-2 px-4 bg-blue-500 rounded-md w-full" type="submit">submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default FormikAndYupCommon;