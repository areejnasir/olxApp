import React from 'react';
import SelectCategory from './SelectCategory';



class FormImgCont extends React.Component{
    render(){
        return(
            <>
                     <SelectCategory value="UPLOAD PHOTOS" />
                    <div className="form_content_cont">
                        <FormImg />
                    </div>
            </>
        )
    }
}
class FormImg extends React.Component{
    render(){
        return(
            <>
                <div className="form_img_cont-card">
                    <div className="uploadimg_cont">
                        <img className="uploadImg" src="https://simpleicon.com/wp-content/uploads/camera.png" />
                    </div>
                    <input id="img" type="file" className="upload"></input>

                </div>
            </>
        )
    }
}


export default FormImgCont;