import axios from 'axios';
import { API_NOTIFICATION_MESSAGE, SERVICE_URLS } from '../constants/config';

const API_URL = 'https://blogdb-5auf.onrender.com/';
//const API_URL = 'http://localhost:5000/';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000, 
    headers: {
        "content-type": "application/json" 
    }
});

axiosInstance.interceptors.request.use(
    function (config){
        return config
    },
    function(error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        return processResponse(response)
    },
    function (error){
        return Promise.reject(processError(error));
    }
)

const processResponse = (response) => {
    if (response?.status === 200){
        return {isSuccess:true, data:response.data}
    }else{
        return{
            isFailure:true,
            status:response?.status,
            msg:response?.msg,
            code:response?.code
        }
    }
}

const processError = (error) => {
    if(error.response){ 
        // console.log('Error in response:', error.toJSON() );
        return{
            isError:  true,
            msg: API_NOTIFICATION_MESSAGE.responseFailure,
            code:error.response.status
           }

    } else if (error.request){
        // console.log('Error in request:', error.toJSON() );
        return{
            isError:  true,
            msg: API_NOTIFICATION_MESSAGE.requestFailure,
            code:error.request.status
           }

    }else{
       // console.log('Error in network:', error.toJSON() );
        return{
            isError:  true,
            msg: API_NOTIFICATION_MESSAGE.networkError,
            code:''
           }

    }

}

const API = {}

for (const [key, value] of Object.entries(SERVICE_URLS)){
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method:value.method,
            url:value.url,
            data:body, 
            responseType:value.responseType,
            onUploadProgress:function(progressEvent){
                if(showUploadProgress){
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress:function(progressEvent){
                if(showDownloadProgress){
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showDownloadProgress(percentCompleted);
                }
            },
        }) 
}
export {API};