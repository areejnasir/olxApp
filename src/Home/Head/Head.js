
import React from 'react';
import { connect } from 'react-redux'
import HeadButtons from './LoginBtn'




class HeadCcont extends React.Component{
  render(){
    console.log("props===>" ,this.props)
    return(
      <>
        <div className="Header">
            <div className="Head-content-cont">
              <Logo />
              <InputOne />
              <InputTwo />
              <HeadButtons />

            </div>
          </div>
      </>
    )
  }
}


  class InputOne extends React.Component{
    render(){
      return(
        <div className="Header-input-one"><div className="search-one"><img className="one-search-img" src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png" alt="search" /></div><input placeholder="Location" className="input-one" type="text"></input></div>
        
      )
    }
  }
  class InputTwo extends React.Component{
    render(){
      return(
        <div className="Header-input-two"><input className="input-two" type="text" placeholder="Find Mobile , Cars and more..."></input><div className="search"><img className="search-img" src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png" alt="A B C"  /></div></div>

      )
    }
  }


  class Logo extends React.Component{
    render(){
      return(
        <>
          <div className="Header-logo"><img className="logo-img" src="https://tiptapp.com/img/logo/olx-logo-round.png" alt="logo" /></div>
        </>
      )
    }
  }

 

const mapStateToProps = (state) => ({
  users: state.users,
  FullName: "AreejNasir"
})


 export default connect(mapStateToProps , null)(HeadCcont) ;