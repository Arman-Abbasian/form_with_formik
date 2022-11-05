const Input = ({name,type="text",formik}) => {
    return ( 
        <div className="flex flex-col gap-2 justify-center items-center w-full">
            <label className="flex w-full" htmlFor={name}>{name}</label>
            <input className="w-full" type={type} id={name}  name={name} {...formik.getFieldProps({name})} />
            {formik.errors[name] && formik.touched[name] && <p className="text-red-600">{formik.errors[name]}</p>}
        </div>
     );
}
 
export default Input;