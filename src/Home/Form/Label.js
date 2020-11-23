import React from 'react';
export default class Label extends React.Component{
    render(){
        return(
            <>
                <label>{this.props.value}</label>
            </>
        )
    }
}