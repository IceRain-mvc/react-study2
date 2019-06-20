import React from "react";

export default function connect(color) {
    return function (Component) {
        return class extends React.Component {
            render() {
                return (
                    <div style={this.state.style}>
                        <Component/>
                    </div>
                );
            }

            constructor(props) {
                super(props);
                this.state = {
                    style:{
                        backgroundColor: props.color || color || "green"
                    }
                }
            }

        }
    }
}
