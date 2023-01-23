
import { atom } from "recoil"

export const filterState = atom({
    key: 'filterState',
    default: {
        location: "ALL",
        gender: "ALL",
        date: "ALL"
    }

});