function manageReviews(state = [], action){
    switch(action.type) {
        case "GET_REVIEWS":
            return state = action.reviews
        case "ADD_REVIEW":
            return [...state, action.review]
        default:
            return state;
    }
}

export default manageReviews; 