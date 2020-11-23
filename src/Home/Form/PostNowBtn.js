import React from 'react';
import './Form.css';
import {connect} from 'react-redux';
import {select_func} from  '../../store/action'

class PostNowBtn extends React.Component{
   
    render(){
        return(
            <>
                <button type="button" onClick={()=> this.props.set_data_firebase()} className="btn">Post Now</button>
                {/* <button type="button" onClick={this.select_func} className="btn">Post Now</button> */}
                
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    set_data_firebase: () => dispatch(select_func())
})

export default connect(null,mapDispatchToProps)(PostNowBtn)
// export default PostNowBtn