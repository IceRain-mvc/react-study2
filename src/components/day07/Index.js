import React, {Component} from 'react';
import Dialog from "./dialog/Dialog";

class Index extends Component {

    /*
    * styleDialog:{}, header:"头部", content:"内容", btnType:1, flag:弹框的内容
    *
    * */
    state = {
        flag1: false,
        dialog:{
            styleDialog:{}, header:"头部", content:"内容", btnType:2, flag:5
        },
        name:1
    };

    sure() {
        this.setState({
            flag1: false
        })
    }

    cancel() {
        this.setState({
            flag1: false
        })
    }
    render() {
        let {flag1,dialog} = this.state;
        return (
            <div>

                <button onClick={()=>{
                    this.setState({
                        flag1: true
                    })
                }}>弹框</button>
                {flag1&&<Dialog {...dialog} sure={this.sure.bind(this)} name={this.state.name}  cancel={this.cancel.bind(this)}/>}
            </div>
        );
    }
}

export default Index;
