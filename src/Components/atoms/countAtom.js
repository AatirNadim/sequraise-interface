import { atom } from "recoil";

export const countState = atom({
    key: 'countState', // unique ID (with respect to other atoms/selectors)
    default: {
        countBoys: 0,
        countGirls: 0,
    }, // default value (aka initial value)
});