import React from 'react';
import './Form.css';
import PostNowBtn from './PostNowBtn'
import {HeadingTwo}  from '../AdCateg/Ad';
import FormHead from './FormHead';
import SelectCategory from './SelectCategory';
import SelectOption from './SelectOption';
import ConditionButton from './ConditionButton';
import AdTitle from './AdTitle';
import Header from '../Head/Head';
import Price from './Price';
import FormImgCont from './FormImgs'
import LocationCont from './Location'
import UserDetails from './UserDEtails'



class FormContainer extends React.Component{
    render(){
        return(
            <> 
                <div className="form">
                <Header />
                <HeadingTwo />
                <div className="form-cont">
                    <FormHead />
                    <div className="include-cont">
                        <SelectCategory value="INCLUDE SOME CATEGORY" />
                        <SelectOption />
                        <ConditionButton />
                        <br></br>
                        <br></br>
                        <br></br>
                        <AdTitle />
                        {/* <Description /> */}

                    </div>
                    <div className="form-price-cont">
                    <Price />
                    </div>
                    <div className="form_img_cont">
                    <FormImgCont  />
                    </div>
                    <div className="form_location_cont">
                    <LocationCont  />
                    </div>
                    <div className="form_UserDetails_cont">
                    <UserDetails />
                    </div>
                    <PostNowBtn  />


                </div>
                </div>
            </>
        )
    }
}



export default FormContainer;