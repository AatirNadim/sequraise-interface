import React from 'react'
import { Events } from '../Components/Events'
import ParentEvent from '../Components/ParentEvent'
import ProfileCard from '../Components/profileCard'
import Sidebar from '../Components/sidebar'
import Topbar from '../Components/topbar'

const Design = () => {
    return (
        <>
            <Topbar />
            <div
                style={{
                    height: "93vh",
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "gray"
                }}
            >
                <div
                    style={{
                        flex: 0.05
                    }}
                >
                    <Sidebar />
                </div>
                <div
                    style={{
                        flex: 0.95
                    }}>

                    <ParentEvent />
                </div>
            </div>
        </>
    )
}

export default Design