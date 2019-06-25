import axios from "axios";
import {VIDEO_AUDIO} from "./api";

export default function request() {
    axios.get(VIDEO_AUDIO).then((res)=>{
        console.log(res.data);
    })
}
