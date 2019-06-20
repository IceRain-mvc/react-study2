import React from "react";

export default function Intercept(Component) {

    return class extends React.Component {

        componentWillMount() {
            if (localStorage.getItem("token")) {

            } else {
                this.props.history.replace("/login");
            }
        }
        render() {
            return (
                <div>

                    <Component {...this.props}/>

                </div>
            );
        }
    }
}
