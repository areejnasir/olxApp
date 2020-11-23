import React from 'react';
import SelectCategory from './SelectCategory';
import Label from './Label';

export default class Price extends React.Component{
    render(){
        return(
            <>
                
                    <SelectCategory value="SET A PRICE" />
                    <div className="price-cont">
                        <Label value="Price *" />
                        <br></br>
                        <br></br>
                        <input id="price" className="form-price" type="text" ></input>

                    </div> 
                    
            </>
        )
    }
}