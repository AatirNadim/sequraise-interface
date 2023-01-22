import React from "react";

import { db } from "../firebaseConfig";

// import { getDatabase, ref, onValue} from "firebase/database";
import { getDatabase, ref, child, get, set } from "firebase/database";
import Display from "./Display";
import ProfileCard from "./profileCard";

export const Events = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [selected, setSelected] = React.useState(null);

    const getData = () => {
        setLoading(true);
        let arr = [];
        const dbRef = ref(getDatabase());
        get(child(dbRef, `/`)).then((snapshot) => {
            if (snapshot.exists()) {
                const obj = snapshot.val();
                arr = Object.entries(obj).map(
                    ([key, value]) => ({ key, value })
                );
                setData(arr);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        setLoading(false);

    }




    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                height: "100%",
                padding: "0",
            }}
        >
            <div
                style={{
                    flex: "65%",

                }}
            >
                {selected ?
                    <ProfileCard
                        key={selected?.key}
                        props={selected}
                    /> : <div>No data currently</div>
                }
            </div>
            <div
            style={{
                flex: "35%",
                backgroundColor: "#d9d9d9",
                padding: "0 10px",
            }}
            >
                <div
                    style={{
                        
                        // border: "1px solid black",
                        height: '93%',
                        padding: "0 20px",
                        // boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
                        // borderRadius: "2px",
                        overflow: "auto",
                        marginTop: "20px",
                        boxSizing: "border-box",
                        backgroundColor: "#fff",
                        // paddingTop: "2px"
                    }}
                >
                    <div>
                        <h1
                            style={{
                                marginTop: "12px",
                                fontSize: "3vh",
                            }}
                        >Events</h1>
                        <img src="" alt="" />

                    </div>
                    <button onClick={getData}>Get Data</button>
                    {loading ? (<div>Loading...</div>) : (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                                gap: "10px",
                                marginTop: "10px"
                            }}
                        >
                            {
                                data?.map((item) => (
                                    <div
                                        style={{

                                        }}
                                        onClick={() => {
                                            setSelected(item)
                                        }}
                                    >
                                        <Display key={item.key} props={item} />
                                    </div>
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

