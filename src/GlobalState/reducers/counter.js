import { SAYAC_ARTTIR, SAYAC_AZALT, SAYAC_PAYLOAD } from '../types/counter'

const default_state = 0

const reducers = (state = default_state, action) => {
    switch (action.type) {
        case SAYAC_ARTTIR:
            return state + 1
            break;
        case SAYAC_AZALT:
            return state - 1
            break;
        case SAYAC_PAYLOAD:
            return state + action.payload
            break;
        default:
            return state
            break;
    }
}

export default reducers