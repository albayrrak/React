import { FETCH_SUCCESS, FETCH_ERROR } from "../types/api";

const initialState = {
    data: [],
    loading: false,
    message: ''
}
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: true
            }
            break;
        default:
            return state
            break;
    }
}

export default reducers