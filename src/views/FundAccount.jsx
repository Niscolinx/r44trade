import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl, Row, Col } from 'react-bootstrap'
import { StatsCard } from '../components/StatsCard/StatsCard'

//import { generateBase64FromImage } from '../util/image'
import * as orderAction from '../store/actions/burgerIndex'

function FundAccount(props) {
    let [amount, setAmount] = useState('')
    const [currency, setCurrency] = useState('Bitcoin')
    //const [file, setFile] = useState('')
    //const [imagePreview, setImagePreview] = useState(null)
    const [userAccountBalance, setUserAccountBalance] = useState(0)
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSelectChange = (e) => {
        setCurrency(e.target.value)
    }
    // const handleFileChange = (e) => {
    //     const files = e.target.files
    //     if (files) {
    //         generateBase64FromImage(files[0])
    //             .then((b64) => {
    //                 setImagePreview(b64)
    //             })
    //             .catch((e) => {
    //                 setImagePreview(null)
    //             })
    //     }
    //     setFile(e.target.files)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            amount,
            currency,
        }

         if (amount === '' || amount === '0') {
             setMessage('Please enter a value')
             return setError(true)
         }

         if (amount > userAccountBalance) {
             setMessage('Insufficiant Balance')
             return setError(true)
         } else {
             setMessage(
                 'Funding sent, Your balance will reflect in your account after we have confirmed it, thanks!! '
             )
             setError(false)

             if (!error) {
                 amount = Number(amount)

                 props.onInitFundAccount(formData, props.tokenId, props.userId)

                 
             }
         }
    }

    useEffect(() => {
        if (props.userData.hasOwnProperty('username')) {

            setUserAccountBalance(props.userData.accountBalance)
        }
    }, [props])

        const displayUserFunds = `$${userAccountBalance}`


    return (
        <div className='fundAccount'>
            <Row className='fundAccount__balance'>
                <Col lg={12} sm={12}>
                    <StatsCard
                        bigIcon={<i className='pe-7s-server text-warning' />}
                        statsText='Account Balance'
                        statsValue={displayUserFunds}
                        statsIcon={<i className='fa fa-refresh' />}
                        statsIconText='Updated now'
                    />
                </Col>
            </Row>
            <form className='fundAccount__form' onSubmit={handleSubmit}>
                {message && (
                    <p className={error ? 'message message__error' : 'message'}>
                        {message}
                    </p>
                )}
                <input
                    type='number'
                    className='fundAccount__form--input'
                    placeholder='Enter amount - USD'
                    name='amount'
                    id='amount'
                    onChange={handleAmountChange}
                    value={amount}
                />

                <select
                    name='select'
                    id='select'
                    onChange={handleSelectChange}
                    value={currency}
                    className='fundAccount__form--select'
                >
                    <option value='Bitcoin'>Bitcoin</option>
                    <option value='Ethereum'>Ethereum</option>
                </select>

                <FormGroup className='fundAccount__form--instruction'>
                    <FormControl.Static>
                        INSTRUCTIONS: Transfer the equivalent amount in bitcoin
                        or ethereum(depending on your selection) to the above
                        wallet address.
                    </FormControl.Static>
                </FormGroup>

                {/* <div>
                    <label className='fundAccount__controlLabel'>
                        Proof of Payment (Image or PDF)
                    </label>
                    <input
                        type='file'
                        id='file'
                        name='file'
                        onChange={handleFileChange}
                        className='fundAccount__form--file'
                    />
                    {imagePreview && (
                        <>
                            <div className='image'>
                                <img
                                    src={imagePreview}
                                    alt='...'
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </>
                    )}
                </div> */}
                <div className='fundAccount__form--btn'>
                    <button
                        type='submit'
                        className='button'
                    >
                        {props.fundLoading ? 'Loading...' : 'Submit'}
                    </button>
                </div>
            </form>

            <div className='fundAccount__form'>
                <FormGroup className='fundAccount__form--contact'>
                    <FormControl.Static>
                        Contact management at support@coinperfectinvestment.com
                        for other payment methods
                    </FormControl.Static>
                </FormGroup>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        fundLoading: state.fundAccount.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        userData: state.auth.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitFundAccount: (data, token, userId) =>
            dispatch(orderAction.initFundAccount(data, token, userId)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FundAccount)
