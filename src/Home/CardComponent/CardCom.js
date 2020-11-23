import React from 'react';
import './CardCom.css';




class CardComponent extends React.Component{
    render(){
        return(
            <>
                <div className="CardCont">
                    <div className="CardImgCont"><img className="CardImg" alt="Ab" src={this.props.img} /></div>
                    <div className="CardDataCont">
                        <div className="Rs"><h3>{ this.props.Rs}</h3></div>
                        <div className="Dec"><p>{ this.props.dec}</p></div>
                    </div>
                </div>
            </>
        )
    }
}



export default CardComponent;