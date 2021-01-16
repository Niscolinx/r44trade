import React from 'react'

import ContactPageBg from '../images/contact_page_bg.jpg'
import ContactBg from '../images/contact_bg.png'
import GreyBg from '../images/grey_bg.png'

const ContactUs = (props) => {
    return (
        <>
            <div
                class='pageBanner'
                style={{ backgroundImage: `url(${ContactPageBg})` }}
            >
                >
                <div class='container'>
                    <span class='heading'>Contact us</span>
                </div>
            </div>

            <div class='contInfo' style={{ backgroundImage: `url(${GreyBg})` }}>
                >
                <div class='container'>
                    <div class='row'>
                        <div class='left'>
                            <ul>
                                <li>
                                    <div class='table full'>
                                        <div class='img tCell middle'>
                                            <span class='icon-location'></span>
                                        </div>
                                        <div class='data tCell middle'>
                                            <span class='title'>
                                                our Address:
                                            </span>
                                            <p>
                                                71-75 Shelton Street, London,
                                                Greater London, United Kingdom,
                                                WC2H 9JQ
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class='table full'>
                                        <div class='img tCell middle'>
                                            <span class='icon-mail'></span>
                                        </div>
                                        <div class='data tCell middle'>
                                            <span class='title'>e-mail:</span>
                                            <a
                                                href='mailto:admin@robot22trade.com'
                                                target='_blank'
                                                class='link'
                                            >
                                                admin@robot22trade.com
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class='right'>
                            <div class='map' id='map'>
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.664190550833!2d-0.0020082838559824082!3d51.57438937964627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a761dc8a2877%3A0x445ae65e3d837263!2s23+Sandringham+Rd%2C+London!5e0!3m2!1suk!2suk!4v1533728208403'
                                    width='100%'
                                    height='100%'
                                    frameborder='0'
                                    style='border:0'
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class='blockForm'
                style={{ backgroundImage: `url(${ContactBg})` }}
            >
                >
                <div class='containerSM'>
                    <span class='captionDark center'>contact form</span>
                    <div class='wrap'>
                        <form
                            method='post'
                            name='mainform'
                            onsubmit='return checkform()'
                        >
                            <input
                                type='hidden'
                                name='form_id'
                                value='15866293958230'
                            />
                            <input
                                type='hidden'
                                name='form_token'
                                value='5fa5f60f62cbfc10723983e283d98cb6'
                            />
                            <input type='hidden' name='a' value='support' />
                            <input type='hidden' name='action' value='send' />

                            <div class='row bigPadd'>
                                <div class='item col6'>
                                    <div class='formBlockLight'>
                                        <label for='name'>Your name:</label>
                                        <input
                                            type='text'
                                            name='name'
                                            value=''
                                        />
                                    </div>
                                </div>
                                <div class='item col6'>
                                    <div class='formBlockLight'>
                                        <label for='mail'>Your e-mail:</label>
                                        <input
                                            type='text'
                                            name='email'
                                            value=''
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div class='formBlockLight'>
                                    <label for=''>Message:</label>
                                    <textarea name='message'></textarea>
                                </div>
                            </div>
                            <button type='submit' class='btnFillDarkMd center'>
                                send
                            </button>
                        </form>{' '}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
