import React from 'react';
export default class ParaInPara extends React.Component{
    render(){
        return(
            <>
                <p className="para">{this.props.value}</p>
            </>
        )
    }
}