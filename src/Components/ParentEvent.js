import { child, get, getDatabase, ref, set } from 'firebase/database';
import React, { useEffect } from 'react'
import { Events } from './Events'

const ParentEvent = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);


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
        }).finally(() => {

            setLoading(false);
        });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (

                <div><Events props={data} /></div>)
            }
        </>
    )
}

export default ParentEvent