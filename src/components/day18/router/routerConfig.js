import * as React from "react";

const Home = React.lazy(() => import("../Home"));
const Shop = React.lazy(() => import("../Shop"));
const My = React.lazy(() => import("../My"));

let routes = [
    {
        path: "/home",
        component: Home
    }, {
        path: "/shop",
        component: Shop
    }, {
        path: "/my",
        component: My
    },
];
export default routes
