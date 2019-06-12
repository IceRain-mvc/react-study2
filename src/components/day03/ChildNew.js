import React, {Component} from 'react';

class ChildNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    static getDerivedStateFromProps(nextProps){
        //将props中的值赋值给state
        return {user: nextProps.user}
    }


    render() {
        /*
        * 不能这么写 setState -->render
        * */
        // this.setState({
        //     user:this.props.user
        // });
        console.log("新儿子:", this.state.user);
        return (
            <div>

            </div>
        );
    }
}

export default ChildNew;
