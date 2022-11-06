const CheckBox = ({options,name,formik}) => {
    return ( 
        <div className="flex gap-6">
            {options.map(item=>{
                return <div key={item.id}>
                        <input type="checkbox" id={item.value} name={name} value={item.value} checked={formik.values[name].includes(item.value)} onChange={formik.handleChange} />
                        <label htmlFor={item.value}>{item.label}</label>
                    </div>
        })}
        {formik.errors[name] && formik.touched[name] && <p className="text-red-600">{formik.errors[name]}</p>}
        </div>
     );
}
 
export default CheckBox;