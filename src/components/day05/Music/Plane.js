import React, {Component, Fragment} from 'react';
import Btn from "./Btn";

class Plane extends Component {
    render() {
        return (
            <div>
                {/*
                    遍历
                */}

                {
                    this.props.bank.map((item, index) => {
                        return <Fragment key={item.id}>
                            {index % 3 === 0 ? <br/> : ""}
                            <Btn volume={this.props.volume} {...item} onShow={this.props.onShow}/>
                        </Fragment>;
                    })

                }
            </div>
        );
    }
}

export default Plane;
