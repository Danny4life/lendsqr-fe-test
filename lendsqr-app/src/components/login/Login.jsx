

import Logo from "../../logo/Logo";
import LogoSmall from "../../logo/LogoSmall";
import "./login.scss"

const Login = () => {
    return (  
        <div className="login">
            <section className="logo">
                <LogoSmall />
                <Logo />
            </section>
            <section className="login-container">
                <h1>IMAGE HERE</h1>
                <div>
                    <h1 className="login-header">Welcome!</h1>
                </div>
            </section>



        
        </div>
    );
}
 
export default Login;