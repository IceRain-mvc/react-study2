import axios from "axios";
import {VIDEO_AUDIO} from "./api";

export function request(next) {
    axios.get(VIDEO_AUDIO).then((res) => {
        /*dispatch({})*/
        /*存储数据*/
        next({type: "ADD_OBJ", data: res.data})
        // next()

    })
}

export function requestDetail(id, fn) {
    /*/api/url/index?movid=2596&urlid=42061&app=fytv&device=android&version=3.0.2*/
    axios.get("api/api/url/index?movid=2596&urlid=" + id + "&app=fytv&device=android&version=3.0.2").then((res) => {
        fn && fn(res.data);
    })
}
