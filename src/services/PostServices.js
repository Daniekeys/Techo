import axiosInstance from "./AxiosInstance";
import {useContext} from 'react'
import axios from 'axios'


// import AppContext from '../context/app-context'

// export const HandleSignup = () => {
//     const {login, setLogin,values,auth,setAuth} = useContext(AppContext);
    

//     // e.preventDefaults();
//     axiosInstance.post('/api/users/auth/register/', values).then((res) => {
//         console.log(res)
        
//     })

// }


export const userLogin =  (post) => {
   
    return axios.post('api/users/auth/login/', post)
}

export const userRegister = async (info) => {
    try{
        return axios.post('api/users/auth/register/', info)

    } catch(error){
        console.log(`error`, error)
    }
}

export const getCountry = async () => {
    
    const res =  await axiosInstance.get('api/users/countries')
    if(res.status) {
        const output =  res.data.results;
        return output;
    }
}
export const postQuestion = async (info) => {
    const res =  await axiosInstance.post('api/question/', info)
    if(res.status) {
        const output =  res.data.results;
        return output;
    }
}


export const askQuestion = async (data) => {
    const res =  await axiosInstance.post('api/question/', data)
    return res;
}

