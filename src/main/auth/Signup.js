import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {GoPerson} from 'react-icons/go'
import {RiBitCoinFill, RiLockPasswordFill} from 'react-icons/ri'
import {FaEthereum} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

import * as orderAction from '../../store/actions/burgerIndex'
import Input from '../Input'
import { required, length, email } from '../../util/validators'
import Auth from './Auth'

import GradBgBig from '../../images/grad_bg_big.png'
import LogRegBg from '../../images/logreg_bg.jpg'
import Logo from '../../images/logos.png'

const Signup = (props) => {

    const [invest, setInvest] = useState(0)
    const [showTotal, setShowTotal] = useState(0)

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


    const inputInvestHandler = e => {
        setInvest(e.target.value)
    }

    const investHandler = (e) => {
        e.preventDefault()

        const monthlyReturn = invest * 0.5

        let basket = 0
        for(let i = monthlyReturn; i < 12; i++){
         console.log(i, monthlyReturn[i])
         basket = i
        }

        // const year =12

        // const total = year.map((item, i) => {
        //     return item
        // })
       console.log(monthlyReturn)
       console.log('the basket', basket)
        //setShowTotal(invest)

    }

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
                    console.log('formValid', formIsValid)
                }
            }
            return {
                signupForm: updatedForm,
                formValid: formIsValid,
            }
        })
    }

    const inputBlurHandler = (input) => {}

    const handleSignup = (e) => {
        e.preventDefault()
        if (state.formValid) {
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
                                                <Input
                                                    id='fullname'
                                                    label='fullname'
                                                    type='text'
                                                    control='input'
                                                    minLength={6}
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
                                                    <GoPerson />
                                                </span>
                                            </div>
                                            <div class='formBlockLight'>
                                                <Input
                                                    id='username'
                                                    label='Username'
                                                    type='text'
                                                    control='input'
                                                    minLength={3}
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'username'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'username'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'username'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'username'
                                                        ].touched
                                                    }
                                                />

                                                <span class='icon-login'>
                                                    <GoPerson />
                                                </span>
                                            </div>

                                            <div class='formBlockLight'>
                                                <Input
                                                    id='bitcoinAccount'
                                                    label='Bitcoin Account'
                                                    type='text'
                                                    control='input'
                                                    minLength={26}
                                                    placeholder='optional'
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'bitcoinAccount'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'bitcoinAccount'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'bitcoinAccount'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'bitcoinAccount'
                                                        ].touched
                                                    }
                                                />
                                                <span class='icon-wallet'>
                                                    <RiBitCoinFill />
                                                </span>
                                            </div>
                                        </div>

                                        <div class='item col4'>
                                            <div class='formBlockLight'>
                                                <Input
                                                    id='email'
                                                    label='E-Mail'
                                                    type='email'
                                                    control='input'
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'email'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'email'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'email'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'email'
                                                        ].touched
                                                    }
                                                />

                                                <span class='icon-phone'>
                                                    <MdEmail />
                                                </span>
                                            </div>

                                            <div class='formBlockLight'>
                                                <Input
                                                    id='confirmEmail'
                                                    label='Confirm E-Mail'
                                                    type='email'
                                                    control='input'
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'confirmEmail'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'confirmEmail'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'confirmEmail'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'confirmEmail'
                                                        ].touched
                                                    }
                                                />
                                                <span class='icon-location'>
                                                    <MdEmail />
                                                </span>
                                            </div>

                                            {/* <input
                                                name='agree'
                                                value='1'
                                                type='checkbox'
                                                id='regCheck'
                                            /> */}
                                            <div class='agree'>
                                                <input
                                                    required
                                                    value=''
                                                    type='checkbox'
                                                />
                                                <label for='regCheck'>
                                                    I agree{' '}
                                                    <Link href='#'>
                                                        Terms and conditions
                                                    </Link>
                                                </label>
                                            </div>

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
                                                <Input
                                                    id='password'
                                                    label='Password'
                                                    type='password'
                                                    control='input'
                                                    minLength={6}
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'password'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'password'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'password'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'password'
                                                        ].touched
                                                    }
                                                />

                                                <span class='icon-pass'>
                                                    <RiLockPasswordFill />
                                                </span>
                                            </div>

                                            <div class='formBlockLight'>
                                                <Input
                                                    id='confirmPassword'
                                                    label='confirm Password'
                                                    type='password'
                                                    control='input'
                                                    minLength={6}
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'confirmPassword'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'confirmPassword'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'confirmPassword'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'confirmPassword'
                                                        ].touched
                                                    }
                                                />
                                                <span class='icon-wallet'>
                                                    <RiLockPasswordFill />
                                                </span>
                                            </div>
                                            <div class='formBlockLight'>
                                                <Input
                                                    id='ethereumAccount'
                                                    label='Ethereum Account'
                                                    type='text'
                                                    control='input'
                                                    placeholder='optional'
                                                    minLength={40}
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'ethereumAccount'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'ethereumAccount'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'ethereumAccount'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'ethereumAccount'
                                                        ].touched
                                                    }
                                                />
                                                <span class='icon-wallet'>
                                                    <FaEthereum />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <h1 style={{textAlign: 'center', fontWeight: 'bold', fontSize: '3rem'}}>{showTotal}</h1>
                                <form onSubmit ={investHandler}>
                                    <input style={{background: 'white', height: '5rem', fontSize: '3rem', padding: '1rem'}}
                                        type='number'
                                        onChange={inputInvestHandler}
                                        value={invest}
                                    />
                                    <button style={{fontSize: '2rem', textAlign: 'center', padding: '1rem', cursor: 'pointer'}}>Submit</button>
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
