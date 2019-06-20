import React, {Component} from 'react';
import Header from "../components/Header";
import CreateModal from "../hoc/Cover";


function Wrap(props) {
    return <div>
        <h2>确定删除么</h2>
        <button>确定</button>
        <button>取消</button>
    </div>
}

Wrap = CreateModal(Wrap);

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>

                <button onClick={()=>{

                }}>弹弹弹啊</button>

                <Wrap />
                <button onClick={() => {
                    this.props.history.push("/homeDetail")
                }}>Home跳转详情
                </button>
            </div>
        );
    }
}

export default Home;
