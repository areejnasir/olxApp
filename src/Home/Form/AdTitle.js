import React from 'react';
import Label from './Label';
// import INPUT from './INPUT';
import Description from './Description'

export default class AdTitle extends React.Component{
    render(){
        return(
            <>
                 <div className="SelectOption-cont">
                    <div className="SelectOption-cont-content"></div>
                        <Label value="Ad title *" />
                        <div className="op-cont">
                        <input id="title" className="form-price" type="text" ></input>
                            <Description />
                        </div>
                    </div>    
                <div/> 
            </>       
        )
    }
}

