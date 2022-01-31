import axiosInstance from "../../services/AxiosInstance"
import {type} from '../types/types'




export const getUsersDetails =()=> async (dispatch) => {
    try {
        const {data} = await axiosInstance.get("api/users/")
        console.log("users details",data)
        dispatch({type:type.CREATE_USER, payload: data})
        return;
    } catch (error) {
        console.log(`error users details`, error)
    }
}