import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { Link } from 'react-router-dom'

import * as orderAction from '../../store/actions/burgerIndex'

import Button from '../Button'
import Input from '../Input'

import { required, length, email } from '../../util/validators'
import Auth from './Auth'

import GradBgBig from '../../images/grad_bg_big.png'
import LogRegBg from '../../images/logreg_bg.jpg'
import Logo from '../../images/logos.png'

const Login = (props) => {
    const [state, setState] = useState({
        loginForm: {
            email: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, email],
            },
            password: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 6 })],
            },
            formIsValid: false,
        },
    })

    const [message, setMessage] = useState(null)

    useEffect(() => {
        if (props.err) {
            setMessage({
                error: props.err.page === 'login' ? props.err.error : null,
            })
        } else if (props.tokenId) {
            props.history.push('/admin/dashboard')
            setMessage({
                success: 'Success',
            })
        }
    }, [props])

    const inputChangeHandler = (input, value) => {
        setState((prevState) => {
            let isValid = true
            for (const validator of prevState.loginForm[input].validators) {
                isValid = isValid && validator(value)
            }

            const updatedForm = {
                ...prevState.loginForm,
                [input]: {
                    ...prevState.loginForm[input],
                    valid: isValid,
                    value: value,
                    touched: true,
                },
            }
            let formIsValid = true
            for (const inputName in updatedForm) {
                if (
                    inputName !== 'formIsValid' &&
                    inputName !== '[object Object]'
                ) {
                    formIsValid = formIsValid && updatedForm[inputName].valid
                }
            }
            return {
                loginForm: updatedForm,
                formIsValid: formIsValid,
            }
        })
    }

    const inputBlurHandler = (input) => {}

    const handleLogin = (e) => {
        e.preventDefault()
        if (state.formIsValid) {
            props.onInitLogin(
                state.loginForm.email.value,
                state.loginForm.password.value
            )
        } else {
            setMessage({ error: 'Wrong Input, please check your entries' })
        }
    }

    return (
        <>
            {/* <Particles
                className='particles'
                params={{
                    particles: {
                        number: {
                            value: 20,
                        },
                    },
                }}
            />
            <Auth login message={message}>
                <form onSubmit={handleLogin}>
                    <Input
                        id='email'
                        label='E-Mail'
                        type='email'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('email')}
                        value={state.loginForm['email'].value}
                        valid={state.loginForm['email'].valid}
                        touched={state.loginForm['email'].touched}
                    />
                    <Input
                        id='password'
                        label='Password'
                        type='password'
                        control='input'
                        minLength={6}
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('password')}
                        value={state.loginForm['password'].value}
                        valid={state.loginForm['password'].valid}
                        touched={state.loginForm['password'].touched}
                    />
                    <div className='form-btn'>
                        <Button
                            design='raised'
                            type='submit'
                            loading={props.loading}
                        >
                            {props.loading ? 'Loading...' : 'Login'}
                        </Button>
                        <Link to='/forgot-password' className='form-btn__link'>
                            Forgot Password?
                        </Link>
                    </div>
                </form>
            </Auth> */}

            <div class='bodyWrap'>
                <div
                    class='logRegPage'
                    style={{
                        backgroundImage: `url(${GradBgBig}), url(${LogRegBg})`,
                    }}
                >
                    <div class='container'>
                        <div class='head'>
                            <div class='logo invisLink' style={{ opacity: 0 }}>
                                <img src={Logo} alt='logo' height='70px;' />
                                Robot 22 Trade
                                <Link to='/'>main</Link>
                            </div>
                        </div>

                        <div class='content'>
                            <div class='captionLight center'>Login</div>
                            <div class='wrap login'>
                                <form
                                    class='formLogin'
                                    method='post'
                                    name='mainform'
                                    onsubmit='return checkform()'
                                >
                                    <input
                                        type='hidden'
                                        name='form_id'
                                        value='15866293451389'
                                    />
                                    <input
                                        type='hidden'
                                        name='form_token'
                                        value='9ad9bf9b44b0633b580deabc9c079f47'
                                    />
                                    <input
                                        type='hidden'
                                        name='a'
                                        value='do_login'
                                    />
                                    <input
                                        type='hidden'
                                        name='follow'
                                        value=''
                                    />
                                    <input
                                        type='hidden'
                                        name='follow_id'
                                        value=''
                                    />

                                    <div class='item'>
                                        <div class='formBlockLight'>
                                            <label>Email Address:</label>
                                            <input
                                                type='text'
                                                name='username'
                                                value=''
                                                autofocus='autofocus'
                                            />
                                            <span class='icon-login'></span>
                                        </div>
                                        <div class='formBlockLight'>
                                            <label for='logPass'>
                                                Password:
                                            </label>
                                            <input
                                                type='password'
                                                name='password'
                                                value=''
                                            />
                                            <span class='icon-pass'></span>
                                        </div>
                                        <Link
                                            to='/forgot-password'
                                            class='passLink'
                                        >
                                            Forgot password?
                                        </Link>
                                        <button
                                            type='submit'
                                            class='btnFillDarkMd'
                                            name='post'
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div
                            class='bottomLine table full'
                            style={{ opacity: 0 }}
                        >
                            <p class='copy tCell middle left'>
                                © 2021 Robot44 Trade. All rights reserved.
                            </p>
                        </div>
                    </div>
                    {/* <div class='circleBg'>
                        <div class='circle'></div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        // loading:false,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitLogin: (email, password) =>
            dispatch(orderAction.initLogin(email, password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
