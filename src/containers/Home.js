import React from 'react'

import A1 from '../images/A1.png'
import About_bg from '../images/about_bg.png'
import Adv_bg from '../images/adv_bg.png'
import B from '../images/B.png'
import Bg_11 from '../images/bg-11.png'
import C from '../images/C.png'
import Card_bg_1 from '../images/card_bg_1.png'
import Card_bg_2 from '../images/card_bg_2.png'
import Case from '../images/case.png'
import Chart_bg from '../images/chart_bg.png'
import D from '../images/D.png'
import E from '../images/E.png'
import F from '../images/F.png'
import Grad_bg from '../images/grad_bg.png'
import Grey_bg from '../images/grey_bg.png'
import Lang_1 from '../images/lang_1.png'
import Lang_2 from '../images/lang_2.png'
import Logos from '../images/logos.png'
import Payment_1 from '../images/payment_1.png'
import Payment_2 from '../images/payment_2.png'
import Payment_3 from '../images/payment_3.png'
import Payment_4 from '../images/payment_4.png'
import Payment_5 from '../images/payment_1.png'
import Payment_6 from '../images/payment_6.png'
import Payment_8 from '../images/payment_8.png'
import profile from '../images/profile.jpg'
import B1000 from '../images/1000.png'

const storyStyle = {
    backgroundImage: `linear-gradient(rgba(198, 153, 99, .7), rgba(198, 153, 99, .7)), url(${Back})`,
    width: '100%',
}
const headerStyle = {
    backgroundImage: `linear-gradient(rgba(16, 29, 44, .6), rgba(16, 29, 44, .6)), url(${Hero})`,
}
const whyChooseUsStyle = {
    backgroundImage: `linear-gradient(rgba(16, 29, 44, .8), rgba(16, 29, 44, .7)), url(${WhyUs})`,
    backgroundPosition: 'cover',
}

