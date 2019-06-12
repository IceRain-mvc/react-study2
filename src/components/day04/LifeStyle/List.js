import React, {Component} from 'react';
import Item from "./Item";

class List extends Component {

    /*
    * ref
    * 1:创建一个ref对象
    * 2:div  加ref属性  = {this.listRef}
    * 3:操作Dom
    * */

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.list.length !== nextProps.list.length || this.state.snapShot !== nextState.snapShot;
    }

    constructor(props) {
        super(props);

        //1:
        this.listRef = React.createRef();
    }


    state = {
        snapShot: null
    };


    render() {
        console.log("child render");

        return (
            <div ref={this.listRef}>

                {this.state.snapShot &&
                <div style={{backgroundColor: "green", color: "#ffffff"}}>数据改变了{this.state.snapShot}条</div>}

                {
                    this.props.list.map((item, index) => {
                        return <Item key={index} {...item}/>
                    })
                }
            </div>
        );
    }

    /*
    * 快照
    * */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        let current = this.listRef.current;
        console.log(current.scrollHeight);

        if (prevProps.list.length !== this.props.list.length) {
            return Math.abs(prevProps.list.length - this.props.list.length)
        }
        return null;
    }

    componentDidUpdate(p, s, snapShot) {
        // 0
        if (snapShot) {
            this.setState({
                snapShot: snapShot
            });

            setTimeout(() => {
                this.setState({
                    snapShot: null

                })
            }, 2000)
        }

    }

}

export default List;
