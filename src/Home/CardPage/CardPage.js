import React from 'react'
import SelectCategory from '../Form/SelectCategory'
import Label from '../Form/Label'




class CardPageCont extends React.Component{
    render(){
        return(
            <>
                <div className="CardPageCont">
                    <div className="leftSide">
                        <div className="CardPageImgCont">
                            <img />
                        </div>
                        <div className="CardPageDetailCont">
                        <SelectCategory value="DETAILS" />
                        <Label value="Make *" />
                        <hr></hr>
                        <div className="desCont">

                        <SelectCategory value="DESCRIPTION" />
                        </div>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="pricePageCont">
                        <div className="user">

                                <SelectCategory value="RS" />
                            </div>
                        </div>
                        <div className="pricePageCont">
                            <div className="user">

                                <SelectCategory value="USER" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CardPageCont;

