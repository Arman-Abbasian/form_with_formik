import { useFormik } from "formik";

const initialValues={name:"",email:"",password:""}
const onSubmit=(values)=>{
    console.log(values)
}
const validate=(values)=>{
    const error={};
    if(!values.name) error.name="name is required"
    if(!values.email) error.email="email is required"
    if(!values.password) error.password="password is required"
    return error
}
const Formik = () => {
    const formik=useFormik({initialValues,onSubmit,validate});
    return ( 
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" value={formik.values.name} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} name="name" />
                    {formik.errors.name && formik.touched.name && <p>{formik.errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" value={formik.values.email} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" />
                    {formik.errors.name && formik.touched.email && <p>{formik.errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="text" id="password" value={formik.values.password} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" />
                    {formik.errors.name && formik.touched.password && <p>{formik.errors.password}</p>}
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
     );
}
 
export default Formik;