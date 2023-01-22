import React from 'react'

export const Dropdown = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '25vw',
        height: '30vh',
      }}
    >
      {/* location */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px',
        }}
      >
        <div
          style={{
            marginBottom: '10px',
          }}
        >
          {'Location'}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <button
            style={{
              border: 'none',
              borderRadius: '0px',
              height: '30px',
              fontWeight: 'bold',
              backgroundColor: 'white',
            }}

          >Chennai</button>
          <button>Hyderabad</button>
          <button>Bangalore</button>
        </div>
      </div>
      {/* gender */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px',
        }}
      >
        <div
        
          style={{
            marginBottom: '10px',
          }}
        >{'Gender'}</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <button>{'Male'}</button>
          <button>{'Female'}</button>
        </div>
      </div>
      {/* date */}
      <div
        style={{
          // paddingBottom: '10px',
          height: '10vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'end',
          paddingRight: '10px',
        }}
      >
        <input type="date" />
      </div>
    </div>
  )
}

// export default Dropdown