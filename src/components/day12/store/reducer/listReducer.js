let listReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_LIST":
            state = action.data?action.data:[];
            return [...state];
        default:
            return [...state];
    }
};
export default listReducer;
