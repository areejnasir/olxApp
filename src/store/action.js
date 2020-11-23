
// import { connect } from 'react-redux';
import firebase from '../firebase'
import CardComponent from '../Home/CardComponent/CardCom'

const facebook_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;

            let user_data = {
              name: user.displayName,
              email: user.email,
              url: user.photoURL
            }
            let login = document.getElementById("login").innerHTML = user_data.name
            let NameH = document.getElementById("NameH").value = user_data.name
            let emailH = document.getElementById("emailH").value = user_data.email

            console.log("user===>", user);
            

          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.message);
          });
    }
}


    const select_func = () => {
      const make = document.getElementById("make").value;
      const title = document.getElementById("title").value;
      const descrp = document.getElementById("descrp").value;
      const price = document.getElementById("price").value;
      const img = document.getElementById("img").value;
      const number = document.getElementById("number").value;
      const NameH = document.getElementById("NameH").value;
      const emailH = document.getElementById("emailH").value;
      const condition = document.getElementById("condition").value;





      return (dispatch) => {

        const inputVals = {
          makeVal: make,
          titleVal: title,
          descrpVal: descrp,
          priceVal: price,
          img: img,
          num: number,
          name: NameH,
          email: emailH,
          cond: condition
        }

        firebase.database().ref('Data').set(inputVals);
        <CardComponent />


        
        
        
        
      }
    }


            firebase.database().ref('Data').on("child_added" , (data)=> {
              console.log("firebaseData ===>",data.val())

            })



export  {
    facebook_login,
    select_func

}