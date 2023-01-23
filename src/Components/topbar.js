import React from 'react'
import { useRecoilState } from 'recoil';
import { countState } from './atoms/countAtom';
const Topbar = () => {
    const [count, setCount] = useRecoilState(countState);
    // console.log(count);


    return (
        <div
            style={{
                height: "7vh",
                backgroundColor: "#001c7b",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px"

            }}
        >
            {/* sequraise */}
            <div
                style={{
                    color: "#018581",
                    fontFamily: 'serif',
                    fontWeight: "bold",
                    fontSize: '3vh',
                    flex: 0.6,
                }}
            >
                <span
                    style={{
                        fontSize: '4vh',
                    }}
                >S</span>
                ECQUR
                <span
                    style={{
                        color: "#e6020c",
                        fontSize: '4vh'
                    }}
                >AI</span>
                SE
            </div>
            {/* labels --> male, female */}
            <div
                style={{
                    display: "flex",
                    flex: 0.4,
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                    }}
                >
                    <input
                        style={{
                            background: 'transparent',
                            border: 'none',
                            borderBottom: '1px solid #fff',
                            color: '#fff',
                        }}
                    >
                    </input>
                    <img src="/icons8-search.svg" alt="search_icon"
                        style={{
                            height: '20px',
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#92d050",
                            marginRight: "10px",
                            padding: "5px 20px",
                        }}
                    >
                        {count?.countBoys}
                    </div>
                    <div
                        style={{
                            backgroundColor: "#ff0000",
                            color: "#fff",
                            padding: "5px 20px",
                        }}
                    >
                        {count?.countGirls}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar