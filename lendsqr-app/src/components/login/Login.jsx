import { useState } from "react";
import Logo from "../../logo/Logo";
import LogoSmall from "../../logo/LogoSmall";
import FormInput from "../form/FormInput";

import "./login.scss"

const Login = () => {

    const [values, setValues] = useState({
        email : "",
        password : "",
    });

    const inputs = [
        {
            id : 1,
            name : "email",
            type : "email",
            placeholder : "Email",
            errorMessage : "It should be a valid email address!",
            required : true,
        },

        {
            id : 2,
            name : "password",
            type : "password",
            placeholder : "Password",
            errorMessage : "Password should be 8-20 characters and includes atleast 1 letter, 1 number, and 1 special character",
            pattern :`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },    
    ]

    const onChange = (e) => {
        setValues({...values, [e.target.name] : e.target.value});
        console.log(values);
    }

    return (   
        <div className="login">
            <section className="logo">
                <LogoSmall />
                <Logo />
            </section>
            <section className="login-container">
                <h1 className="login-img">IMAGE HERE</h1>
                <div>
                    <h1 className="login-header">Welcome!</h1>
                    <h4 className="login-detail">Enter details to login.</h4>
                    <form>
                       
                        {inputs.map((input)=> (
                             <FormInput key={input.id} {...input} values={values[input.name]} 
                             onChange={onChange}/>
                        ))}
                        <span>Forget Password?</span>
                        <button>LOG IN</button>

                    </form>
                    
                </div>
                
            </section>
        </div>
    );
}
 
export default Login;