import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
/*
* 没有路由对象
* 1:传过来
* 2:withRouter
* */
class Item extends Component {

    jumpToDetail() {
        this.props.history.push("/detail",this.props.downurl);
        //拦截
    }

    render() {

        console.log(this.props);

        let {pic, name, playcnt} = this.props;
        return (
            <li onClick={this.jumpToDetail.bind(this)}>
                <img src={pic} alt={pic}/>
                <h2>{name}</h2>
                <h2>播放量:{playcnt}</h2>
            </li>
        );
    }
}
// this.props
// 高阶组件 : 组件作为参数  返回一个新的组件
Item = withRouter(Item);

export default Item;
