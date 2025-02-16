export const API_NOTIFICATION_MESSAGE =  {
loading:{
    title:'Loading...',
    Massege:'Data is being loaded, please wait',
},
success:{
    title:'Success',
    Massege:'Data successfully loaded',
},
responseFailure:{
    title:'Error',
    Massege:'An Error, please try again',
},
requestFailure:{
    title:'Error',
    Massege:'An Error while passing data',
}, 
networkError:{
    title:'Error',
    Massege:'please check you network',
},

}

export const SERVICE_URLS = {
    userSignup: {url:'/signup', method:'POST'},
    userLogin: {url:'/login', method:'POST'}
}