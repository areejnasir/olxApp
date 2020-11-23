import React, { Component } from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Body from './Body'
import {Ad} from './Home/AdCateg/Ad';
import FormContainer from './Home/Form/Form';
import CarCont from './Home/Cars/Cars';
import CardPageCont from './Home/CardPage/CardPage';


class AppRouter extends Component{
    render(){
        return (
            <Router>
                <Route exact path="/" component={Body} />
                <Route exact path="/post" component={Ad}/>
                <Route exact path="/list" component={FormContainer}/>
                <Route exact path="/filter" component={CarCont}/>
                <Route exact path="/card" component={CardPageCont}/>
                
            </Router>
        )
    }
}

export default AppRouter;