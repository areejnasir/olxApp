import React from 'react';
// import FormPara from './FormPara';
import Label from './Label'

export default class Description extends React.Component{
    render(){
        return(
            <>
            <div className="Description">
                <Label value="Description *" />
                <textarea  id="descrp" cols="30" rows="10" className="form-des"></textarea>
            </div>    
            </>
        )
    }
}