import React, {Component} from 'react';
import Header from "../components/Header";

class Page extends Component {
    render() {
        return (
            <div>
                <Header/>
                <button onClick={()=>{
                    this.props.history.push("/pageDetail")
                }}>page跳转详情</button>

            </div>
        );
    }
}

export default Page;
