
import './Ad-post.css';
import React from 'react';
import Header from '../Head/Head';
// import Copywrite from '../Copywrite/Copywrite';
import {Link} from 'react-router-dom';


 function Ad() {
    return(
        <div className="post-Container">
            <Header />
            <HeadingTwo />
            <div className="ad-cont">
                <h3>CHOOSE A CATEGORY</h3>
                <div className="Categroy-cont">
                    <ul>
                        <Link to = "/list"> <PostList proImg ="https://cdn.pixabay.com/photo/2017/01/13/01/22/mobile-1976104_640.png" value ="Mobiles" arrImg ="https://many-worlds.es/web/images/arrow_der.png" /> </Link>
                        <Link to = "/list"> <PostList proImg ="https://cdn.pixabay.com/photo/2017/01/13/01/22/mobile-1976104_640.png" value ="Cars" arrImg ="https://many-worlds.es/web/images/arrow_der.png" /> </Link>
                        <Link to = "/list"> <PostList proImg ="https://cdn.pixabay.com/photo/2017/01/13/01/22/mobile-1976104_640.png" value ="Motorcycle" arrImg ="https://many-worlds.es/web/images/arrow_der.png" /> </Link>

                    </ul>
                </div>
            </div>
        </div> 
    );
}


class HeadingTwo extends React.Component{
    render(){
        return(
            <>
                <h2 >POST YOUR AD</h2>
            </>
        )
    }
}

class PostList extends React.Component{
    render(){
        return(
            <>
                <li className="post-li"><img className="pro-img" src={this.props.proImg} /><p className="pi">{this.props.value}</p><img className="arr-img" src={this.props.arrImg} /></li>
            </>
        )
    }
}

export {
    Ad,
    HeadingTwo
} 