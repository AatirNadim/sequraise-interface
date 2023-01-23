import React from 'react'
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ProfileCard = ({ props }) => {
    const { name } = props
    const [image, setImage] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const getUserImage = () => {
        setLoading(true)
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
                setImage(url)
            })
            .catch((error) => {
                // Handle any errors
                console.log(error)
            });
        setLoading(false)
    }

    React.useEffect(() => {

        if (name !== null) {
            setLoading(true)
            getUserImage()
            setLoading(false)
        }
    }, [])

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
            {/* {loading ? <div>loading....</div> : <img src={image} height="100" width="100" />} */}
            {/* </div> */}
            {/* <h1>{props.name}</h1> */}



            {/* </div> */}
            {/* details */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    flex: 0.5,
                    height: "93vh",
                    paddingTop: "15vh",
                }}

            >
                {/* person detected vla */}
                <div
                    style={{
                        // backgroundColor: "red",
                        paddingLeft: "10px",
                        flex: 0.1,
                    }}
                >
                    <div
                        style={{
                            // backgroundColor: "blue",
                            fontWeight: "600",
                            fontSize: "17px",
                        }}
                    >{props?.value.ID}</div>
                    <div
                        style={{
                            fontWeight: "600",
                        }}
                    >{'Person detected'}</div>
                    {/* skdjskkd */}
                </div>
                {/* details */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        // backgroundColor: "green",
                        height: "20%",
                        justifyContent: "space-around",
                        paddingLeft: "10px",
                        paddingTop: "3vh",
                        fontWeight: "450",
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
                        // backgroundColor: "yellow",
                        paddingLeft: "10px",
                        paddingTop: "3vh",
                    }}
                >
                    <div>
                        {props?.value.Name}{' detected at '}{props?.value.Location}{' on '}{props?.value.Date}
                    </div>
                </div>
            </div>
            {/* image and gender */}
            <div
                style={{
                    flex: 0.5,
                    height: "100%",
                }}
            >
                <div
                    style={{
                        fontSize: "2vw",
                        fontWeight: "bolder",
                    }}
                >
                    {props?.value.Gender}
                </div>
                <div>
                    <LazyLoadImage
                        effect='blur'
                        alt={"NOT AVAILABLE"}
                        height={100}
                        src={image} // use normal <img> attributes as props
                        width={100}
                        placeholderSrc="https://www.cgsusa.org/wp-content/uploads/cropped-placeholder.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard