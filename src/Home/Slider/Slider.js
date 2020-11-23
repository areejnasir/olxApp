
import React from 'react'
import CardComponent from '../CardComponent/CardCom'
import CardData from '../CardComponent/CardData';
import {Link} from 'react-router-dom'











class Slide extends React.Component{
    
    render(){
      return(
        <>
          <div className="slider">
            <div className="Heading">
              <h3 className="i-phone">More on i phone</h3>
              <ButtonMore value="view more" />
            </div>
            <div className="slids-Cards-cont">
              <div className="Cada">
              <Link to = './card'><CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/></Link>
              <Link to = './card'><CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/></Link>
              <Link to = './card'><CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/></Link>
              <Link to = './card'><CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/></Link>
              <Link to = './card'><CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/></Link>
              <Link to = './card'><CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/></Link>
              </div>
              
            </div>
          </div>
        </>
      )
    }
  }

class ButtonMore extends React.Component{
  render(){
    return(
      <>
        <button className="more">{this.props.value}</button>
      </>
    )
  }
}

export {
  Slide,
  ButtonMore
} 