function Layout(props) {
    return (
        <>
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
                <header>
                    <div class='topLine'>
                        <div class='container'>
                            <div class='table full'>
                                <div class='logoWrap tCell'>
                                    <div class='logo invisLink'>
                                        <img
                                            src={`${Logos}`}
                                            alt='logo'
                                            height='70px;'
                                        />
                                        Robot 22 Trade
                                        <a href='index.php'>main</a>
                                    </div>
                                </div>
                                <div class='logReg tCell right'>
                                    <a href='login.php' class='btnFillColor1Sm'>
                                        login
                                    </a>
                                    <a
                                        href='register.php'
                                        class='btnFillColor2Sm'
                                    >
                                        sign up
                                    </a>
                                </div>

                                <div class='socContHead lang tCell right'>
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

                                <div class='clock tCell right'>
                                    <span class='time gradTxt' id='time'></span>
                                    <span class='date'>
                                        <span class='day' id='day'></span>
                                        <span class='year' id='year'></span>
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

                    <div class='menu'>
                        <div class='container'>
                            <center>
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
                                    <li>
                                        <a href='testimonies.php'>
                                            Testimonies
                                        </a>
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
                </header>

                <div
                    class='mainBanner gradImg'
                    style={{ backgroundImage: `url(${Bg_11})` }}
                >
                    <div class='container'>
                        <div class='content'>
                            <span class='heading'>
                                Forex trading with ROBOT TRADING{' '}
                            </span>
                            <span>The Future of Crypto Trading</span>
                            <div class='textBlock'>
                                <p
                                    style={{
                                        fontWeight: 500,
                                        textShadow: '2px 2px 4px black',
                                    }}
                                >
                                    The Fastest Growing cryptocurrency that
                                    return dividend from investments to
                                    investors <br />
                                    and the cryptocurrency that has value in
                                    itself.
                                </p>
                            </div>
                            <a href='register.php' class='btnFillGradLg'>
                                Get started now
                            </a>
                        </div>
                        <div class='cfix'>
                            <div class='curRate'>
                                <div class='item'>
                                    <div class='iconLeft'>
                                        <span class='icon-cur1'></span>
                                        <div class='data'>
                                            <span>Bitcoin (BTC):</span>
                                            <span>
                                                <b>
                                                    <span class='color2'>
                                                        (Accepted)
                                                    </span>
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class='item'>
                                    <div class='iconLeft'>
                                        <span class='icon-cur2'></span>
                                        <div class='data'>
                                            <span>Ethereum (ETH):</span>
                                            <span>
                                                <b>
                                                    <span class='color2'>
                                                        (Accepted)
                                                    </span>
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class='item'>
                                    <div class='iconLeft'>
                                        <span class='icon-cur3'></span>
                                        <div class='data'>
                                            <span>Litecoin (LTC):</span>
                                            <span>
                                                <b>
                                                    <span class='color2'>
                                                        (Accepted)
                                                    </span>
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class='item'>
                                    <div class='iconLeft'>
                                        <span class='icon-cur1'></span>
                                        <div class='data'>
                                            <span>Bitcoin Cash (BCH):</span>
                                            <span>
                                                <b>
                                                    <span class='color2'>
                                                        (Accepted)
                                                    </span>
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='headAdv'>
                            <ul>
                                <li>
                                    <div class='iconLeft'>
                                        <span
                                            class='icon-adv1'
                                            style={{
                                                boxShadow: '2px 2px 3px black',
                                            }}
                                        ></span>
                                        <span
                                            class='data'
                                            style={{
                                                textShadow: '2px 2px 3px black',
                                            }}
                                        >
                                            Officially registered company
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div class='iconLeft'>
                                        <span
                                            class='icon-adv3'
                                            style={{
                                                boxShadow: '2px 2px 3px black',
                                            }}
                                        ></span>
                                        <span
                                            class='data'
                                            style={{
                                                textShadow: '2px 2px 3px black',
                                            }}
                                        >
                                            Innovative <br></br>approach
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div class='iconLeft'>
                                        <span
                                            class='icon-adv2'
                                            style={{
                                                boxShadow: '2px 2px 3px black',
                                            }}
                                        ></span>
                                        <span
                                            class='data'
                                            style={{
                                                textShadow: '2px 2px 3px black',
                                            }}
                                        >
                                            Profitable working conditions
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <p>
                                We strongly believe in performance-based affairs
                                and understand that our very success is tied to
                                the success of our clients. Therefore, we’ve
                                ensured to lace our unique Auto Trading System
                                with all the advanced features that’ll help our
                                clients gain consistent results in the form of
                                higher profit and ROI.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div class='circleBg'>
                        <div class='circle'></div>
                    </div>
                    <div class='chart'>
                        <iframe
                            title='iframe1'
                            height='398'
                            width='618'
                            src='https://ssltvc.forexprostools.com/?pair_ID=945629&amp;height=398&amp;width=618&amp;interval=300&amp;plotStyle=area&amp;domain_ID=7&amp;lang_ID=7&amp;timezone_ID=17'
                        ></iframe>
                    </div>
                </div>

                <div
                    class='about'
                    style={{ backgroundImage: `url(${About_bg})` }}
                >
                    <div class='container'>
                        <div class='cfix'>
                            <div class='left'>
                                <span class='captionLight'>About company</span>
                                <div class='license'>
                                    <div
                                        class='img invisLink'
                                        style={{
                                            backgroundImage: `url(${profile})`,
                                        }}
                                    >
                                        <a
                                            href='img/profile.jpg'
                                            target='_blank'
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
                            </div>
                            <div class='right'>
                                <div class='textBlock'>
                                    <h3>
                                        <b style={{ color: 'white' }}>
                                            WELCOME ON BOARD JOIN THE TRADE
                                            PLATFORM
                                        </b>
                                    </h3>
                                    <br />
                                    <br />
                                    <p>
                                        Robot 22 Trade is the only company
                                        dedicated to work on EA, better known as
                                        Algo Trading, which atomizes the trading
                                        process and brings risk free profit,
                                        saves times, money and build better
                                        wealth over long period of time.
                                        <br />
                                        <br />
                                        A Robot trading System is used to
                                        automatically generate trading signals
                                        on the forex trader’s behalf. As such, a
                                        manual trader has to glue himself or
                                        herself in front of a computer screen
                                        and wait for the appropriate time when
                                        the criteria for making a decision fits
                                        with his or her rules—something which is
                                        tiring and complicated.
                                        <br />
                                        <br />
                                        With robot trading, the trading rules or
                                        strategies have been ingrained in a
                                        computer program, and your trade
                                        decisions will be made automatically
                                        without your intervention. With a
                                        trading robot, you can trade profitably
                                        24 hours a day and increase your
                                        profits. After you’ve coded your
                                        strategies on a robot, it will perform
                                        the buy and sell actions while you spend
                                        your time on the beach. One of the main
                                        reasons why traders fail is emotional
                                        trading. However, a forex robot lowers
                                        or eliminates emotions from the trading
                                        equation and give you a reliable way of
                                        earning money.
                                    </p>
                                </div>
                                <div class='btnsWrap'>
                                    <a href='about.php' class='btnFillColor1Lg'>
                                        Learn more
                                    </a>
                                    <a
                                        href='https://beta.companieshouse.gov.uk/company/12143668'
                                        target='_blank'
                                        class='btnFillColor2Lg'
                                    >
                                        Check the registration
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class='plan page'
                    style={{
                        backgroundImage: `url(${Chart_bg}), url(${Grey_bg})`,
                    }}
                >
                    <div class='container'>
                        <div class='textBlock'>
                            <p>
                                A robot cannot fear to make a trade neither can
                                it start making greed-driven decisions. With
                                implanted strategies, robots are capable of
                                making trade decisions in a way that humans
                                cannot. Some robots can thoroughly and
                                effectively scan the market looking for
                                opportunities with high levels of accuracy than
                                humans.
                            </p>
                        </div>
                        <span class='captionDark center'>Trade Pricing</span>

                        <div class='wrap'>
                            <div class='row' style={{ marginBottom: '30px' }}>
                                <div class='item col6'>
                                    <div class='planCardFirst'>
                                        <div
                                            class='left'
                                            style={{
                                                backgroundImage: `url(${Card_bg_1})`,
                                            }}
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
                                            alt=''
                                            src={`${A1}`}
                                            style={{
                                                width: '80%',
                                                marginTop: '20px',
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class='item col6'>
                                    <div class='planCardSecond'>
                                        <div
                                            class='left'
                                            style={{
                                                backgroundImage: `url(${Card_bg_2})`,
                                            }}
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
                                            alt=''
                                            src={`${B}`}
                                            style={{
                                                width: '80%',
                                                marginTop: '20px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class='row' style={{ marginBottom: '30px' }}>
                                <div class='item col6'>
                                    <div class='planCardFirst'>
                                        <div
                                            class='left'
                                            style={{
                                                backgroundImage: `url(${Card_bg_1})`,
                                            }}
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
                                            alt=''
                                            src={`${C}`}
                                            style={{
                                                width: '80%',
                                                marginTop: '20px',
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class='item col6'>
                                    <div class='planCardSecond'>
                                        <div
                                            class='left'
                                            style={{
                                                backgroundImage: `url(${Card_bg_2})`,
                                            }}
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
                                                Min Deposit{' '}
                                                <span>1,000 USD</span>
                                            </li>
                                            <li>
                                                Max Deposit{' '}
                                                <span>4,999 USD</span>
                                            </li>
                                        </ul>
                                        <img
                                            alt=''
                                            src={`${D}`}
                                            style={{
                                                width: '80%',
                                                marginTop: '20px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class='row'>
                                <div class='item col6'>
                                    <div class='planCardFirst'>
                                        <div
                                            class='left'
                                            style={{
                                                backgroundImage: `url(${Card_bg_1})`,
                                            }}
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
                                                Min Deposit{' '}
                                                <span>5,000 USD</span>
                                            </li>
                                            <li>
                                                Max Deposit{' '}
                                                <span>9,999 USD</span>
                                            </li>
                                        </ul>
                                        <img
                                            alt=''
                                            src={`${E}`}
                                            style={{
                                                width: '80%',
                                                marginTop: '20px',
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class='item col6'>
                                    <div class='planCardSecond'>
                                        <div
                                            class='left'
                                            style={{
                                                backgroundImage: `url(${Card_bg_2})`,
                                            }}
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
                                                Min Deposit{' '}
                                                <span>10,000 USD</span>
                                            </li>
                                            <li>
                                                Max Deposit{' '}
                                                <span>UNLIMITED USD</span>
                                            </li>
                                        </ul>
                                        <img
                                            alt=''
                                            src={`${F}`}
                                            style={{
                                                width: '80%',
                                                marginTop: '20px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class='container'
                            style={{ marginTop: '40px', marginBottom: '40px' }}
                        >
                            <div class='textBlock'>
                                <h3>WHY ROBOT TRADING</h3>
                                <p>
                                    There are several other trading programs in
                                    the global market and each one competes with
                                    the other in advertising. With Robot
                                    Trading, we put our money where our mouths
                                    are and focus on ensuring success for the
                                    long-term investment relationship with our
                                    clients. We are dedicated to our clients ‘
                                    financial goals and objectives and so we
                                    have hundreds of them over the span of only
                                    a few years. Our program is failure-free,
                                    user friendly, and easy to install and
                                    operate.
                                </p>
                                <p>
                                    As mentioned, our prime objective is to
                                    build profitable relationships and gain the
                                    trust of our valued clients through superior
                                    performance and top-notch customer support.
                                    We’ll do all we can at our disposal to see
                                    our clients grow with us and will prove to
                                    be one step ahead of their expectations at
                                    all times.
                                </p>
                                <p>
                                    - An innovative hybrid proof-of-work.
                                    <br />
                                    - Proof-of-stake (PoS) consensus trading
                                    system.
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
                                    style={{
                                        backgroundImage: `url(${Card_bg_2})`,
                                    }}
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
            </div>

            <div class='planProfit gradBack'>
                <div class='container'>
                    <div class='cfix'>
                        <form onsubmit='return calc()'>
                            <input
                                type='hidden'
                                name='form_id'
                                value='15866293132560'
                            />
                            <input
                                type='hidden'
                                name='form_token'
                                value='e8adebe87ccf486384da4a19a20feb4d'
                            />
                            <input
                                type='hidden'
                                name='form_id'
                                value='15348023226740'
                            />
                            <input
                                type='hidden'
                                name='form_token'
                                value='7fdf09bfa9cfe7b3d8483811bc1fc4c1'
                            />
                            <div class='formBlockLight'>
                                <label for='calc_amount'>Amount:</label>
                                <input
                                    class='enterNum'
                                    type='number'
                                    min='20'
                                    max='199'
                                    value='20'
                                    id='calc_amount'
                                />
                            </div>
                            <div class='formBlockLight'>
                                <label for='calc_plan'>Choosing of plan:</label>
                                <select name='choosePlan' id='calc_plan'>
                                    <option
                                        value='1'
                                        data-min='50'
                                        data-max='199'
                                        data-perc='110'
                                        data-per='1'
                                        checked
                                    >
                                        10% After 48 hours
                                    </option>
                                    <option
                                        value='2'
                                        data-min='200'
                                        data-max='499'
                                        data-perc='120'
                                        data-per='1'
                                    >
                                        20% after 4 work Days{' '}
                                    </option>
                                    <option
                                        value='3'
                                        data-min='500'
                                        data-max='999'
                                        data-perc='130'
                                        data-per='1'
                                    >
                                        30% after 6 work Days{' '}
                                    </option>
                                    <option
                                        value='4'
                                        data-min='1000'
                                        data-max='4999'
                                        data-perc='140'
                                        data-per='1'
                                    >
                                        40% after 8 work Days
                                    </option>
                                    <option
                                        value='3'
                                        data-min='5000'
                                        data-max='9999'
                                        data-perc='160'
                                        data-per='1'
                                    >
                                        60% after 10 work Days{' '}
                                    </option>
                                    <option
                                        value='4'
                                        data-min='10000'
                                        data-max='100000000'
                                        data-perc='180'
                                        data-per='1'
                                    >
                                        80% after 12 work Days{' '}
                                    </option>
                                </select>
                            </div>
                            <div class='sum'>
                                <span class='title'>Your profit:</span>
                                <span class='num'>
                                    <b id='profit'>1270,00</b> USD
                                </span>
                            </div>
                            <input
                                type='submit'
                                id='calc_btn'
                                style={{ display: 'none' }}
                            />{' '}
                        </form>
                        <a href='register.php' class='btnFillDarkMd'>
                            Get money
                        </a>
                    </div>
                </div>
            </div>

            <div class='program gradBack'>
                <div class='container'>
                    <span class='captionDark center'>Affiliate program</span>
                    <div class='wrap'>
                        <div class='row'>
                            <div class='item col6'>
                                <div class='progrInfoFirst'>
                                    <div class='inner'>
                                        <span class='num'>6</span>
                                        <span>
                                            1ST <br> </br>LEVEL
                                        </span>
                                        <span class='pct'>%</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item col6'>
                                <div class='progrInfoSecond'>
                                    <div class='inner'>
                                        <span class='num'>2</span>
                                        <span>
                                            2ND <br> </br>LEVEL
                                        </span>
                                        <span class='pct'>%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class='amp'>&</span>
                    </div>
                    <div class='textBlock'>
                        <p>
                            We appreciates the active partners that help us
                            develop and advance our company. As a thank you for
                            each newly invited participant in this project, we
                            charge referral commissions to their sponsors. In
                            addition, if your invitees will also develop our
                            company, you will also get even more bonuses for it!
                        </p>
                    </div>
                    <a href='about.php' class='btnFillGradLg center'>
                        Learn More
                    </a>

                    <div class='cfix'>
                        <div class='statistic' style={{ display: 'none' }}>
                            <div class='row'>
                                <div class='item'>
                                    <div class='img'>
                                        <span class='icon-date'></span>
                                    </div>
                                    <span class='title'>Online Days:</span>
                                    <span class='num'>4059</span>
                                </div>
                                <div class='item'>
                                    <div class='img'>
                                        <span class='icon-profile'></span>
                                    </div>
                                    <span class='title'>Online Users:</span>
                                    <span class='num'>916</span>
                                </div>
                                <div class='item'>
                                    <div class='img'>
                                        <span class='icon-pay_in'></span>
                                    </div>
                                    <span class='title'>
                                        total withdrawals:
                                    </span>
                                    <span
                                        class='num'
                                        sstyle={{ fontSize: '25px' }}
                                    >
                                        $ 9,428,235.00
                                    </span>
                                </div>
                                <div class='item'>
                                    <div class='img'>
                                        <span class='icon-pay_out'></span>
                                    </div>
                                    <span class='title'>total deposits:</span>
                                    <span
                                        class='num'
                                        style={{ fontSize: '25px' }}
                                    >
                                        $ 1,062,095.00
                                    </span>
                                </div>
                                <div class='item'>
                                    <div class='img'>
                                        <span class='icon-partner'></span>
                                    </div>
                                    <span class='title'>Active users:</span>
                                    <span class='num'>8935</span>
                                </div>
                            </div>
                        </div>
                        <div class='statTbl' style={{ display: 'none' }}>
                            >
                            <div class='row'>
                                <div class='item col6'>
                                    <div class='inner'>
                                        <div class='title'>
                                            <span>latest deposit</span>
                                        </div>
                                        <ul class='table full in'>
                                            <li class='tRow'>
                                                <span class='tCell middle name'>
                                                    Deposit{' '}
                                                </span>
                                                <span class='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span class='tCell middle sum'>
                                                    $
                                                </span>
                                                <span class='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li class='tRow'>
                                                <span class='tCell middle name'>
                                                    Torres
                                                </span>
                                                <span class='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span class='tCell middle sum'>
                                                    $53,000.00
                                                </span>
                                                <span class='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li class='tRow'>
                                                <span class='tCell middle name'>
                                                    Hensley
                                                </span>
                                                <span class='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span class='tCell middle sum'>
                                                    $201.00
                                                </span>
                                                <span class='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li class='tRow'>
                                                <span class='tCell middle name'>
                                                    Hensley
                                                </span>
                                                <span class='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span class='tCell middle sum'>
                                                    $34,000.00
                                                </span>
                                                <span class='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li class='tRow'>
                                                <span class='tCell middle name'>
                                                    Frank Jason
                                                </span>
                                                <span class='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span class='tCell middle sum'>
                                                    $
                                                </span>
                                                <span class='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    class='item col6'
                                    style={{ display: 'none' }}
                                >
                                    <div class='inner'>
                                        <div class='title'>
                                            <span>last WITHDRAWALS</span>
                                        </div>
                                        <ul class='table full out'>
                                            <li class='tRow'>
                                                <span class='tCell middle name'>
                                                    Ms. Willie Hoppe III
                                                </span>
                                                <span class='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span class='tCell middle sum'>
                                                    $95,100.00
                                                </span>
                                                <span class='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li class='tRow'>
                                                <span class='tCell middle name'>
                                                    Ms. Willie Hoppe III
                                                </span>
                                                <span class='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span class='tCell middle sum'>
                                                    $134,000.00
                                                </span>
                                                <span class='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li class='tRow'>
                                                <span class='tCell middle name'>
                                                    Elissa Murazik
                                                </span>
                                                <span class='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span class='tCell middle sum'>
                                                    $87,000.00
                                                </span>
                                                <span class='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li class='tRow'>
                                                <span class='tCell middle name'>
                                                    Dr. Velma Larson PhD
                                                </span>
                                                <span class='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span class='tCell middle sum'>
                                                    $262,800.00
                                                </span>
                                                <span class='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li class='tRow'>
                                                <span class='tCell middle name'>
                                                    Takalani Letsoalo
                                                </span>
                                                <span class='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span class='tCell middle sum'>
                                                    $76,000.00
                                                </span>
                                                <span class='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='circleBg'>
                    <div class='circle'></div>
                </div>
            </div>

            <div
                class='advTempl'
                style={{
                    backgroundImage: `url(${Adv_bg})`,
                }}
            >
                <div class='container'>
                    <span class='captionLight center'>Why choose us?</span>
                    <div class='advWrap'>
                        <div class='grid'>
                            <div class='item col4'>
                                <div class='in'>
                                    <span class='icon-phone gradTxt'></span>
                                    <span class='title'>AUTOMATED</span>
                                    <p>
                                        No financial advisor? No experience
                                        trading cryptocurrency? No worries. Our
                                        algorithm takes away the guesswork and
                                        executes transactions automatically on
                                        your behalf.
                                    </p>
                                </div>
                            </div>
                            <div class='item col4'>
                                <div class='in'>
                                    <span class='icon-chart gradTxt'></span>
                                    <span class='title'>SMART TRADING</span>
                                    <p>
                                        Emotions and stress have a negative
                                        impact on trading. Our Automated
                                        platform allows you to avoid that and
                                        gets the best option by analysing all
                                        data storage.
                                    </p>
                                </div>
                            </div>
                            <div class='item col4'>
                                <div class='in'>
                                    <span class='icon-team gradTxt'></span>
                                    <span class='title'>
                                        NO MORE MIDDLE MEN
                                    </span>
                                    <p>
                                        Immediate funding without third-parties.
                                        Smart contracts autonomously perform
                                        funding – collect and release payments.
                                    </p>
                                </div>
                            </div>
                            <div class='item col4'>
                                <div class='in'>
                                    <span class='icon-docs gradTxt'></span>
                                    <span class='title'>
                                        PROTECTION FROM HACKING
                                    </span>
                                    <p>
                                        On a decentralized platform, all user
                                        accounts are independent; if one account
                                        is hacked, this won’t breach the
                                        security.
                                    </p>
                                </div>
                            </div>
                            <div class='item col4'>
                                <div class='in'>
                                    <span class='icon-cash gradTxt'></span>
                                    <span class='title'>RELIABILITY</span>
                                    <p>
                                        Robot Trading under the direction of
                                        Next Generation Technology Co., LTD is
                                        located in United Kingdom and is
                                        governed by the laws of United Kingdom.
                                    </p>
                                </div>
                            </div>
                            <div class='item col4'>
                                <div class='in'>
                                    <span class='icon-pass gradTxt'></span>
                                    <span class='title'>AUTO TRADING 24/7</span>
                                    <p>
                                        Our platform is always available to
                                        ensure that no market opportunity is
                                        lost. Let our platform work for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class='payments'>
                <div class='container'>
                    <ul class='table full'>
                        <li class='tCell bottom left'>
                            <img src={`${Payment_1}`} alt='payment' />
                        </li>
                        <li class='tCell middle left'>
                            <img src={`${Payment_2}`} alt='payment' />
                        </li>
                        <li class='tCell middle right'>
                            <img src={`${Payment_4}`} alt='payment' />
                        </li>
                        <li class='tCell middle right'>
                            <img src={`${Payment_5}`} alt='payment' />
                        </li>
                        <li class='tCell middle right'>
                            <img src={`${Payment_6}`} alt='payment' />
                        </li>
                        <li class='tCell middle right'>
                            <img src={`${Payment_8}`} alt='payment' />
                        </li>
                    </ul>
                </div>
            </div>

            <footer>
                <div class='container'>
                    <div class='cfix'>
                        <div class='footCol'>
                            <p class='copyright'>2021 © Robot22 Trade</p>
                        </div>
                        <ul class='footMenu'>
                            <li class='col'>
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
                            <li class='col'>
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
                        <div class='footCol'>
                            <div class='cont'>
                                <span class='title'>Adress:</span>
                                <p>
                                    71-75 Shelton Street, London, Greater
                                    London, United Kingdom, WC2H 9JQ
                                </p>
                            </div>
                            <div class='cont'>
                                <span class='title'>E-mail:</span>
                                <a
                                    class='link'
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

export default Layout
