import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { CgCalendarDates } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

import GetCurrentDate from '../../util/getCurrentDate'

function SubHeader(props) {
    const [checked, setChecked] = useState(false)

    const collapseMenu = () => {
        setChecked((old) => !old)
    }

    const auth = props.auth

    let mobileNav = (
        <>
            <li className='navigation__item'>
                <Link
                    to='/Auth/login'
                    className='navigation__link navigation__link--auth'
                    onClick={() => {
                        collapseMenu()
                    }}
                >
                    Login
                </Link>
            </li>
            <li className='navigation__item'>
                <Link
                    to='/Auth/signup'
                    className='navigation__link navigation__link--auth'
                    onClick={() => {
                        collapseMenu()
                    }}
                >
                    Signup
                </Link>
            </li>
        </>
    )

    let nav = (
        <>
            <Link
                to='/Auth/login'
                className='subHeader__list--item subHeader__list-item--auth'
            >
                <li>login</li>
            </Link>
            <Link
                to='/Auth/signup'
                className='subHeader__list--item subHeader__list-item--auth'
            >
                <li>signup</li>
            </Link>
        </>
    )

    if (auth) {
        mobileNav = (
            <>
                <li className='navigation__item'>
                    <Link
                        to='/admin/dashboard'
                        className='navigation__link navigation__link--auth'
                        onClick={() => {
                            collapseMenu()
                        }}
                    >
                        Dashboard
                    </Link>
                </li>
            </>
        )

        nav = (
            <>
                <Link
                    to='/admin/dashboard'
                    className='subHeader__list--item subHeader__list-item--auth'
                >
                    <li>Dashboard</li>
                </Link>
            </>
        )
    }

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
                                <span className='time gradTxt' id='time'></span>
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
                                    <a href='index.php'>HOME</a>
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
