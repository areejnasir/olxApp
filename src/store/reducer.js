// import { connect } from "react-redux"


const INITIAL_STATE = {
    users: [
        {
            email: "areejnasir@gmail.com",
            userName: "Areej",
            password: "0000000"
        }
    ]
}

// const state = INITIAL_STATE;

export default (state = INITIAL_STATE , action) => {
    console.log("action ===>",action )
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                users: [...state.users , action.payload]
                
            })
    }
    return state

} 


