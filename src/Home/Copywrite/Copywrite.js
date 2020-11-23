
import React from 'react'
import CardPageCont from '../CardPage/CardPage'
import './copy.css'


class Copywrite extends React.Component{
    render(){
      return(
        <>
          <div className="copy-right">
            <div className="copy_left">
              <p className="other_count">Other Countries</p><p className="countries">India-South Africa-Indonesia</p>

            </div>
            <div className="copy_right">
              <p className="other_count">Free Classifieds in Pakistan</p><p className="countries">2006-2020 OLX</p>
            </div>
            </div> 
        </>
      )
    }
  }


  export default Copywrite;