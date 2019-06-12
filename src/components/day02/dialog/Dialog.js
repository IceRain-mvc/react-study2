import React, {Component} from 'react';

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            name:"aaa"
        }
    }

    //vue mounted
    componentDidMount() {
        console.log("页面渲染完成之后执行")
        // this.setState({
        //     type:this.props.type
        // })
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     this.setState({
    //         type: nextProps
    //     })
    // }
    static getDerivedStateFromProps(p){

        return p;
    }

    render() {
        // console.log("props",this.props.type);
        let {type,name} = this.state;

        console.log(type,name);
        return (
            <>
                {this.state.type && <div>
                    <div>头部</div>
                    <div>
                        {this.props.type === 1 ? <div>alert</div> :
                            (this.props.type === 2 ? <div><input type="text"/></div> : <div>确认</div>)}
                    </div>
                    <div>
                        <button>取消</button>
                        <button onClick={() => {
                            this.setState({
                                type: null
                            })
                        }
                        }>确定
                        </button>
                    </div>
                </div>
                }
            </>
        );
    }
}

export default Dialog;
