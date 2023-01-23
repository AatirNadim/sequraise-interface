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
                height: "90vh",
            }}
        >

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 0.5,
                }}

            >

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        paddingLeft: "10px",
                        fontWeight: "450",
                        verticalAlign: "center",
                        justifyContent: "center",
                        gap: "10px",
                    }}

                >
                    <div
                        style={{
                            marginBottom: "30px",
                        }}
                    >
                        <div
                            style={{
                                fontWeight: "600",
                                fontSize: "17px",
                            }}
                        >{props?.value.ID}</div>
                        <div
                            style={{
                                fontWeight: "600",
                            }}
                        >Person detected</div>
                    </div>
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
                    <div
                        style={{
                            marginTop: "30px",
                        }}
                    >
                        <div>
                            {props?.value.Name}{' detected at '}{props?.value.Location}{' on '}{props?.value.Date}
                        </div>
                    </div>
                </div>
                {/* description */}
            </div>
            <div
                style={{
                    flex: 0.5,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    verticalAlign: "center",
                    gap: "10px",
                }}
            >
                <div
                    style={{
                        fontSize: "2vw",
                        fontWeight: "bolder",
                        marginLeft: "10px",
                    }}
                >
                    {props?.value.Gender}
                </div>
                <div
                    style={{
                        // paddingTop: "1vh",
                        paddingLeft: "10px",
                    }}
                >
                    <LazyLoadImage
                        effect='blur'
                        alt={"NOT AVAILABLE"}
                        height={450}
                        src={image} // use normal <img> attributes as props
                        width={300}
                        placeholderSrc="https://www.cgsusa.org/wp-content/uploads/cropped-placeholder.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard