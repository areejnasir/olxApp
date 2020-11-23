import React from 'react';
import Label from './Label';

class SelectOption extends React.Component{
    render(){
        return(
            <>
                <div className="SelectOption-cont">
                    <div className="SelectOption-cont-content">
                        <Label value="Make *" />
                        <div  className="op-cont">
                        <input id="make" className="form-price" type="text" ></input>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}




export default SelectOption;