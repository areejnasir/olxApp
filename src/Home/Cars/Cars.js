import React from 'react';
import './CarCont.css'
import Cards from '../Cards/Cards'
import FilterCont from './Filter'



class CarCont extends React.Component{
    render(){
        return(
            <>
                <div className="Car_Cont">
                    <div className="Car_Content_Cont">
                        <FilterCont />
                        <Cards />
                    </div>
                </div>
            </>
        )
    }
}

export default CarCont;