import React from 'react';

export default class Buttons extends React.Component{
    render(){
        return(
            <>
               <button className="Condi">{this.props.value}</button>
            </>
        )
    }
}