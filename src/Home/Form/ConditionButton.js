import React from 'react';
import Label from './Label';
import  Buttons from './Buttons';




export default class ConditionButton extends React.Component{
    render(){
        return(
            <>
                 <div className="SelectOption-cont">
                    <div className="SelectOption-cont-content"></div>
                        <Label value="Condition *" />
                        <div className="op-cont">
                        <input id="condition" className="form-price" type="text" ></input>
                        </div>
                    </div>    
                <div/> 
            </>       
        )
    }
}