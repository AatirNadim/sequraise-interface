import React from 'react'

export const Dropdown = () => {
  const [filterType, setFilterType] = React.useState('')
  const handleClick = (e) => {
    setFilterType(e.target.value)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '25vw',
        height: '33vh',
        backgroundColor: "#d9d9d9",
        position: 'absolute',
        top: "8vh",
        right: "0",
        zIndex: '1',
        borderRadius: '10px',
      }}
    >
      {/* location */}
      {filterType.length > 0 && <div>{filterType}</div>}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          padding: '10px',
        }}
      >
        <div
          style={{
            marginBottom: '10px',
            paddingLeft: '4px',
            fontWeight: 'bold',
          }}
        >
          {' Location'}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <button
            style={{
              border: 'none',
              borderRadius: '0px',
              height: '30px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              marginRight: '10px',
              marginLeft: '4px',
            }}

            label="Chennai"
            value="Chennai"
            onClick={handleClick}

          >Chennai</button>
          <button
            label="Hyderabad"
            value="Hyderabad"
            onClick={handleClick}
            style={{
              border: 'none',
              borderRadius: '0px',
              height: '30px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              marginRight: '10px',
            }}
          >Hyderabad</button>
          <button
            label="Bangalore"
            value="Bangalore"
            onClick={handleClick}
            style={{
              border: 'none',
              borderRadius: '0px',
              height: '30px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              marginRight: '10px',
            }}
          >Bangalore</button>
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
            paddingLeft: '4px',
            fontWeight: 'bold',
          }}
        >{'Gender'}</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <button
            label="Male"
            value="Male"
            onClick={handleClick}
            style={{
              border: 'none',
              borderRadius: '0px',
              height: '30px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              marginRight: '10px',
              marginLeft: '4px',
            }}
          >{'Male'}</button>
          <button
            label="Female"
            value="Female"
            onClick={handleClick}
            style={{
              border: 'none',
              borderRadius: '0px',
              height: '30px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              marginRight: '10px',
            }}
          >{'Female'}</button>
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
        <input
          onChange={(e) => {
            handleClick(e)
            console.log(e.target.value)
          }
          }
          type="date" />
      </div>
    </div>
  )
}

// export default Dropdown