import React, {Component} from 'react';

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }

    //vue mounted
    componentDidMount(){
        console.log("页面渲染完成之后执行")
        // this.setState({
        //     type:this.props.type
        // })
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("更新?");
        return true;
    }

    render() {
        // console.log("props",this.props.type);
        let {type} = this.state;

        console.log(type);
        return (
            <>
                {this.props.type && <div>
                    <div>头部</div>
                    <div>
                        {this.props.type === 1 ? <div>alert</div>:
                            (this.props.type === 2 ? <div><input type="text"/></div>:<div>确认</div>)}
                    </div>
                    <div>按钮</div>
                </div>
                }
            </>
        );
    }
}

export default Dialog;
