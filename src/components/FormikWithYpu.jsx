import { useFormik } from "formik";
import * as Yup from 'yup';

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


const FormikWithYpu = () => {
    const formik=useFormik({initialValues,onSubmit,validationSchema,validateOnMount:true});
    console.log(formik.errors);
    console.log(formik.touched)
    console.log(formik.isValid)
    return ( 
        <div className="bg-green-500">
            <form onSubmit={formik.handleSubmit} className="container mx-auto max-w-md p-2 ">
                <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col gap-2 justify-center items-center w-full">
                    <label className="flex w-full" htmlFor="name">name</label>
                    <input className="w-full" type="text" id="name"  name="name" {...formik.getFieldProps("name")} />
                    {formik.errors.name && formik.touched.name && <p className="text-red-600">{formik.errors.name}</p>}
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-full">
                    <label className="flex w-full" htmlFor="email">email</label>
                    <input className="w-full" type="text" id="email" name="email" {...formik.getFieldProps("email")} />
                    {formik.errors.email && formik.touched.email && <p className="text-red-600">{formik.errors.email}</p>}
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-full">
                    <label className="flex w-full" htmlFor="phoneNumber">phoneNumber</label>
                    <input className="w-full" type="text" id="phoneNumber" name="phoneNumber" {...formik.getFieldProps("phoneNumber")} />
                    {formik.errors.phoneNumber && formik.touched.phoneNumber && <p className="text-red-600">{formik.errors.phoneNumber}</p>}
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-full">
                    <label className="flex w-full" htmlFor="password">password</label>
                    <input className="w-full" type="text" id="password"  name="password" {...formik.getFieldProps("password")} />
                    {formik.errors.password && formik.touched.password && <p className="text-red-600">{formik.errors.password}</p>}
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-full mb-5">
                    <label className="flex w-full" htmlFor="passwordConfirmation">password confirmation</label>
                    <input className="w-full" type="text" id="passwordConfirmation"  name="passwordConfirmation" {...formik.getFieldProps("passwordConfirmation")} />
                    {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && <p className="text-red-600">{formik.errors.passwordConfirmation}</p>}
                </div>
                <div className="flex gap-6">
                    <div>
                        <input type="radio" id="male" name="gender" value="male" checked={formik.values.gender==='male'} onChange={formik.handleChange} />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div>
                        <input type="radio" id="female" name="gender" value="female" checked={formik.values.gender==='female'} onChange={formik.handleChange} />
                        <label htmlFor="female">Female</label><br></br>
                    </div>
                    {formik.errors.gender && formik.touched.gender && <p className="text-red-600">{formik.errors.gender}</p>}
                </div>
                <button disabled={!formik.isValid} className="py-2 px-4 bg-blue-500 rounded-md w-full" type="submit">submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default FormikWithYpu;