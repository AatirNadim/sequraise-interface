import React from 'react'
import { getStorage, ref, getDownloadURL } from "firebase/storage"

const ProfileCard = ({ props }) => {
    console.log(props.value.Name)
    // const { name } = props
    const [image, setImage] = React.useState(null)

    const getUserImage = () => {
        console.log(props.value.Name)
        const storage = getStorage();
        getDownloadURL(ref(storage, `/${props.value.Name}.jpg`))
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element
                // const img = document.getElementById('myimg');
                // img.setAttribute('src', url);
                console.log(url)
            })
            .catch((error) => {
                // Handle any errors
            });

    }

    React.useEffect(() => {
        if (props.value.Name!==null) {
            getUserImage()
        }
    }, [props.value.Name])

    return (
        <div
            style={{
                backgroundColor: "white",
            }}
        >
            <h1>{props.name}</h1>
            <div
                style={{
                    backgroundColor: "white",
                }}
            >
                <div>
                    {/* //details card  */}
                </div>
                <div>
                    {/* //image card  */}
                    <img src={props.image} height="" width="" />
                </div>
                <h1>{props.name}</h1>



            </div>
        </div>
    )
}

export default ProfileCard