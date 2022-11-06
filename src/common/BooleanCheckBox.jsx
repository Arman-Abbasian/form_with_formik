const BooleanCheckBox = ({name,label,formik}) => {
    return ( 
        <div className="flex gap-6">
            <div>
                <input type="checkbox" id={name} name={name} value={formik.values[name]} checked={formik.values[name]} onChange={formik.handleChange} />
                <label htmlFor={name}>{label}</label>
            </div>
        {formik.errors[name] && formik.touched[name] && <p className="text-red-600">{formik.errors[name]}</p>}
        </div>
     );
}
 
export default BooleanCheckBox;