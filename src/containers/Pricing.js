import React from 'react'
import RulesPageBg from '../images/rules_bg_bg.jpg'
import GreyBgBig from '../images/grey_bg_big.png'
import CardBg1 from '../images/card_bg_1.png'
import CardBg2 from '../images/card_bg_2.png'
import A1 from '../images/A1.png'
im

function Pricing() {
    return (
        <>
            <div
                class='pageBanner'
                style={{ backgroundImage: `url(${RulesPageBg})` }}
            >
                <div class='container'>
                    <span class='heading'>Pricing</span>
                </div>
            </div>

            <div class='rules' style={{ backgroundImage: `url(${GreyBgBig})` }}>
                <div class='container'>
                    <div class='wrap'>
                        <div class='row' style={{marginBottom: '30px'}>
                            <div class='item col6'>
                                <div class='planCardFirst'>
                                    <div
                                        class='left'
                                         style={{ backgroundImage: `url(${CardBg1})` }}
                                    >
                                        <span class='cap'>#PACKAGE A</span>
                                        <div class='descr'>
                                            <span class='pct'>10%</span>
                                            <span>48 HOURS</span>
                                            <a
                                                href='register.php'
                                                class='btnFillColor1Md'
                                            >
                                                Make deposit
                                            </a>
                                        </div>
                                    </div>
                                    <ul class='info'>
                                        <li>
                                            Min Deposit <span>50 USD</span>
                                        </li>
                                        <li>
                                            Max Deposit <span>199 USD</span>
                                        </li>
                                    </ul>
                                    <img
                                        src={{A1}}
                                        style={{width: '80%', marginTop: '20px'}}
                                    />
                                </div>
                            </div>

                            <div class='item col6'>
                                <div class='planCardSecond'>
                                    <div
                                        class='left'
                                        style={{ backgroundImage: `url(${CardBg2})` }}
                                    >
                                        <span class='cap'>#PACKAGE B</span>
                                        <div class='descr'>
                                            <span class='pct'>20%</span>
                                            <span>4 Work Days</span>
                                            <a
                                                href='register.php'
                                                class='btnFillColor2Md'
                                            >
                                                Make deposit
                                            </a>
                                        </div>
                                    </div>
                                    <ul class='info'>
                                        <li>
                                            Min Deposit <span>200 USD</span>
                                        </li>
                                        <li>
                                            Max Deposit <span>499 USD</span>
                                        </li>
                                    </ul>
                                    <img
                                        src='img/B.png'
                                        style={{width: '80%', marginTop: '20px'}}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class='row' style={{marginBottom: '30px'}>
                            <div class='item col6'>
                                <div class='planCardFirst'>
                                    <div
                                        class='left'
                    style={{ backgroundImage: `url(${CardBg1})` }}
                                    >
                                        <span class='cap'>#PACKAGE C</span>
                                        <div class='descr'>
                                            <span class='pct'>30%</span>
                                            <span>6 Work Days</span>
                                            <a
                                                href='register.php'
                                                class='btnFillColor1Md'
                                            >
                                                Make deposit
                                            </a>
                                        </div>
                                    </div>
                                    <ul class='info'>
                                        <li>
                                            Min Deposit <span>500 USD</span>
                                        </li>
                                        <li>
                                            Max Deposit <span>999 USD</span>
                                        </li>
                                    </ul>
                                    <img
                                        src='img/C.png'
                                        style={{width: '80%', marginTop: '20px'}}
                                    />
                                </div>
                            </div>

                            <div class='item col6'>
                                <div class='planCardSecond'>
                                    <div
                                        class='left'
                                        style={{ backgroundImage: `url(${CardBg2})` }}
                                    >
                                        <span class='cap'>#PACKAGE D</span>
                                        <div class='descr'>
                                            <span class='pct'>40%</span>
                                            <span>8 Work Days</span>
                                            <a
                                                href='register.php'
                                                class='btnFillColor2Md'
                                            >
                                                Make deposit
                                            </a>
                                        </div>
                                    </div>
                                    <ul class='info'>
                                        <li>
                                            Min Deposit <span>1,000 USD</span>
                                        </li>
                                        <li>
                                            Max Deposit <span>4,999 USD</span>
                                        </li>
                                    </ul>
                                    <img
                                        src='img/D.png'
                                        style={{width: '80%', marginTop: '20px'}}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class='row'>
                            <div class='item col6'>
                                <div class='planCardFirst'>
                                    <div
                                        class='left'
                    style={{ backgroundImage: `url(${CardBg1})` }}
                                    >
                                        <span class='cap'>#PACKAGE E</span>
                                        <div class='descr'>
                                            <span class='pct'>60%</span>
                                            <span>10 Work Days</span>
                                            <a
                                                href='register.php'
                                                class='btnFillColor1Md'
                                            >
                                                Make deposit
                                            </a>
                                        </div>
                                    </div>
                                    <ul class='info'>
                                        <li>
                                            Min Deposit <span>5,000 USD</span>
                                        </li>
                                        <li>
                                            Max Deposit <span>9,999 USD</span>
                                        </li>
                                    </ul>
                                    <img
                                        src='img/E.png'
                                        style={{width: '80%', marginTop: '20px'}}
                                    />
                                </div>
                            </div>

                            <div class='item col6'>
                                <div class='planCardSecond'>
                                    <div
                                        class='left'
                                        style={{ backgroundImage: `url(${CardBg2})` }}
                                    >
                                        <span class='cap'>#PACKAGE F</span>
                                        <div class='descr'>
                                            <span class='pct'>80%</span>
                                            <span>12 Work Days</span>
                                            <a
                                                href='register.php'
                                                class='btnFillColor2Md'
                                            >
                                                Make deposit
                                            </a>
                                        </div>
                                    </div>
                                    <ul class='info'>
                                        <li>
                                            Min Deposit <span>10,000 USD</span>
                                        </li>
                                        <li>
                                            Max Deposit{' '}
                                            <span>UNLIMITED USD</span>
                                        </li>
                                    </ul>
                                    <img
                                        src='img/D.png'
                                        style={{width: '80%', marginTop: '20px'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class='container'
                        style='margin-top: 40px; margin-bottom: 40px; '
                    >
                        <div class='textBlock'>
                            <h3>WHY ROBOT TRADING</h3>
                            <p>
                                There are several other trading programs in the
                                global market and each one competes with the
                                other in advertising. With Robot Trading, we put
                                our money where our mouths are and focus on
                                ensuring success for the long-term investment
                                relationship with our clients. We are dedicated
                                to our clients ‘ financial goals and objectives
                                and so we have hundreds of them over the span of
                                only a few years. Our program is failure-free,
                                user friendly, and easy to install and operate.
                            </p>
                            <p>
                                As mentioned, our prime objective is to build
                                profitable relationships and gain the trust of
                                our valued clients through superior performance
                                and top-notch customer support. We’ll do all we
                                can at our disposal to see our clients grow with
                                us and will prove to be one step ahead of their
                                expectations at all times.
                            </p>
                            <p>
                                - An innovative hybrid proof-of-work.
                                <br />
                                - Proof-of-stake (PoS) consensus trading system.
                                <br />
                                - Instant, on-demand cash-out.
                                <br />
                            </p>
                        </div>
                    </div>

                    <div class='item col6'>
                        <div class='planCardSecond'>
                            <div
                                class='left'
                                style={{ backgroundImage: `url(${CardBg2})` }}
                            >
                                <span class='cap'>TRADING PLAN</span>
                                <div class='descr'>
                                    <span class='pct'>EXTRA</span>
                                    <span>BONUS</span>
                                    <a
                                        href='register.php'
                                        class='btnFillColor2Md'
                                    >
                                        Make deposit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing
