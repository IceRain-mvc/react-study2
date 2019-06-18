import React, {Component} from 'react';
import watcher from "./watcher/WatcherInsTance";

class Fatcher extends Component {
    /*
    * 发布者
    * */
    render() {
        return (
            <div>
                <button onClick={()=>{
                    //发布
                    watcher.publish("son","儿子!吃饭了!!!!");
                }}>通知儿子</button>

            </div>
        );
    }


    wangwang() {
       //给狗狗食物
       // 发布
       //  console.log("aaa");

        watcher.publish("dog","香肠");
    }

    componentDidMount(){
        watcher.subscribe("father",this.wangwang.bind(this))
    }
}

export default Fatcher;
