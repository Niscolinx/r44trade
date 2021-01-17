import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import {AiFillPhone} from 'react-icons/ai'

import * as orderAction from '../../store/actions/burgerIndex'
import Input from '../Input'
import Button from '../Button'
import { required, length, email } from '../../util/validators'
import Auth from './Auth'

import GradBgBig from '../../images/grad_bg_big.png'
import LogRegBg from '../../images/logreg_bg.jpg'
import Logo from '../../images/logos.png'

const Signup = (props) => {
    const [state, setState] = useState({
        signupForm: {
            fullname: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 6 })],
            },
            username: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 3 })],
            },
            email: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, email],
            },
            confirmEmail: {
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
            confirmPassword: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 6 })],
            },
            secretQuestion: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 6 })],
            },
            secretAnswer: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 6 })],
            },
            bitcoinAccount: {
                value: '',
                valid: false,
                touched: false,
                validators: [length({ min: 26 })],
            },
            ethereumAccount: {
                value: '',
                valid: false,
                touched: false,
                validators: [length({ min: 40 })],
            },

            formValid: false,
        },
    })

    const [checked, setChecked] = useState(false)
    const [message, setMessage] = useState(null)

    useEffect(() => {
        if (props.err) {
            setMessage({
                error: props.err.page === 'signup' ? props.err.error : null,
            })
        } else if (props.tokenId) {
            setMessage({
                success: 'Success',
            })
        }
    }, [props])

    const inputChangeHandler = (input, value) => {
        setState((prevState) => {
            let isValid = true
            for (const validator of prevState.signupForm[input].validators) {
                const emailValue = prevState.signupForm.email.value
                const passwordValue = prevState.signupForm.password.value

                if (input === 'confirmEmail') {
                    if (emailValue !== value) {
                        isValid = false
                    } else {
                        isValid = true
                    }
                }
                if (input === 'confirmPassword') {
                    if (passwordValue !== value) {
                        isValid = false
                    } else {
                        isValid = true
                    }
                }

                isValid = isValid && validator(value)
            }
            const updatedForm = {
                ...prevState.signupForm,
                [input]: {
                    ...prevState.signupForm[input],
                    valid: isValid,
                    value: value,
                    touched: true,
                },
            }
            let formIsValid = true
            for (const inputName in updatedForm) {
                if (
                    inputName !== 'formValid' &&
                    inputName !== '[object Object]' &&
                    inputName !== 'bitcoinAccount' &&
                    inputName !== 'ethereumAccount'
                ) {
                    formIsValid = formIsValid && updatedForm[inputName].valid
                }
            }
            return {
                signupForm: updatedForm,
                formValid: formIsValid,
            }
        })
    }

    const inputBlurHandler = (input) => {}

    const checkboxHandler = (id, isChecked) => {
        setChecked(isChecked)
    }

    const handleSignup = (e) => {
        e.preventDefault()
        if (state.formValid && checked) {
            props.onInitSignup(state)
        } else {
            setMessage({ error: 'Wrong Input, please check your entries' })
        }
    }

    if (props.redirectToLoginPage) {
        props.history.push(props.redirectToLoginPage)
    }

    return (
        <>
            {/* <Particles
                className='particles'
                // style={{
                //     background: 'red',
                //     zIndex: -1,
                //     width: '100%',
                //     position: 'absolute',
                //     // left: 0,
                //     // top: 0,
                //     // right: 0,
                //     // bottom: 0,
                // }}
                 params={{
                particles: {
        number: {
            value: 70,
                    },
    },
               }}
            />
            <Auth message={message}>
                <form onSubmit={handleSignup} className='form__box'>
                    <div className='form-1'>
                        <h3 className='heading-3 form__heading'>
                            Personal Information
                        </h3>
                        <Input
                            id='fullname'
                            label='Fullname'
                            type='text'
                            control='input'
                            minLength={6}
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler.bind('fullname')}
                            value={state.signupForm['fullname'].value}
                            valid={state.signupForm['fullname'].valid}
                            touched={state.signupForm['fullname'].touched}
                        />
                        <Input
                            id='username'
                            label='Username'
                            type='text'
                            control='input'
                            minLength={3}
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler.bind('username')}
                            value={state.signupForm['username'].value}
                            valid={state.signupForm['username'].valid}
                            touched={state.signupForm['username'].touched}
                        />

                        <Input
                            id='email'
                            label='E-Mail'
                            type='email'
                            control='input'
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler.bind('email')}
                            value={state.signupForm['email'].value}
                            valid={state.signupForm['email'].valid}
                            touched={state.signupForm['email'].touched}
                        />
                        <Input
                            id='confirmEmail'
                            label='Confirm E-Mail'
                            type='email'
                            control='input'
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler.bind('confirmEmail')}
                            value={state.signupForm['confirmEmail'].value}
                            valid={state.signupForm['confirmEmail'].valid}
                            touched={state.signupForm['confirmEmail'].touched}
                        />
                    </div>
                    <div className='form-2'>
                        <h3 className='heading-3 form__heading'>
                            Account Information
                        </h3>

                        <Input
                            id='password'
                            label='Password'
                            type='password'
                            control='input'
                            minLength={6}
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler.bind('password')}
                            value={state.signupForm['password'].value}
                            valid={state.signupForm['password'].valid}
                            touched={state.signupForm['password'].touched}
                        />
                        <Input
                            id='confirmPassword'
                            label='confirm Password'
                            type='password'
                            control='input'
                            minLength={6}
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler.bind('confirmPassword')}
                            value={state.signupForm['confirmPassword'].value}
                            valid={state.signupForm['confirmPassword'].valid}
                            touched={
                                state.signupForm['confirmPassword'].touched
                            }
                        />
                        <Input
                            id='secretQuestion'
                            label='Secret Question'
                            type='text'
                            control='input'
                            minLength={6}
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler.bind('secretQuestion')}
                            value={state.signupForm['secretQuestion'].value}
                            valid={state.signupForm['secretQuestion'].valid}
                            touched={state.signupForm['secretQuestion'].touched}
                        />
                        <Input
                            id='secretAnswer'
                            label='Secret Answer'
                            type='text'
                            control='input'
                            minLength={6}
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler.bind('secretAnswer')}
                            value={state.signupForm['secretAnswer'].value}
                            valid={state.signupForm['secretAnswer'].valid}
                            touched={state.signupForm['secretAnswer'].touched}
                        />
                    </div>
                    <div className='form-3'>
                        <h3 className='heading-3 form__heading'>
                            Currency Information
                        </h3>

                        <Input
                            id='bitcoinAccount'
                            label='Bitcoin Account'
                            type='text'
                            control='input'
                            minLength={26}
                            placeholder='optional'
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler.bind('bitcoinAccount')}
                            value={state.signupForm['bitcoinAccount'].value}
                            valid={state.signupForm['bitcoinAccount'].valid}
                            touched={state.signupForm['bitcoinAccount'].touched}
                        />
                        <Input
                            id='ethereumAccount'
                            label='Ethereum Account'
                            type='ethereumAccount'
                            control='input'
                            placeholder='optional'
                            minLength={40}
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler.bind('ethereumAccount')}
                            value={state.signupForm['ethereumAccount'].value}
                            valid={state.signupForm['ethereumAccount'].valid}
                            touched={
                                state.signupForm['ethereumAccount'].touched
                            }
                        />
                    </div>

                    <div className='form-btn'>
                        <Input
                            id='signupCheckbox'
                            label='checkbox'
                            type='checkbox'
                            control='checkbox'
                            onChange={checkboxHandler}
                        />
                        <Button
                            design='raised'
                            type='submit'
                            loading={props.loading}
                        >
                            {props.loading ? 'Loading...' : 'Signup'}
                        </Button>
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
                    </div>

                    <div class='content'>
                        <div class='captionLight center'>REGISTRATION</div>
                        <div class='wrap'>
                            <Auth message={message}>
                                <form
                                    onSubmit={handleSignup}
                                    name='regform'
                                    style={{
                                        marginTop: '45px',
                                        padding: '5rem',
                                    }}
                                >
                                    <div class='row'>
                                        <div class='item col4'>
                                            <div class='formBlockLight'>
                                                <label for='regLogin'>
                                                    First Name:*
                                                </label>
                                                <input
                                                    type='text'
                                                    name='fname'
                                                    value=''
                                                />
                                                <span class='icon-login'></span>
                                            </div>

                                            <div class='formBlockLight'>
                                                <label for='regLogin'>
                                                    Last Name:*
                                                </label>
                                                <input
                                                    type='text'
                                                    name='lname'
                                                    value=''
                                                />
                                                <span class='icon-login'></span>
                                            </div>
                                            <div class='formBlockLight'>
                                                <label for='regLogin'>
                                                    Last Name:*
                                                </label>
                                                <Input
                                                    id='fullname'
                                                    type='text'
                                                    control='input'
                                                    minLength={3}
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'fullname'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'fullname'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'fullname'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'fullname'
                                                        ].touched
                                                    }
                                                />
                                                <span class='icon-login'>
                                                    <AiFillPhone class='icon-auth'/>
                                                </span>
                                            </div>

                                            <div
                                                class='formBlockLight'
                                                id='select_payment_mode'
                                            >
                                                <label for='regLogin'>
                                                    Select Payment Mode:
                                                </label>
                                                <select
                                                    class='form-control input--squared input--dark signup__select'
                                                    name='payment_mode'
                                                    id='payment_mode'
                                                >
                                                    <option value='0'>
                                                        Select Payment Mode
                                                    </option>
                                                    <option value='btc'>
                                                        Bitcoin Wallet Address
                                                    </option>
                                                    <option value='eth'>
                                                        Ethereum Wallet Address
                                                    </option>
                                                </select>
                                                <span class='icon-wallet'></span>
                                            </div>

                                            <div
                                                class='formBlockLight'
                                                id='select_payment_mode2'
                                                style={{ display: 'none' }}
                                            >
                                                <label for='regLogin'>
                                                    Select Payment Mode:
                                                </label>
                                                <select
                                                    class='form-control input--squared input--dark signup__select'
                                                    name='payment_mode2'
                                                    id='payment_mode2'
                                                >
                                                    <option value='0'>
                                                        Select Payment Mode
                                                    </option>
                                                    <option value='btc'>
                                                        Bitcoin Wallet Address
                                                    </option>
                                                    <option value='eth'>
                                                        Ethereum Wallet Address
                                                    </option>
                                                    <option value='bank'>
                                                        Bank Transfer
                                                    </option>
                                                </select>
                                                <span class='icon-wallet'></span>
                                            </div>

                                            <div
                                                class='formBlockLight'
                                                id='btc'
                                                style={{ display: 'none' }}
                                            >
                                                <br />
                                                <label for='regLogin'>
                                                    Bitcoin Wallet Adress:
                                                </label>
                                                <input
                                                    type='text'
                                                    name='btc'
                                                    value=''
                                                    placeholder=''
                                                />
                                                <span class='icon-wallet'></span>
                                            </div>

                                            <div
                                                class='formBlockLight'
                                                id='bank_name'
                                                style={{ display: 'none' }}
                                            >
                                                <label for='regLogin'>
                                                    Bank Name:
                                                </label>
                                                <input
                                                    type='text'
                                                    name='bank_name'
                                                    value=''
                                                    placeholder='Zenith Bank'
                                                />
                                                <span class='icon-wallet'></span>
                                            </div>
                                        </div>

                                        <div class='item col4'>
                                            <div class='formBlockLight'>
                                                <label for='regName'>
                                                    Mobile No:
                                                </label>
                                                <input
                                                    type='number'
                                                    name='phone'
                                                    value=''
                                                />
                                                <span class='icon-phone'></span>
                                            </div>

                                            <div class='formBlockLight'>
                                                <label for='regName'>
                                                    Country:
                                                </label>
                                                <select
                                                    class='form-control input--squared input--dark signup__select'
                                                    name='country'
                                                    id='country'
                                                >
                                                    <option value='AF'>
                                                        -Select Country-
                                                    </option>
                                                    <option value='AF'>
                                                        Afghanistan
                                                    </option>

                                                    <option value='ZW'>
                                                        Zimbabwe
                                                    </option>
                                                </select>
                                                <span class='icon-location'></span>
                                            </div>

                                            <div
                                                class='formBlockLight'
                                                id='eth'
                                                style={{ display: 'none' }}
                                            >
                                                <label for='regLogin'>
                                                    Ethereum Wallet Address:
                                                </label>
                                                <input
                                                    type='text'
                                                    name='eth'
                                                    value=''
                                                    placeholder=' '
                                                />
                                                <span class='icon-wallet'></span>
                                            </div>

                                            <div
                                                class='formBlockLight'
                                                id='account_name'
                                                style={{ display: 'none' }}
                                            >
                                                <label for='regLogin'>
                                                    Account Name:
                                                </label>
                                                <input
                                                    type='text'
                                                    name='acc_name'
                                                    value=''
                                                    placeholder='John Doe'
                                                />
                                                <span class='icon-wallet'></span>
                                            </div>

                                            <div class='agree'>
                                                <input
                                                    name='agree'
                                                    value='1'
                                                    type='checkbox'
                                                    id='regCheck'
                                                />
                                                <label for='regCheck'>
                                                    I agree{' '}
                                                    <a href='#'>
                                                        Terms and conditions
                                                    </a>
                                                </label>
                                            </div>
                                            {/* 
                                        <input
                                            type='submit'
                                            value='Submit'
                                            class='btnFillDarkMd'
                                            name='post'
                                        /> */}
                                            <input
                                                design='raised'
                                                type='submit'
                                                value={
                                                    props.loading
                                                        ? 'Loading...'
                                                        : 'Signup'
                                                }
                                                name='post'
                                                loading={props.loading}
                                                class='btnFillDarkMd'
                                            />
                                        </div>

                                        <div class='item col4'>
                                            <div class='formBlockLight'>
                                                <label for='invName'>
                                                    Referral:
                                                </label>
                                                <input
                                                    type='text'
                                                    name='referral'
                                                />
                                                <span class='icon-login'></span>
                                            </div>

                                            <div class='formBlockLight'>
                                                <label for='regMail'>
                                                    E-mail:
                                                </label>
                                                <input
                                                    type='text'
                                                    name='email'
                                                    value=''
                                                    required=''
                                                />
                                                <span class='icon-mail'></span>
                                            </div>

                                            <div class='formBlockLight'>
                                                <label for='regPass'>
                                                    Password:
                                                </label>
                                                <input
                                                    type='password'
                                                    name='password'
                                                    value=''
                                                    required=''
                                                />
                                                <span class='icon-pass'></span>
                                            </div>

                                            <div
                                                class='formBlockLight'
                                                id='acc_num'
                                                style={{ display: 'none' }}
                                            >
                                                <label for='regLogin'>
                                                    Account Number:
                                                </label>
                                                <input
                                                    type='text'
                                                    name='acc_num'
                                                    value=''
                                                    placeholder='0082343874'
                                                />
                                                <span class='icon-wallet'></span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Auth>
                        </div>
                    </div>

                    <div
                        class='bottomLine table full'
                        style={{ display: 'none' }}
                    >
                        <p class='copy tCell middle left'>
                            © 2021 Robot22 Trade. All rights reserved.
                        </p>
                    </div>
                    <div class='circleBg'>
                        <div class='circle'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        err: state.auth.error,
        loading: state.auth.loading,
        redirectToLoginPage: state.auth.redirect,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitSignup: (state) => dispatch(orderAction.initSignup(state)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
