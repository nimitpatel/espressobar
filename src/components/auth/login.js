import React, { useState, useEffect } from 'react';

import StyledLogin from './styles/styledLogin';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { USER_LOGIN } from '../../constants/action.constants';

const Login = () => {
    let _password = '';
    let _email = '';
    let _errors = {
        password: '',
        email: '',
    }

    const [formError, setFormError] = useState('');
    const [redirect, setRedirect] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        const existingUser = JSON.parse(localStorage.getItem('user'));

        if(existingUser){
            setRedirect('/user');
        }
    },[]);

    const onBlurHandler = ({ target }) => {
        switch (target.name) {
            case "password":
                if (target.value.length === 0) {
                    _errors.password = 'Password cannot be empty';
                    break
                }
                _password = target.value;
                break;

            case "email":
                let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (pattern.test(target.value)) {
                    _email = target.value;
                    break;
                }
                else {
                    _errors.email = 'Invalid email';
                    break
                }
            default:
                break;
        }

    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        let validity = true;
        Object.values(_errors).map(element => {
            if (element.length > 0) {
                validity = false;
            }
        })

        if (_password.length === 0 ||
            _email.length === 0) {
            validity = false;
        }

        if (validity === false) {
            setFormError('Please provide valid information');
            return;
        }

        setFormError('');
        
        axios.post(
            'http://localhost:3000/signin',
            { "emailId": _email,
            "password": _password }

        ).then(response => {
            
            dispatch({
                type: USER_LOGIN,
                payload: response.data
            });
            localStorage.setItem("user", JSON.stringify(response.data));
            setRedirect('/user');
        }).catch(err => {
            if(err.message.includes('404')){
                setRedirect('/newuser');
            }
        });
    }

    if (redirect) {
        return <Redirect to={redirect} />
    }

    else {
        return (

            <StyledLogin>
                <div className="login-context">
                    <div>
                        <p>Login</p>
                        <p>
                            Welcome back! <br/>
                            Let’s get you started
                            with a cup of<br /> an awesome coffee!
                        </p>
                    </div>
                </div>
                <div className="login-form">
                    <form>
                        <p className="formError">{formError}</p>

                        <input type="email"
                            placeholder="email"
                            name="email"
                            onBlur={onBlurHandler}
                            required
                        />

                        <input type="password"
                            placeholder="password"
                            name="password"
                            onBlur={onBlurHandler}
                            required
                        />

                        <div className="contact-form-input">
                            <button onClick={onFormSubmit}>login</button>
                        </div>
                        <p className="new-user">new user?&nbsp;
                            <u>
                                <Link to="/signup">sign up</Link>
                            </u>
                        </p>
                    </form>
                </div>
            </StyledLogin >

        );
    }
}

export default Login;