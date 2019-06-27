
import axios from "axios"


export default  function request(next) {
    axios.get("http://localhost:3000/all").then((res)=>{

        // console.log(res.data);
        next({type:"ADD_ALL_DATA", data: res.data});
    })
}
