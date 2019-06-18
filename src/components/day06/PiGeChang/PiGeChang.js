import React, {Component, Fragment} from 'react';
import Item from "./Item";
import watcher from "./watcher/Watcher";

class PiGeChang extends Component {

    state = {
        list: [
            {id: 1, title: "江南皮革厂倒闭了,老板和小姨子跑了", star: 1, img: "/title1.jpg"},
            {id: 2, title: "江南皮革厂倒闭了,老板和小姨子她妹妹跑了", star: 1, img: "/title1.jpg"},
            {id: 3, title: "江南皮革厂倒闭了,老板和小姨子她嫂子跑了", star: 1, img: "/title1.jpg"},
            {id: 4, title: "江南皮革厂倒闭了,老板和小姨子她姐姐跑了", star: 1, img: "/title1.jpg"}
        ],
        starTotalNum: 0
    };

    componentDidMount() {
        watcher.subscribe("star", this.handleCallBack.bind(this));
    }

    handleCallBack(star) {

        let starTotalNum = this.state.starTotalNum;
        this.setState({
            starTotalNum: ++starTotalNum

        })
    }

    render() {
        return (
            <Fragment>
                <h2>点赞总数:{this.state.starTotalNum}</h2>

                <ul>
                    {this.state.list.map((item) => {
                        return <Item key={item.id} {...item}/>
                    })}
                </ul>
            </Fragment>
        );
    }
}

export default PiGeChang;
