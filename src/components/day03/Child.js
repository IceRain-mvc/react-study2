import React, {Component} from 'react';

class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "zhangsan"
        };
        this.clickChangeState = this.clickChangeState.bind(this);
    }

    clickChangeState() {
        this.setState({
            name: "zhangsan"
        })
    }


    /*--------------------更新-----------------------*/
    componentWillReceiveProps() {
        //component组件 Will 将要 Receive接收  props
        console.log("componentWillReceiveProps")
    }

    shouldComponentUpdate(nextProps,nextState) {
        //shouldComponentUpdate ?
        console.log("shouldComponentUpdate");
        console.log("1:",this.props.userId);
        console.log("2:",nextProps.userId);
        return nextProps.userId !== this.props.userId || nextState.name !== this.state.name;
    }

    componentWillUpdate() {
        //组件将要更新
        console.log("componentWillUpdate")

    }

    render() {
        console.log("子组件render");
        return (
            <div>
                <button onClick={this.clickChangeState}>改变state</button>
            </div>
        );
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

}

export default Child;
