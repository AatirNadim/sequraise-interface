import React from "react";

import { db } from "../firebaseConfig";

// import { getDatabase, ref, onValue} from "firebase/database";
import { getDatabase, ref, child, get } from "firebase/database";

export const Events = () => {

    const dbRef = ref(getDatabase());
    get(child(dbRef, ``)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    return (
        <div>
            <h1>Events</h1>
        </div>
    );
}

