import React from 'react'
import AboutPageBg from '../images/about_page_bg.jpg'
import AboutBg from '../images/about_bg.jpg'
import AboutImg from '../images/about_img.jpg'
import GreyBg from '../images/grey_bg.png'
import Profile from '../images/profile.jpg'

function AboutUs() {
    return (
        <>
            {/* .sbmt {background-color: #008CBA; 
width: 300px;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;}

.sbmt:hover {background-color: #2fa076;
width: 300px;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;} */}

            <div
                style={{
                    position: 'fixed',
                    zIndex: 99999,
                    left: '20px',
                    bottom: '20px',
                }}
            >
                <a href='http://wa.me/+447723536106'>
                    <img
                        alt=''
                        src='https://pngimg.com/uploads/whatsapp/whatsapp_PNG21.png'
                        width='50px'
                    />
                </a>
            </div>

            <div class='bodyWrap'>
                <div
                    class='pageBanner'
                    style={{ backgroundImage: `url(${AboutPageBg})` }}
                >
                    <div class='container'>
                        <span class='heading'>About us</span>
                    </div>
                </div>

                <div
                    class='pageAbout'
                    style={{ backgroundImage: `url(${GreyBg})` }}
                >
                    <div class='container'>
                        <div class='textBlock'>
                            <div class='info right'>
                                <div class='license'>
                                    <div
                                        class='img invisLink'
                                        style={{
                                            backgroundImage: `url(${Profile})`,
                                        }}
                                    >
                                        <a
                                            href='https://beta.companieshouse.gov.uk/company/12143668'
                                            target='#blank'
                                        >
                                            license
                                        </a>
                                    </div>
                                </div>
                                <div class='address'>
                                    <div class='iconLeft'>
                                        <span class='icon-location gradTxt'></span>
                                        <span class='data'>
                                            71-75 Shelton Street, London,
                                            Greater London, United Kingdom, WC2H
                                            9JQ
                                        </span>
                                    </div>
                                </div>
                                <div
                                    class='btnsWrap'
                                    style='text-align: center;'
                                >
                                    <a
                                        href='register.php'
                                        class='btnFillColor1Lg'
                                        style='margin-right: 20px;'
                                    >
                                        Join
                                    </a>
                                    <a
                                        href='https://beta.companieshouse.gov.uk/company/12143668'
                                        target='_blank'
                                        class='btnFillColor2Lg'
                                        style='margin: 20px 0 0;'
                                    >
                                        Check registration
                                    </a>
                                </div>
                            </div>
                            <p>
                                Robot 44 Trade is the only company dedicated to
                                work on EA, better known as Algo Trading, which
                                atomizes the trading process and brings risk
                                free profit, saves times, money and build better
                                wealth over long period of time.
                            </p>
                            <p>
                                A Robot trading System is used to automatically
                                generate trading signals on the forex trader’s
                                behalf. As such, a manual trader has to glue
                                himself or herself in front of a computer screen
                                and wait for the appropriate time when the
                                criteria for making a decision fits with his or
                                her rules—something which is tiring and
                                complicated.
                            </p>
                            <p>
                                With robot trading, the trading rules or
                                strategies have been ingrained in a computer
                                program, and your trade decisions will be made
                                automatically without your intervention. With a
                                trading robot, you can trade profitably 24 hours
                                a day and increase your profits. After you’ve
                                coded your strategies on a robot, it will
                                perform the buy and sell actions while you spend
                                your time on the beach. One of the main reasons
                                why traders fail is emotional trading. However,
                                a forex robot lowers or eliminates emotions from
                                the trading equation and give you a reliable way
                                of earning money.
                            </p>
                            <div
                                class='img left'
                                style={{ backgroundImage: `url(${AboutImg})` }}
                            ></div>
                            <div class='cfix'></div>
                            <br />
                            <br />
                            <p>
                                Using a blockchain is cryptographically secure –
                                the ledger is distributed across all nodes in
                                the system making hacking near impossible. All
                                of the solidity Ethereum smart contract code
                                used for the token sale and vault account was
                                fully audited by SmartDec, a firm specialized in
                                Smart Contract Security Audit. No single
                                authority has control.
                            </p>
                        </div>
                        <div class='advTempl'>
                            <div class='container'>
                                <span class='captionDark center'>
                                    Why choose us?
                                </span>
                                <div class='advWrap'>
                                    <div class='grid'>
                                        <div class='item col4'>
                                            <div class='in'>
                                                <span class='icon-phone gradTxt'></span>
                                                <span class='title'>
                                                    AUTOMATED
                                                </span>
                                                <p>
                                                    No financial advisor? No
                                                    experience trading
                                                    cryptocurrency? No worries.
                                                    Our algorithm takes away the
                                                    guesswork and executes
                                                    transactions automatically
                                                    on your behalf.
                                                </p>
                                            </div>
                                        </div>
                                        <div class='item col4'>
                                            <div class='in'>
                                                <span class='icon-chart gradTxt'></span>
                                                <span class='title'>
                                                    SMART TRADING
                                                </span>
                                                <p>
                                                    Emotions and stress have a
                                                    negative impact on trading.
                                                    Our Automated platform
                                                    allows you to avoid that and
                                                    gets the best option by
                                                    analysing all data storage.
                                                </p>
                                            </div>
                                        </div>
                                        <div class='item col4'>
                                            <div class='in'>
                                                <span class='icon-team gradTxt'></span>
                                                <span class='title'>
                                                    PROTECTION FROM HACKING
                                                </span>
                                                <p>
                                                    On a decentralized platform,
                                                    all user accounts are
                                                    independent; if one account
                                                    is hacked, this won’t breach
                                                    the security.
                                                </p>
                                            </div>
                                        </div>
                                        <div class='item col4'>
                                            <div class='in'>
                                                <span class='icon-docs gradTxt'></span>
                                                <span class='title'>
                                                    LOW COST
                                                </span>
                                                <p>
                                                    Robot Trading only use money
                                                    as cost of operation from
                                                    profit, Thus RTD is ICO
                                                    lowest cost of operations.
                                                </p>
                                            </div>
                                        </div>
                                        <div class='item col4'>
                                            <div class='in'>
                                                <span class='icon-cash gradTxt'></span>
                                                <span class='title'>
                                                    NO MORE MIDDLE MEN
                                                </span>
                                                <p>
                                                    Immediate funding without
                                                    third-parties. Smart
                                                    contracts autonomously
                                                    perform funding – collect
                                                    and release payments.
                                                </p>
                                            </div>
                                        </div>
                                        <div class='item col4'>
                                            <div class='in'>
                                                <span class='icon-pass gradTxt'></span>
                                                <span class='title'>
                                                    AUTO TRADING 24/7
                                                </span>
                                                <p>
                                                    Our platform is always
                                                    available to ensure that no
                                                    market opportunity is lost.
                                                    Let our platform work for
                                                    you!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
