import React from 'react'
import { getStorage, ref, getDownloadURL } from "firebase/storage"

const ProfileCard = ({ props }) => {
    console.log(props)
    // const { name } = props
    // const [image, setImage] = React.useState(null)

    // const getUserImage = () => {
    //     console.log(props.value.Name)
    //     const storage = getStorage();
    //     getDownloadURL(ref(storage, `/${props.value.Name}.jpg`))
    //         .then((url) => {
    //             // `url` is the download URL for 'images/stars.jpg'

    //             // This can be downloaded directly:
    //             const xhr = new XMLHttpRequest();
    //             xhr.responseType = 'blob';
    //             xhr.onload = (event) => {
    //                 const blob = xhr.response;
    //             };
    //             xhr.open('GET', url);
    //             xhr.send();

    //             // Or inserted into an <img> element
    //             // const img = document.getElementById('myimg');
    //             // img.setAttribute('src', url);
    //             console.log(url)
    //         })
    //         .catch((error) => {
    //             // Handle any errors
    //         });

    // }

    // React.useEffect(() => {
    //     if (props.value.Name!==null) {
    //         getUserImage()
    //     }
    // }, [props.value.Name])

    // {
    //     "key": "0",
    //     "value": {
    //         "Date": "5-Jan-23",
    //         "Gender": "Female",
    //         "ID": "EVT0001",
    //         "Location": "Bangalore",
    //         "Name": "Female01",
    //         "Time": "9:05:23"
    //     }
    // }
    return (
        <div
            style={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
            }}
        >
            {/* <h1>{props.name}</h1> */}
            {/* <div */}
            {/* style={{ */}
            {/* backgroundColor: "white", */}
            {/* }} */}
            {/* > */}
            {/* <div> */}
            {/* //details card  */}
            {/* </div> */}
            {/* <div> */}
            {/* //image card  */}
            {/* <img src={props.image} height="" width="" /> */}
            {/* </div> */}
            {/* <h1>{props.name}</h1> */}



            {/* </div> */}
            {/* details */}
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                flex: 0.5,
                height: "93vh",
            }}

            >
                {/* person detected vla */}
                <div
                style={{
                    backgroundColor: "red",
                }}
                >
                    <div>{props?.value.ID}</div>
                    <div>{'Person detected'}</div>
                    {/* skdjskkd */}
                </div>
                {/* details */}
                <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "green",
                }}
                
                >
                    <div
                    >
                        {'Name: '}{props?.value.Name}
                    </div>
                    <div>
                        {'Location: '}{props?.value.Location}

                    </div>
                    <div>
                        {'Date: '}{props?.value.Date}
                    </div>
                    <div>
                        {'Time: '}{props?.value.Time}
                    </div>
                </div>
                {/* description */}
                <div
                style={{
                    backgroundColor: "yellow",
                }}
                >
                    <div>{'Description'}</div>
                </div>
            </div>
            {/* image and gender */}
            <div
            style={{
                flex: 0.5,
                height: "100%",
            }}
            >

            </div>
        </div>
    )
}

export default ProfileCard