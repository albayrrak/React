import { FETCH_SUCCESS } from "../types/api";

const fetch = (state) => {
    return {
        type: FETCH_SUCCESS,
        payload: state,
    }

}
export { fetch }