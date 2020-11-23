
import React from 'react'
import {Link} from 'react-router-dom';


class Navbar extends React.Component{
    render(){
      return(
        <>
          <div className="nav-content-cont">
            <div className="nav-cate">
              <h5 className="all-cater-heading">ALL CATEGORIES</h5>
            </div>
            <div className="categories-nav">
              <ul>
              <Link to = "/filter"><Add value="Mobile & Phones" /></Link>
                <Link to = "/filter"><Add value="Cars" /></Link>
                <Link to = "/filter"><Add value="MotorCycles" /></Link>
                <Link to = "/filter"><Add value="Houses" /></Link>
                <Link to = "/filter"><Add value="TV-Video / Audio" /></Link>
                <Link to = "/filter"><Add value="Tablets" /></Link>
                <Link to = "/filter"><Add value="Land & Plots" /></Link>
              </ul>
            </div>
          </div>
        </>
      )
    }
  }

  class Add extends React.Component{
    render(){
      return(
      <li className="nav-li">{this.props.value}</li>
      )
    }
  }



  export default Navbar;