import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='payments'>
                <div className='container'>
                    <ul className='table full'>
                        <li className='tCell bottom left'>
                            <img src={`${Payment_1}`} alt='payment' />
                        </li>
                        <li className='tCell middle left'>
                            <img src={`${Payment_2}`} alt='payment' />
                        </li>
                        <li className='tCell middle right'>
                            <img src={`${Payment_4}`} alt='payment' />
                        </li>
                        <li className='tCell middle right'>
                            <img src={`${Payment_5}`} alt='payment' />
                        </li>
                        <li className='tCell middle right'>
                            <img src={`${Payment_6}`} alt='payment' />
                        </li>
                        <li className='tCell middle right'>
                            <img src={`${Payment_8}`} alt='payment' />
                        </li>
                    </ul>
                </div>
            </div>

            <footer>
                <div className='container'>
                    <div className='cfix'>
                        <div className='footCol'>
                            <p className='copyright'>2021 © Robot22 Trade</p>
                        </div>
                        <ul className='footMenu'>
                            <li className='col'>
                                <ul>
                                    <li>
                                        <a href='index.php'>HOME</a>
                                    </li>
                                    <li>
                                        <a href='about.php'>ABOUT US</a>
                                    </li>
                                    <li>
                                        <a href='top-reward.php'>TOP REWARD</a>
                                    </li>
                                    <li>
                                        <a href='pricing.php'>PRICING</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='col'>
                                <ul>
                                    <li>
                                        <a href='testimonies.php'>
                                            TESTIMONIES
                                        </a>
                                    </li>
                                    <li>
                                        <a href='contact.php'>CONTACT US</a>
                                    </li>
                                    <li>
                                        <a href='faq.php'>FAQ</a>
                                    </li>
                                    <li>
                                        <a href='register.php'>Sign up</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className='footCol'>
                            <div className='cont'>
                                <span className='title'>Adress:</span>
                                <p>
                                    71-75 Shelton Street, London, Greater
                                    London, United Kingdom, WC2H 9JQ
                                </p>
                            </div>
                            <div className='cont'>
                                <span className='title'>E-mail:</span>
                                <a
                                    className='link'
                                    href='mailto:admin@robot22trade.com'
                                >
                                    admin@robot22trade.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
