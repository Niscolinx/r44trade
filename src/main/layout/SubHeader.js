import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Lang_1 from '../../images/lang_1.jpg'
import Lang_2 from '../../images/lang_2.jpg'
import Logos from '../../images/logos.png'

    const newDate = new Date()

    const time = newDate.getHours() + ':' + newDate.getMinutes()

    const date = newDate.getDate()
    const month = newDate.toLocaleString('en-GB', { month: 'short' })

    const year = newDate.getFullYear()



function SubHeader(props) {

   // const auth = props.auth


    return (
        <>
                <div className='topLine'>
                    <div className='container'>
                        <div className='table full'>
                            <div className='logoWrap tCell'>
                                <div className='logo invisLink'>
                                    <img
                                        src={`${Logos}`}
                                        alt='logo'
                                        height='70px;'
                                    />
                                    Robot 22 Trade
                                    <a href='index.php'>main</a>
                                </div>
                            </div>
                            <div className='logReg tCell right'>
                                <a href='login.php' className='btnFillColor1Sm'>
                                    login
                                </a>
                                <a
                                    href='register.php'
                                    className='btnFillColor2Sm'
                                >
                                    sign up
                                </a>
                            </div>

                            <div className='socContHead lang tCell right'>
                                <a
                                    href='#blank'
                                    style={{
                                        backgroundImage: `url(${Lang_1})`,
                                    }}
                                >
                                    lang1
                                </a>
                                <a
                                    href='#blank'
                                    style={{
                                        backgroundImage: `url(${Lang_2})`,
                                    }}
                                >
                                    lang2
                                </a>
                            </div>

                            <div className='clock tCell right'>
                                <span className='time gradTxt' id='time'><GetCurrentDate/></span>
                                <span className='date'>
                                    <span className='day' id='day'></span>
                                    <span className='year' id='year'></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <script src='../widgets.coingecko.com/coingecko-coin-price-marquee-widget.js'></script>
                <coingecko-coin-price-marquee-widget
                    coin-ids='bitcoin,ethereum,eos,ripple,litecoin'
                    currency='usd'
                    background-color='#ffffff'
                    locale='en'
                ></coingecko-coin-price-marquee-widget>

                <div className='menu'>
                    <div className='container'>
                        <center>
                            <ul>
                                <li>
                                    <Link to='/'>HOME</Link>
                                </li>
                                <li>
                                    <Link to='/about-us'>ABOUT US</Link>
                                </li>
                                <li>
                                    <a href='top-reward.php'>TOP REWARD</a>
                                </li>
                                <li>
                                    <a href='pricing.php'>PRICING</a>
                                </li>
                                <li>
                                    <a href='testimonies.php'>Testimonies</a>
                                </li>
                                <li>
                                    <a href='contact.php'>CONTACT US</a>
                                </li>
                                <li>
                                    <a href='faq.php'>FAQ</a>
                                </li>
                            </ul>
                        </center>
                    </div>
                </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.tokenId,
    }
}

export default connect(mapStateToProps)(SubHeader)
