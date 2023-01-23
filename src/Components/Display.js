import React from 'react'

import styles from '../Styles/Display.module.css'
import { useRecoilState } from 'recoil'
import { displayState } from './atoms/displayAtom'

const Display = ({ props }) => {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: `${props.active ? "#7f7f7f" : "#d9d9d9"}`,
                fontWeight: "600",
                fontSize: "13px",
                borderRadius: "2px",
                // boxShadow: "0 0 5px 0 rgba(0,0,0,0.5)",
                // border: "1px solid black",
                cursor: "pointer",
                color: `${props.active ? "white" : "black"}`,
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
                    <span>{props.value.ID}{': '}</span>
                    <span>{' '}</span>
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