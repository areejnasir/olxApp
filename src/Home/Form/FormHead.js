import React from 'react';
import SelectCategory from './SelectCategory';
import ParaInPara from './ParaInPara';
import {ButtonMore} from '../Slider/Slider';

export default class FormHead extends React.Component{
    render(){
        return(
            <>
                <div className="form-head-cont">
                    <SelectCategory value="SELECT CATEGORY" />
                    <div className="para-button">
                        <ParaInPara value="Mobile" /><ButtonMore value="Change" />
                    </div> 
                    
                </div>
            </>
        )
    }
}