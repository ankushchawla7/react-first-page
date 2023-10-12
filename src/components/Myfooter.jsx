import React from 'react'
import F_logo from '../assets/images/f_logo.png'
import Footer_img1 from '../assets/images/footer_img1.png'
import Footer_img2 from '../assets/images/footer_img2.png'
import Footer_img3 from '../assets/images/footer_img3.png'
import Footer_img4 from '../assets/images/footer_img4.png'
import Footer_img5 from '../assets/images/footer_img5.png'
import { Facebook, Instagram, Twitter } from './Icons'

const Myfooter = () => {
  return (
      <>
              <footer class="bg_black pb_25">
        <div class="container d_flex flex_column align_item_center pt_50">
            <div class="row align_item_center ">
                <div class="col-lg-5 col-12 col-md-12">
                    <div class="logo_img d_flex align_item_center">
                        <img src={F_logo} alt="#"/>
                        <span class="events">Events</span>
                        <span class="free">Free</span>
                    </div>
                    <p class="max_lg_width_315 color_white mt_40 mb_24 text_font">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit.
                        Suspendisse maximus
                        ipsum sem. c
                    </p>
                    <a href="#id" class="icon mr_15">
<Instagram/>
                    </a>
                    <a href="#id" class="icon mr_15">
<Facebook/>

                    </a>
                          <a href="#id" class="icon">
                              <Twitter/>
                    </a>
                </div>
                <div class="col-lg-7 col-12 pt_40">
                    <div class="row">
                        <div class="col-md-3 col-6  ">
                            <h4 class="color_white mb_12 head_link_font">SERVICES</h4>
                            <ul class="color_white">

                                <li class="mb_12 "><a href="#id" className='link_font'>About</a></li>
                                <li class="mb_12 "><a href="#id" className='link_font' >News</a></li>
                                <li class="mb_12 "><a href="#id"className='link_font' > ullamcorper</a></li>
                                <li class="mb_12"><a href="#id" className='link_font'>Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-6 color_white">
                            <h4 class="mb_12 head_link_font">EVENTS</h4>
                            <ul>
                                <li class="mb_12 "><a href="#id"className='link_font' >ullamcorper</a></li>
                                <li class="mb_12 "><a href="#id"className='link_font' >ullamcorper</a></li>
                                <li class="mb_12 "><a href="#id"className='link_font' >ullamcorper</a></li>
                                <li class="mb_12 "><a href="#id"className='link_font' >ullamcorper</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-12 col-sm-8  color_white">
                            <h4 class="mb_12 head_link_font">GALLERY</h4>
                            <div class="row">
                                <div class="col-4 mb_13">
                                    <img class="w_100 h_100" src={Footer_img1}
                                            alt="footer-img1"/>
                                </div>
                                <div class="col-4 mb_13">
                                    <img class="w_100 h_100" src={Footer_img2}
                                            alt="footer-img1"/>
                                </div>
                                <div class="col-4 mb_13">
                                    <img class="w_100 h_100" src={Footer_img3}
                                            alt="footer-img1"/>
                                </div>
                                <div class="col-4">
                                    <img class="w_100 h_100" src={Footer_img4}
                                            alt="footer-img1"/>
                                </div>
                                <div class="col-4">
                                    <img class="w_100 h_100" src={Footer_img5}
                                            alt="footer-img1"/>
                                </div>
                                <div class="col-4">
                                    <div class="show_more show_more_font h_100 w_100  color_white">
                                        <p class="max_width">Show More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="color_white pt_80 text_font text_align_center">© Credits of companyName belong to companyName.</p>
        </div>
    </footer>

      </>
  )
}

export default Myfooter