
import './App.css';
import React from 'react'
import HeadCcont from './Home/Head/Head';
import Navbar from './Home/Navbar/Navbar';
import {Slide,ButtonMore} from './Home/Slider/Slider';
import Cards from './Home/Cards/Cards';
import Footer from './Home/Footer/Footer';
import Copywrite from './Home/Copywrite/Copywrite';
// import CarCont from './Home/Cars/Cars'





class Body extends React.Component {
  render(){
    return (
      <>
      
          <div className="container">
            <HeadCcont  />
            <Navbar value="Mobile & Phones" />
            <div className="home-pic"><img className="home_olx_img" src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg" /></div>
            <br></br>
            <br></br>
            <br></br>
            <Slide />
            <br></br>
            <br></br>
            <Cards />
            <Footer />
            <Copywrite />
            {/* <CarCont /> */}

      
          </div>
      
          
          </>
        )
  }
}



export default Body;
