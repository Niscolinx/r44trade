import React from 'react'
import NewsPageBg from '../images/news_page_bg.jpg'
import GreyBgBig from '../images/grey_bg_big.png'
import Testimonial1 from '../images/testimonial-1.jpg'
import Testimonial2 from '../images/testimonial-2.jpg'
import Testimonial3 from '../images/testimonial-3.jpg'


function Testimonies() {
    return (
        <>
           <div class="pageBanner" style={{ backgroundImage: `url(${NewsPageBg})` }}>

<div class="container">
<span class="heading">Testimonies</span>
</div>
</div>








<div class="pageNews" style={{ backgroundImage: `url(${GreyBgBig})` }}>
<div class="container">
<div class="wrap">
<div class="grid">




<div class="item col4"><div class="newsCard"><div class="img" style={{ backgroundImage: `url(${Testimonial2})` }}></div><span class="title">
			Wayne 
			</span><p>I've been investing with Robot22trade apparently over 8 months now and i can tell you it's worth trying robot22trade is the best 🤑...
			</p></div></div><div class="item col4"><div class="newsCard"><div class="img" style={{ backgroundImage: `url(${Testimonial3})` }}></div><span class="title">
			Dr Anderson 
			</span><p>I've been investing with Robot22trade apparently over 8 months now and i can tell you it's worth trying . Robot22trade is the best 🤑...
			</p></div></div><div class="item col4"><div class="newsCard"><div class="img" style={{ backgroundImage: `url(${Testimonial1})` }}></div><span class="title">
			Elizabeth 
			</span><p>I am excited to be part of this great program. ...
			</p></div></div> 


</div>
</div>

</div>
</div>







<div class="container content-container" style={{display: 'none'}}>
<div class="row">
<div class=" col-md-12">
<div class="page-content-wrap"> 





<div class="vc_row wpb_row vc_row-fluid">
<div class="wpb_column vc_column_container vc_col-sm-12">
<div class="vc_column-inner ">
<div class="wpb_wrapper">
<div class="vc_row wpb_row vc_inner vc_row-fluid">
<div class="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-2 vc_col-md-8">
<div class="vc_column-inner ">
<div class="wpb_wrapper"  style={{marginTop: '40px', textAlign: 'center'}}>
<div data-rstyle="height:|10|20|30;" class='anps-empty-space'></div>
<h2 class="anps-heading" style="text-align: center; "><span style={{fontWeight: 700}} data-rstyle="margin-bottom:|||20;font-size:|||32;line-height:|||;" class=" anps-heading__text">Add Testimonies</span></h2>
<div class="wpb_text_column wpb_content_element " >
<div class="wpb_wrapper" style="margin-top: 20px; "><p style="text-align: center;"> 
We have a collection of all our clients that have benefited from the trading systems we have.
</p></div>
</div>

<div data-rstyle="height:||10|20;" class='anps-empty-space'></div>
</div></div>
</div></div>
</div>
</div></div>
</div>



 
<div class="content"> 
<div class="wrap">



<form method="post" onsubmit="return checkform()" name="regform" style="margin-top: 45px;" >

<div class="row">

<div class="item col6">
<div class="formBlockLight">
<label for="regLogin" style="color: black">Name:*</label>
<input type=text  name="fullname" value="">
<span class="icon-login"></span>
</div>
</div>

<div class="item col6">
<div class="formBlockLight">
<label for="regLogin" style="color: black">Email Address:*</label>
<input type=text  name="email" value="">
<span class="icon-login"></span>
</div>
</div>


<div class="item col12">
<div class="formBlockLight">
<label for="regLogin" style="color: black">Message:*</label> 
<textarea name="message" rows="8"></textarea>
<span class="icon-message"></span>
</div>


<div class="anps-btn-wrap anps-btn-wrap--center">
<input type="submit"  class="btnFillDarkMd"  value="Submit">
</div>


</div>
</div>
</form>

</div></div>
</div>


 











<div class="vc_row-full-width vc_clearfix"></div>
</div>
</div>
</div>
</div>

 
        </>
    )
}

export default Testimonies
