import mock from "../mock.js";

export default function filter(str) {
    return mock.filter((item, index) => item.name.includes(str));
}
