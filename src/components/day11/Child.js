import React, {Component} from 'react';
import connect from "./connect";


class Child extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={()=>{

                }}>弹弹弹</button>
                儿子
            </div>
        );
    }
}

/*
* withRouter()
* punchline
* */

// Child = hocComponent(Child, "pink");
Child = connect("pink")(Child);
/*
* Child = connect("pink")(Child)
*
* connect()()
* */

export default Child;
