import React, {Component} from 'react';

class Son extends Component {
    state = {
        flag: false
    };


    shouldComponentUpdate(nextProps, nextState) {
        return this.props.secret !== nextProps.secret || this.state.flag !== nextState.flag;
    }

    render() {
        return (
            <div>
                {this.state.flag && <h2 style={{backgroundColor: "green"}}>更新了...</h2>}
                <h2>{this.props.secret}</h2>
            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        //记录什么呢?
        return prevProps.secret !== this.props.secret;

    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        //具体操作
        console.log(snapShot);
        if (snapShot) {
            this.setState({
                flag: true
            });

            setTimeout(() => {
                this.setState({
                    flag: false
                });
            }, 2000)
        }
    }

}

export default Son;
