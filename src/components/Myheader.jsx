import React from 'react'
import f_logo from '../assets/images/f_logo.png'

function Myheader() {
  return (
    <div>
      <header className="pb_50">
  <div className="container">
    <nav>
      <div className="d_flex justify_content_between align_items_center">
        <div className="company_logo d_flex align_items_center">
                <img src={f_logo} alt='logo'/>
          <span className="events">Events</span>
          <span className="free">Free</span>
        </div>
              <label htmlFor="MENU" className=" MENU">
                    <span></span>
                        <span></span>
                <span></span>
              </label>
        <input type="checkbox" id="MENU" hidden />
        <ul className=" ul link_fonts d_flex gap_22 align_items_center justify_content_center">
          <li>
            <a href="#id" className="link_color">
              HOME
            </a>
          </li>
          <li>
            <a href="#id" className="link_color">
              EVENTS
            </a>
          </li>
          <li>
            <a href="#id" className="link_color">
              FEED
            </a>
          </li>
          <li>
            <a href="#id" className="link_color">
              USER NAME
            </a>
          </li>
          <li>
            <a href="#id" className="link_color button_padding_bg_br">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <p className="color_white pt_130 s_text">Home &gt; Events</p>
    <p className="topic_text color_white">Events</p>
  </div>
</header>
    </div>
  )
}

export default Myheader