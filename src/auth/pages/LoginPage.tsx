import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "..";

export const LoginPage = () => {
    const { login } = useContext( AuthContext );
    const navigate = useNavigate();
    
    const onLogin = () => {
        login( 'Gary Soliz' );
        
        navigate( '/home', {
            replace: true
        })
    }
    
    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ onLogin }
            >
                Login
            </button>
        </div>
    )
}
