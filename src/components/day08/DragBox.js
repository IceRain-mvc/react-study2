import React, {Component} from 'react';

/*
* 1:方向
* 2:初始位置
* 3:父组件 获取拖拽停止的位置  回调(接口)
* */
class DragBox extends Component {

    state = {
        topChild: "100px",
        leftChild: "100px",
    };

    componentWillMount(nextProps) {
        this.setState({
            topChild: nextProps.top,
            leftChild: nextProps.left,
        })
    }

    /*
    * 拖拽:
    *   1:按下  oXX
    *   2:移动  document
    *   3:抬起  document 清空
    *
    * */
    render() {
        let {
            topChild,
            leftChild
        } = this.state;
        // let {top,left} = this.props;
        return (
            <div style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red",
                position: "absolute",
                topChild, leftChild
            }} onMouseDown={this.onMouseDown.bind(this)}>

            </div>
        );
    }

    onMouseDown(e) {
        //1:移动
        console.log(e);
        let disY = e.clientY - e.target.offsetTop;
        let disX = e.clientX - e.target.offsetLeft;


        document.onmousemove = (ev) => {
            let left = ev.clientX - disX;
            let top = ev.clientY - disY;

            console.log(left, top);
            // let defaultStyleNew = this.state.defaultStyle;
            // defaultStyleNew.left = left +"px";
            // defaultStyleNew.top = top +"px";
            this.setState({top, left});
            this.props.drag(this.props.child,top, left)
        };

        //2:抬起
        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

}

export default DragBox;
