import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {facebook_login} from '../../store/action'
// import facebook_login from '../../store/action'


class HeadButtons extends React.Component{
    
    render(){
      
      return(
        <div className="Header-buttons"> <button id="login" onClick={()=> this.props.data()} className="login">Login</button>  <Link to = "/post"><button className="sell">SELL</button></Link></div>
      )
    }
  }


  
  
  const mapDispatchToProps = (dispatch) => ({
      data : () => dispatch(facebook_login()),
  })

  export default connect(null , mapDispatchToProps)(HeadButtons) ;
//   export default HeadButtons ;