

const SelectOptions = ({options,name,formik}) => {
    return ( 
        <div className="flex flex-col gap-2 justify-center items-center w-full">
            <label className="flex w-full" htmlFor={`${name}`}>{`${name}`}</label>
            <select name={name} id={name} {...formik.getFieldProps({name})}>
                {options.map(item=>{
                    return <option key={item.id} value={item.value}>{item.label}</option>
                })}
            </select>
            {formik.errors[name] && formik.touched[name] && <p className="text-red-600">{formik.errors[name]}</p>}
        </div>
     );
}
 
export default SelectOptions;