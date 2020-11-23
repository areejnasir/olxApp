import React from 'react';
export default class SelectCategory extends React.Component{
    render(){
        return(
            <>
                <h2 className="SelectCategory">{this.props.value}</h2>
            </>
        )
    }
}