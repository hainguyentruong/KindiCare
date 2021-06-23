import axiosClient from "./axiosClient";
const homeapi = {
    getAll: () =>{
        const url = `v1/client/centres?limit=4&offset=4&longitude=151.2070481&latitude=-33.8615324`
        return axiosClient.get(url);
    },
    getRecent: () =>{
        const url = `v1/client/centres/recent`;
        return axiosClient.get(url);
    }
}