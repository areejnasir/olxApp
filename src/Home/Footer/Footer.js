
import React from 'react'


class Footer extends React.Component{
    render(){
      return(
        <>
          <div className="Footer">
            <div className="footer_cont">
              <div className="footer-cate">
                <h5>PAPULAR CATEGORIES</h5>
                <ul>
                  <li className="footer_li">Cars</li>
                  <li className="footer_li">Flat for rent</li>
                  <li className="footer_li">Jobs</li>
                  <li className="footer_li">Mobile Phones</li>
                </ul>
              </div>
              <div className="footer-cate">
                <h5>TRENSING SEARCHES</h5>
                <ul>
                  <li className="footer_li">Bike</li>
                  <li className="footer_li">Watches</li>
                  <li className="footer_li">Books</li>
                  <li className="footer_li">Dogs</li>
                </ul>
              </div>
              <div className="footer-cate">
                <h5>ABOUT US</h5>
                <ul>
                  <li className="footer_li">About OLX group</li>
                  <li className="footer_li">OLX Blog</li>
                  <li className="footer_li">Contact us</li>
                  <li className="footer_li">OLX for Businesses</li>
                </ul>
              </div>
              <div className="footer-cate">
                <h5>OLX</h5>
                <ul>
                  <li className="footer_li">Help</li>
                  <li className="footer_li">Sitemap</li>
                  <li className="footer_li">Legal & Privacy information</li>
                </ul>
              </div>
              <div className="footer-cate">
                <h5>FOLLOW US</h5>
                {/* <div className="follow_icons"></div> */}
                <div className="follow_icons">
                <ion-icon name="logo-facebook"></ion-icon><ion-icon name="logo-twitter"></ion-icon><ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div className="follow_icons">
                <ion-icon name="logo-google-playstore"></ion-icon><ion-icon name="logo-apple"></ion-icon>
                </div>
                
              </div>
            </div>
          </div>
        </>
      )
    }
  }


  export default Footer;