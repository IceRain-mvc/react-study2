let userReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_USER":
            console.log(action.user);
            // state = action.data;
            state = action.user ? action.user : {};
            return {...state};
        case "DEL_USER":
            break;
        default:
            return {...state};
    }
};
export default userReducer;
