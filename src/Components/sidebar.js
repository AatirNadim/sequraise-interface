import React from 'react'

const Sidebar = () => {
    return (
        <div
        style={{backgroundColor : '#00b8f1',
        height : '93vh',
        display : 'flex',
        flexdirection : 'column', 
        justifyContent : 'space-between',
        color : 'white',
        flexFlow : 'column',

    }}
        
        >
            {/* {'I am a sidebar'} */}
            {/* we have a icon here  */}
            <div
            style={{
                // height : 'fit-content',
            }}
            >
                <img src="/icons8-menu-rounded-96.png" alt="sandwich icon" 
                style={{
                    height : '45px',
                    marginLeft : '7px',
                    color : 'white',
                    marginTop : '7px',
                }}
                />
            </div>
            {/* we have another  icon here */}
            
            <div>   
                <img src="/arrow_inside_box.png" alt="arrow icon" 
                
                style={{
                    height : '60px',
                    marginLeft : '0px',
                    color : 'white',
                }}
                />
            </div>
            
        </div>
    )
}

export default Sidebar