// import mock from "../mock.js";

export default function filter(mock,str) {

    return mock.filter((item, index) => {
        if (!str) {
            return false;
        }
        return item.name.includes(str);
    })
}
