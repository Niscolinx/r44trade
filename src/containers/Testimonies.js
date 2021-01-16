import React from 'react'
import NewsPageBg from '../images/news_page_bg.jpg'
import GreyBgBig from '../images/grey_bg_big.png'
import Testimonial1 from '../images/testimonial-1.jpg'
import Testimonial2 from '../images/testimonial-2.jpg'
import Testimonial3 from '../images/testimonial-3.jpg'

function Testimonies() {
    return (
        <>
            <div
                class='pageBanner'
                style={{ backgroundImage: `url(${NewsPageBg})` }}
            >
                <div class='container'>
                    <span class='heading'>Testimonies</span>
                </div>
            </div>

            <div
                class='pageNews'
                style={{ backgroundImage: `url(${GreyBgBig})` }}
            >
                <div class='container'>
                    <div class='wrap'>
                        <div class='grid'>
                            <div class='item col4'>
                                <div class='newsCard'>
                                    <div
                                        class='img'
                                        style={{
                                            backgroundImage: `url(${Testimonial2})`,
                                        }}
                                    ></div>
                                    <span class='title'>Wayne</span>
                                    <p>
                                        I've been investing with Robot44trade
                                        apparently over 8 months now and i can
                                        tell you it's worth trying robot44trade
                                        is the best..
                                    </p>
                                </div>
                            </div>
                            <div class='item col4'>
                                <div class='newsCard'>
                                    <div
                                        class='img'
                                        style={{
                                            backgroundImage: `url(${Testimonial3})`,
                                        }}
                                    ></div>
                                    <span class='title'>Dr Anderson</span>
                                    <p>
                                        I've been investing with Robot44trade
                                        apparently over 8 months now and i can
                                        tell you it's worth trying .
                                        Robot44trade is the best...
                                    </p>
                                </div>
                            </div>
                            <div class='item col4'>
                                <div class='newsCard'>
                                    <div
                                        class='img'
                                        style={{
                                            backgroundImage: `url(${Testimonial1})`,
                                        }}
                                    ></div>
                                    <span class='title'>Elizabeth</span>
                                    <p>
                                        I am excited to be part of this great
                                        program. ...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonies
