import React from 'react'
import SelectCategory from './SelectCategory';
import Label from './Label';

class LocationCont extends React.Component{
    render(){
        return(
            <>
                <SelectCategory value="CONFIRM YOUR LOCATION" />
                    <div className="price-cont">
                        <Label value="State / City *" />
                        <br></br>
                        <br></br>
                        <input id="location" className="form-price" type="text" ></input>

                    </div>
                
            </>
        )
    }
}



export default LocationCont;