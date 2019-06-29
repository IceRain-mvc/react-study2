import axios from "axios";

export default function request(url) {
    return function (next) {
        axios.get(url).then((res)=>{
            next({type:"SAVE_ALL", data: res.data.qTypeQs})
        })
    }
}

/*
* 调用   request()()  request()  request
*
* */
