import React from 'react';


class FilterCont extends React.Component{
    render(){
        return(
            <>
                <div className="Filter_Cont">
                    <FilterHead />
                    <FilterCat />
                    <FilterLocation />
                </div>
            </>
        )
    }
}
class FilterHead extends React.Component{
    render(){
        return(
            <>
                <div className="Filter_Head">
                    <FilterHeading value="Cars" />
                    <FilterCatPara value="Filter" />
                    
                </div>
            </>
        )
    }
}
class FilterHeading extends React.Component{
    render(){
        return(
            <>
                <h4 className="filterH4">{this.props.value}</h4>
            </>
        )
    }
}
class FilterCat extends React.Component{
    render(){
        return(
            <>
                <div className="Filter_Head">
                    <FilterHeading value="CATEGORY" />
                    <FilterCatPara value="All" />
                </div>
            </>
        )
    }
}
class FilterLocation extends React.Component{
    render(){
        return(
            <>
                <div className="Filter_Head">
                    <FilterHeading value="CATEGORY" />
                    <FilterCatPara value="Palistan" />
                </div>
            </>
        )
    }
}
class FilterCatPara extends React.Component{
    render(){
        return(
            <>
                <p className="filter">{this.props.value}</p>
            </>
        )
    }
}

export default FilterCont;