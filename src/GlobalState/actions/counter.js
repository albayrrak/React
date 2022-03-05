import { SAYAC_ARTTIR, SAYAC_AZALT, SAYAC_PAYLOAD } from "../types/counter";

const artir = () => {
    return { type: SAYAC_ARTTIR }
}

const azalt = () => {
    return { type: SAYAC_AZALT }
}

const incre = (sayi) => {
    return {
        type: SAYAC_PAYLOAD,
        payload: sayi
    }
}

export { artir, azalt, incre }