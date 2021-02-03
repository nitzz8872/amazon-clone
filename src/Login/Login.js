import React,{useState} from 'react'
import './Login.css'
import amazonlogo from "../Header/amazonlogo.jpg"
import { Link, useHistory } from "react-router-dom";
import { auth } from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); //this prevents refresh
        //login logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            // logged in, redirect to homepage
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };
    const register = event => {
        event.preventDefault(); //this prevents refresh
        //register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            // created a user and logged in, then redirect to homepage
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="amazon-logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHNzOV2IXGafJpyFN90bKmlaHnjXCbgF5Bg&usqp=CAU"
                    alt=""
                    />
            </Link>

            <div className="login-container">
            <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login-signin-button">Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login-register-button">Create a new fake Amazon account</button>
            </div>
        </div>
    )
}

export default Login
