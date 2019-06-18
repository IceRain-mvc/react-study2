import Zhen from "../views/Zhen";
import Ke from "../views/Ke";
import Xue from "../views/Xue";
import Re from "../views/ke/Re";
import Xiang from "../views/ke/Xiang";
import Detail from "../views/Detail";

export const routes = [
    {path: "/zhen", component: Zhen},
    {
        path: "/ke", component: Ke,
        children: [
            {path: "/ke/re", component: Re},
            {path: "/ke/xiang", component: Xiang},
            {path: "/ke", redirect: "/ke/re"}
        ]
    },
    {path: "/xue", component: Xue},
    {path: "/detail/:id", component: Detail},
    {path: "/", redirect: "/zhen"},
];
