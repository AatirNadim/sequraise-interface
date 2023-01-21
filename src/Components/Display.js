import React from 'react'

import styles from '../Styles/Display.module.css'

const Display = ({ props }) => {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "white",
                borderRadius: "2px",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
                border: "1px solid black"
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "2px",
                        padding: "5px"

                    }}
                >
                    <span>{props.value.ID}</span>
                    <span>{props.value.Location}</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "2px",
                        padding: "5px"

                    }}
                >
                    <span>{props.value.Date}</span>
                    <span>{props.value.Time}</span>

                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    padding: "5px"
                }}

            >
                Person Detected
            </div>


        </div>
    )
}

export default Display