import Look from "../views/Look";
import Song from "../views/Look/Song";
import Story from "../views/Look/Story";
import Cartoon from "../views/Look/Cartoon";
import Listen from "../views/Listen";
import BabySong from "../views/Listen/BabySong";
import BabyStory from "../views/Listen/BabyStory";
import Me from "../views/Me";

const routes = [
    {
        path: "/look", component: Look,
        children: [
            {path: "/look/song", component: Song},
            {path: "/look/story", component: Story},
            {path: "/look/cartoon", component: Cartoon},
            {path: "/look", redirect: "/look/song"}
        ]
    },
    {
        path: "/listen", component: Listen, children: [
            {path: "/listen/song", component: BabySong},
            {path: "/listen/story", component: BabyStory},
            {path: "/listen", redirect: "/listen/song"}

        ]
    },
    {path: "/me", component: Me},
    {path: "/", redirect: "/look"}
];

export default routes;
