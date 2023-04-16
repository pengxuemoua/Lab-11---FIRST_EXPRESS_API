// this file will talk to the express server

import axios from 'axios' 

let base = 'api' // request will be made to the /api route 

export default { // provides a funcation with getHelloMessage
    getHelloMessage() {
        // axios call, makes get() request to the api. 
        return axios.get(base).then(response => {
            return response.data
        })
    }
}



