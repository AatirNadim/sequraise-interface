import React from 'react'

const ProfileCard = (props) => {
    console.log(props)
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