import { type } from "../types/types";

const initial = {
    user :null
};

const userReducer = (state = initial, action) =>{
    switch (action.type) {
        case type.CREATE_USER:
            return{
                ...state,
                user:action.payload
            }
    
        default:
            return state 
    }
}

export default userReducer