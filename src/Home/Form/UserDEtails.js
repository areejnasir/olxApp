import React from 'react'
import SelectCategory from './SelectCategory';
import Label from './Label';
// import {connect} from 'react-redux'

class UserDetails extends React.Component{
    render(){
        return(
            <>
                <SelectCategory value="REVIEW YOUR DETAILS" />
                <div className="price-cont">
                        <Label value="Name *" />
                        <input className="userName" id="NameH"></input>
                        <br></br>
                        <br></br>
                        <Label value="Email *" />
                        <input className="userName" id="emailH"></input>
                        <br></br>
                        <br></br>
                        <Label value="Phone Number *" />
                        <input id="number" className="form-price" type="text" ></input>
                        

                    </div>
            </>
        )
    }
}




export default UserDetails;