import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import RouterView from "./router/RouterView";
import routes from "./router/config";


class Baby extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterView routes={routes}/>
                {/*Switch>Route{path  component}+Reditect*/}
            </BrowserRouter>
        );
    }
}

export default Baby;
