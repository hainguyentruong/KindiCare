import axiosClient from "./axiosClient";
import { Redirect } from "react-router-dom";

const authApi = {
    logIn: async (credential, successCallback, failedCallback) => {
        return await axiosClient.post('client/auth/login', {
            email: credential.email,
            password: credential.password,
           
        }).then(successCallback)
            .catch(failedCallback)
    },
    // logOut: (successCallback) => {
    //     axiosadmin.post('auth/sign-out').then(successCallback);
    // }
}

export default authApi;
