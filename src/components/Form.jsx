import { useState } from "react";


const Form = () => {
    const [form,setForm]=useState({name:"",email:"",password:""});
    const changeHandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
        console.log(form)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(form)
    }
    return ( 
        <div>
            <form>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" value={form.nameInput} onChange={changeHandler} name="name" />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" value={form.emailInput} onChange={changeHandler} name="email" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="text" id="password" value={form.passwordInput} onChange={changeHandler} name="password" />
                </div>
                <button type="submit" onClick={submitHandler}>submit</button>
            </form>
        </div>
     );
}
 
export default Form;