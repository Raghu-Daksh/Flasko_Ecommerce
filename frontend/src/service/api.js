import axios from 'axios';

export const registerAuthentication = async (data)=>{
    console.log(data);
    try {
       return await axios.post('https://flasko-ecommerce.onrender.com/register', data);   
    } catch (error) {
        console.log("error while calling api", error);
    }
}
export const loginAuthentication = async (data)=>{
    try {
     return await axios.post('https://flasko-ecommerce.onrender.com/login', data);   
    } catch (error) {
        console.log("error while calling api", error);
        return error.response;
    }
} 

export const payUsingPaytm =async (data)=>{
    try {
       let response =  await axios.post('https://flasko-ecommerce.onrender.com/payment', data);
        return response.data;
    } catch (error) {
        console.log("error while calling payment api", error);
    }
}