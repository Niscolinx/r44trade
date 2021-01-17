import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'

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
                error:
                    props.err.page === 'signup'
                        ? props.err.error
                        : null,
            })
        }
        else if(props.tokenId) {
         setMessage({
                success: "Success"
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

<div class="bodyWrap">
<div class="logRegPage" style={{
                        backgroundImage: `url(${GradBgBig}), url(${LogRegBg})`
                    }}>
<div class="container">
<div class="head">
  <div class='logo invisLink' style={{ opacity: 0 }}>
                                <img src={Logo} alt='logo' height='70px;' />
                                Robot 22 Trade
                                <Link to='/'>main</Link>
                            </div>
</div>
</div>


<div class="content">
<div class="captionLight center">REGISTRATION</div>
<div class="wrap">


<form method="post" onsubmit="return checkform()" name="regform" style={{marginTop: '45px'}}>

<div class="row">
<div class="item col4">

<div class="formBlockLight">
<label for="regLogin">First Name:*</label>
<input type='text' name='fname' value=""/>
<span class="icon-login"></span>
</div>

<div class="formBlockLight">
<label for="regLogin">Last Name:*</label>
<input type='text' name='lname' value=""/>
<span class="icon-login"></span>
</div>


<div class="formBlockLight" id="select_payment_mode">
<label for="regLogin">Select Payment Mode:</label>
  <select  class="form-control input--squared input--dark" name='payment_mode' id="payment_mode">
  <option value="0">Select Payment Mode</option>
  <option value="btc">Bitcoin Wallet Address</option>
  <option value="eth">Ethereum Wallet Address</option>
</select>
<span class="icon-wallet"></span>
</div>




<div class="formBlockLight" id="select_payment_mode2" style={{display: 'none'}}>
<label for="regLogin">Select Payment Mode:</label>
  <select  class="form-control input--squared input--dark" name='payment_mode2' id="payment_mode2">
  <option value="0">Select Payment Mode</option>
  <option value="btc">Bitcoin Wallet Address</option>
  <option value="eth">Ethereum Wallet Address</option>
  <option value="bank">Bank Transfer</option>
</select>
<span class="icon-wallet"></span>
</div>


{/* <script>
$(document).ready(function(){
    $("#payment_mode").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            
            if(optionValue == "btc")
            {
                $("#bank_name").hide();
                $("#account_name").hide();
                $("#acc_num").hide();
                $("#btc").show();
                $("#eth").hide();
            } 
            else if(optionValue == "eth")
            {
                $("#bank_name").hide();
                $("#account_name").hide();
                $("#acc_num").hide();
                $("#btc").hide();
                $("#eth").show();
            } 
        });
    }).change();
}); */}







{/* $(document).ready(function(){
    $("#payment_mode2").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue == "bank")
            {
                $("#bank_name").show();
                $("#account_name").show();
                $("#acc_num").show();
                $("#btc").hide();
                $("#eth").hide();
            } 
            else if(optionValue == "btc")
            {
                $("#bank_name").hide();
                $("#account_name").hide();
                $("#acc_num").hide();
                $("#btc").show();
                $("#eth").hide();
            } 
            else if(optionValue == "eth")
            {
                $("#bank_name").hide();
                $("#account_name").hide();
                $("#acc_num").hide();
                $("#btc").hide();
                $("#eth").show();
            } 
        });
    }).change();
});
</script> */}





<div class="formBlockLight" id="btc" style={{display: 'none'}}>
  <br/>
<label for="regLogin">Bitcoin Wallet Adress:</label>
<input type='text' name='btc' value="" placeholder=""/>
<span class="icon-wallet"></span>
</div>


<div class="formBlockLight" id="bank_name" style={{display: 'none'}}>
<label for="regLogin">Bank Name:</label>
<input type='text' name="bank_name" value="" placeholder="Zenith Bank"/>
<span class="icon-wallet"></span>
</div>




</div>






{/* 
<style>
    .box{
        color: #fff;        padding: 20px;
        display: none;        margin-top: 20px;
    }
    .red{ background: #ff0000; }
    .green{ background: #228B22; }
    .blue{ background: #0000ff; }
    select{ 
            margin-top: 12px;            height: 46px;         padding-left: 20px;
            line-height: 44px;            width: 100%;         
            padding-left: 20px;            padding-right: 35px;
            font-size: 15px;            color: black;
            border-radius: 23px;            box-shadow: inset 0px 3px 7px rgba(0, 0, 0, 0.07);
            outline: none;            background: transparent;
            font-family: "Montserrat";            text-align: center;
            box-sizing: border-box;            -webkit-writing-mode: horizontal-tb !important;
            text-rendering: auto;            letter-spacing: normal;
            word-spacing: normal;            text-transform: none;
            text-indent: 0px;            text-shadow: none;
            display: inline-block;            text-align: start;
            -webkit-appearance: textfield;            -webkit-rtl-ordering: logical;
            cursor: text;        
            font: 400 13.3333px Arial;        
            border: 1px solid white;            box-sizing: border-box;
    }

</style> */}



{/* <script>
$(document).ready(function(){
    $("#country").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue == "NG")
            {
                $("#select_payment_mode2").show(); 
                $("#select_payment_mode").hide(); 
            } 
            else
            {
                $("#select_payment_mode2").hide(); 
                $("#select_payment_mode").show(); 
            }
        });
    }).change();
});
</script>




<!--


<script>
$(document).ready(function(){
    $("#country").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue)
            {
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } 
            else
            {
                $(".box").hide();
            }
        });
    }).change();
});
</script> */}


<div>
        <select>
            <option>Choose Color</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </select>
    </div>
--> 

















<div class="item col4">

<div class="formBlockLight">
<label for="regName">Mobile No:</label>
<input type=number name=phone value="">
<span class="icon-phone"></span>
</div>


<div class="formBlockLight">
<label for="regName">Country:</label>
  <select class="form-control input--squared input--dark" name='country' id="country">
  <option value="AF">-Select Country-</option>
  <option value="AF">Afghanistan</option>
  <option value="AX">Åland Islands</option>
  <option value="AL">Albania</option>
  <option value="DZ">Algeria</option>
  <option value="AS">American Samoa</option>
  <option value="AD">Andorra</option>
  <option value="AO">Angola</option>
  <option value="AI">Anguilla</option>
  <option value="AQ">Antarctica</option>
  <option value="AG">Antigua and Barbuda</option>
  <option value="AR">Argentina</option>
  <option value="AM">Armenia</option>
  <option value="AW">Aruba</option>
  <option value="AU">Australia</option>
  <option value="AT">Austria</option>
  <option value="AZ">Azerbaijan</option>
  <option value="BS">Bahamas</option>
  <option value="BH">Bahrain</option>
  <option value="BD">Bangladesh</option>
  <option value="BB">Barbados</option>
  <option value="BY">Belarus</option>
  <option value="BE">Belgium</option>
  <option value="BZ">Belize</option>
  <option value="BJ">Benin</option>
  <option value="BM">Bermuda</option>
  <option value="BT">Bhutan</option>
  <option value="BO">Bolivia, Plurinational State of</option>
  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
  <option value="BA">Bosnia and Herzegovina</option>
  <option value="BW">Botswana</option>
  <option value="BV">Bouvet Island</option>
  <option value="BR">Brazil</option>
  <option value="IO">British Indian Ocean Territory</option>
  <option value="BN">Brunei Darussalam</option>
  <option value="BG">Bulgaria</option>
  <option value="BF">Burkina Faso</option>
  <option value="BI">Burundi</option>
  <option value="KH">Cambodia</option>
  <option value="CM">Cameroon</option>
  <option value="CA">Canada</option>
  <option value="CV">Cape Verde</option>
  <option value="KY">Cayman Islands</option>
  <option value="CF">Central African Republic</option>
  <option value="TD">Chad</option>
  <option value="CL">Chile</option>
  <option value="CN">China</option>
  <option value="CX">Christmas Island</option>
  <option value="CC">Cocos (Keeling) Islands</option>
  <option value="CO">Colombia</option>
  <option value="KM">Comoros</option>
  <option value="CG">Congo</option>
  <option value="CD">Congo, the Democratic Republic of the</option>
  <option value="CK">Cook Islands</option>
  <option value="CR">Costa Rica</option>
  <option value="CI">Côte d'Ivoire</option>
  <option value="HR">Croatia</option>
  <option value="CU">Cuba</option>
  <option value="CW">Curaçao</option>
  <option value="CY">Cyprus</option>
  <option value="CZ">Czech Republic</option>
  <option value="DK">Denmark</option>
  <option value="DJ">Djibouti</option>
  <option value="DM">Dominica</option>
  <option value="DO">Dominican Republic</option>
  <option value="EC">Ecuador</option>
  <option value="EG">Egypt</option>
  <option value="SV">El Salvador</option>
  <option value="GQ">Equatorial Guinea</option>
  <option value="ER">Eritrea</option>
  <option value="EE">Estonia</option>
  <option value="ET">Ethiopia</option>
  <option value="FK">Falkland Islands (Malvinas)</option>
  <option value="FO">Faroe Islands</option>
  <option value="FJ">Fiji</option>
  <option value="FI">Finland</option>
  <option value="FR">France</option>
  <option value="GF">French Guiana</option>
  <option value="PF">French Polynesia</option>
  <option value="TF">French Southern Territories</option>
  <option value="GA">Gabon</option>
  <option value="GM">Gambia</option>
  <option value="GE">Georgia</option>
  <option value="DE">Germany</option>
  <option value="GH">Ghana</option>
  <option value="GI">Gibraltar</option>
  <option value="GR">Greece</option>
  <option value="GL">Greenland</option>
  <option value="GD">Grenada</option>
  <option value="GP">Guadeloupe</option>
  <option value="GU">Guam</option>
  <option value="GT">Guatemala</option>
  <option value="GG">Guernsey</option>
  <option value="GN">Guinea</option>
  <option value="GW">Guinea-Bissau</option>
  <option value="GY">Guyana</option>
  <option value="HT">Haiti</option>
  <option value="HM">Heard Island and McDonald Islands</option>
  <option value="VA">Holy See (Vatican City State)</option>
  <option value="HN">Honduras</option>
  <option value="HK">Hong Kong</option>
  <option value="HU">Hungary</option>
  <option value="IS">Iceland</option>
  <option value="IN">India</option>
  <option value="ID">Indonesia</option>
  <option value="IR">Iran, Islamic Republic of</option>
  <option value="IQ">Iraq</option>
  <option value="IE">Ireland</option>
  <option value="IM">Isle of Man</option>
  <option value="IL">Israel</option>
  <option value="IT">Italy</option>
  <option value="JM">Jamaica</option>
  <option value="JP">Japan</option>
  <option value="JE">Jersey</option>
  <option value="JO">Jordan</option>
  <option value="KZ">Kazakhstan</option>
  <option value="KE">Kenya</option>
  <option value="KI">Kiribati</option>
  <option value="KP">Korea, Democratic People's Republic of</option>
  <option value="KR">Korea, Republic of</option>
  <option value="KW">Kuwait</option>
  <option value="KG">Kyrgyzstan</option>
  <option value="LA">Lao People's Democratic Republic</option>
  <option value="LV">Latvia</option>
  <option value="LB">Lebanon</option>
  <option value="LS">Lesotho</option>
  <option value="LR">Liberia</option>
  <option value="LY">Libya</option>
  <option value="LI">Liechtenstein</option>
  <option value="LT">Lithuania</option>
  <option value="LU">Luxembourg</option>
  <option value="MO">Macao</option>
  <option value="MK">Macedonia, the former Yugoslav Republic of</option>
  <option value="MG">Madagascar</option>
  <option value="MW">Malawi</option>
  <option value="MY">Malaysia</option>
  <option value="MV">Maldives</option>
  <option value="ML">Mali</option>
  <option value="MT">Malta</option>
  <option value="MH">Marshall Islands</option>
  <option value="MQ">Martinique</option>
  <option value="MR">Mauritania</option>
  <option value="MU">Mauritius</option>
  <option value="YT">Mayotte</option>
  <option value="MX">Mexico</option>
  <option value="FM">Micronesia, Federated States of</option>
  <option value="MD">Moldova, Republic of</option>
  <option value="MC">Monaco</option>
  <option value="MN">Mongolia</option>
  <option value="ME">Montenegro</option>
  <option value="MS">Montserrat</option>
  <option value="MA">Morocco</option>
  <option value="MZ">Mozambique</option>
  <option value="MM">Myanmar</option>
  <option value="NA">Namibia</option>
  <option value="NR">Nauru</option>
  <option value="NP">Nepal</option>
  <option value="NL">Netherlands</option>
  <option value="NC">New Caledonia</option>
  <option value="NZ">New Zealand</option>
  <option value="NI">Nicaragua</option>
  <option value="NE">Niger</option>
  <option value="NG">Nigeria</option>
  <option value="NU">Niue</option>
  <option value="NF">Norfolk Island</option>
  <option value="MP">Northern Mariana Islands</option>
  <option value="NO">Norway</option>
  <option value="OM">Oman</option>
  <option value="PK">Pakistan</option>
  <option value="PW">Palau</option>
  <option value="PS">Palestinian Territory, Occupied</option>
  <option value="PA">Panama</option>
  <option value="PG">Papua New Guinea</option>
  <option value="PY">Paraguay</option>
  <option value="PE">Peru</option>
  <option value="PH">Philippines</option>
  <option value="PN">Pitcairn</option>
  <option value="PL">Poland</option>
  <option value="PT">Portugal</option>
  <option value="PR">Puerto Rico</option>
  <option value="QA">Qatar</option>
  <option value="RE">Réunion</option>
  <option value="RO">Romania</option>
  <option value="RU">Russian Federation</option>
  <option value="RW">Rwanda</option>
  <option value="BL">Saint Barthélemy</option>
  <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
  <option value="KN">Saint Kitts and Nevis</option>
  <option value="LC">Saint Lucia</option>
  <option value="MF">Saint Martin (French part)</option>
  <option value="PM">Saint Pierre and Miquelon</option>
  <option value="VC">Saint Vincent and the Grenadines</option>
  <option value="WS">Samoa</option>
  <option value="SM">San Marino</option>
  <option value="ST">Sao Tome and Principe</option>
  <option value="SA">Saudi Arabia</option>
  <option value="SN">Senegal</option>
  <option value="RS">Serbia</option>
  <option value="SC">Seychelles</option>
  <option value="SL">Sierra Leone</option>
  <option value="SG">Singapore</option>
  <option value="SX">Sint Maarten (Dutch part)</option>
  <option value="SK">Slovakia</option>
  <option value="SI">Slovenia</option>
  <option value="SB">Solomon Islands</option>
  <option value="SO">Somalia</option>
  <option value="ZA">South Africa</option>
  <option value="GS">South Georgia and the South Sandwich Islands</option>
  <option value="SS">South Sudan</option>
  <option value="ES">Spain</option>
  <option value="LK">Sri Lanka</option>
  <option value="SD">Sudan</option>
  <option value="SR">Suriname</option>
  <option value="SJ">Svalbard and Jan Mayen</option>
  <option value="SZ">Swaziland</option>
  <option value="SE">Sweden</option>
  <option value="CH">Switzerland</option>
  <option value="SY">Syrian Arab Republic</option>
  <option value="TW">Taiwan, Province of China</option>
  <option value="TJ">Tajikistan</option>
  <option value="TZ">Tanzania, United Republic of</option>
  <option value="TH">Thailand</option>
  <option value="TL">Timor-Leste</option>
  <option value="TG">Togo</option>
  <option value="TK">Tokelau</option>
  <option value="TO">Tonga</option>
  <option value="TT">Trinidad and Tobago</option>
  <option value="TN">Tunisia</option>
  <option value="TR">Turkey</option>
  <option value="TM">Turkmenistan</option>
  <option value="TC">Turks and Caicos Islands</option>
  <option value="TV">Tuvalu</option>
  <option value="UG">Uganda</option>
  <option value="UA">Ukraine</option>
  <option value="AE">United Arab Emirates</option>
  <option value="GB">United Kingdom</option>
  <option value="US">United States</option>
  <option value="UM">United States Minor Outlying Islands</option>
  <option value="UY">Uruguay</option>
  <option value="UZ">Uzbekistan</option>
  <option value="VU">Vanuatu</option>
  <option value="VE">Venezuela, Bolivarian Republic of</option>
  <option value="VN">Viet Nam</option>
  <option value="VG">Virgin Islands, British</option>
  <option value="VI">Virgin Islands, U.S.</option>
  <option value="WF">Wallis and Futuna</option>
  <option value="EH">Western Sahara</option>
  <option value="YE">Yemen</option>
  <option value="ZM">Zambia</option>
  <option value="ZW">Zimbabwe</option>
</select>
<span class="icon-location"></span>
</div>



<div class="formBlockLight" id="eth"  style={{display: 'none'}}>
<label for="regLogin">Ethereum Wallet Address:</label>
<input type=text name=eth value="" placeholder=" ">
<span class="icon-wallet"></span>
</div>
 



<div class="formBlockLight" id="account_name" style={{display: 'none'}}>
<label for="regLogin">Account Name:</label>
<input type="text" name="acc_name" value="" placeholder="John Doe">
<span class="icon-wallet"></span>
</div>





<div class="agree">
<input name=agree value=1  type="checkbox" id="regCheck" >
<label for="regCheck">I agree <a href="#">Terms and conditions</a></label>
</div>

<input type="submit" value="Submit" class="btnFillDarkMd" name="post" />

</div>

<div class="item col4">


<div class="formBlockLight">
<label for="invName">Referral:</label>
<input type="text" name=referral>
<span class="icon-login"></span>
</div>


<div class="formBlockLight">
<label for="regMail">E-mail:</label>
<input type=text name=email value="" required="" />
<span class="icon-mail"></span>
</div>


<div class="formBlockLight">
<label for="regPass">Password:</label>
<input type=password name=password value="" required="" />
<span class="icon-pass"></span>
</div>
 


<div class="formBlockLight" id="acc_num" style={{display: 'none'}}>
<label for="regLogin">Account Number:</label>
<input type="text" name="acc_num" value="" placeholder="0082343874">
<span class="icon-wallet"></span>
</div>



</div>

</div>

</form>

</div>
</div>

<div class="bottomLine table full">
<p class="copy tCell middle left">© 2021 Robot22 Trade. All rights reserved.</p> 
 
</div>
</div>
<div class="circleBg"><div class="circle"></div></div>
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
