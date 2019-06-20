import React, {Component} from 'react';
import axios from "axios";
import Item from "../../components/Item";

class Song extends Component {

    state = {
        babySongList : []

    }

    componentDidMount() {

        /*
        * npm i jsonp --save
        *
        * jsonp("",{},(res)=>{}) : content-type:application/json
        * */

        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=29").then((res) => {
            this.setState({babySongList:res.data.list})
        }).catch((err) => {
            console.error(err)
        })
    }

    render() {
        let {babySongList} = this.state;
        return (
            <ul>
                {
                    babySongList.map((item)=>{
                        return item.pic&&<Item key={item.id} {...item}/>
                    })
                }
            </ul>
        );
    }
}

export default Song;
