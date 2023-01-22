import React from 'react'

const Topbar = () => {
    // const useContext = React.useContext(Usercontext);
    return (
        <div
            style={{
                height: "5vh",
                backgroundColor: "#001c7b",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px"

            }}
        >
            <div 
            style={{
                color: "#018581",
                fontFamily : 'serif',
                fontWeight: "bold",
            }}
            >
                SEQUR
                <span
                style={{
                    color: "#e6020c",
                    fontSize : '20px'
                }}
                >AI</span>
                SE
            </div>
        </div>
    )
}

export default Topbar