
import React from 'react'
import CardComponent from '../CardComponent/CardCom' 
import CardData from '../CardComponent/CardData'
import {Link} from 'react-router-dom'
// import {select_func} from '../../store/action'


class Cards extends React.Component{
    render(){
      return(
        <>
          <div className="ad-content-cont">
          <h2>Fresh Recommendations</h2>
            <div className="CadaTwo">
              {/* <select_func /> */}

              
           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>
           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>
           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>
           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>
           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>
           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>

           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>
           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>
           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>
           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>
           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>
           <Link to = './card'> <CardComponent img={CardData[0].userImg} Rs="RS 51,99"dec="my first card"/> </Link>


            </div>    
          </div>
        </>
      )
    }
  }


  export default Cards;