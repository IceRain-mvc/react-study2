import React from "react";

function hocComponent(Component,color) {
    return class Hoc extends React.Component{
        constructor(props) {
            super(props);

            console.log("高阶组件", props);
            this.state = {
                name: "zhangsna",
                style:{
                    backgroundColor: props.color||color || "green"
                }
            }
        }

        render() {
            return (
                <div style={this.state.style}>
                    <Component {...this.props} person={"阿健"} />
                </div>
            );
        }
    }
}

export default hocComponent;
