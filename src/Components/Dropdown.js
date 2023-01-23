import React from 'react'

import { useRecoilState } from 'recoil'
import { filterState } from './atoms/filterAtom'

export const Dropdown = () => {
  const [filterType, setFilterType] = React.useState('')
  const [filterObj, setFilterObj] = useRecoilState(filterState);

  const handleClick = (e) => {
    // setFilterType(e.target.getAttribute('entry'))
    // console.log(e.target.getAttribute('entry'))
    let temp = e.target.getAttribute('entry')
    console.log(temp)
    console.log(e.target.getAttribute('value'))
    setFilterObj({ ...filterObj, [temp]: e.target.getAttribute('value') })
    console.log(filterObj)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '25vw',
        height: '36vh',
        backgroundColor: "red",
        position: 'absolute',
        top: "8vh",
        right: "0",
        zIndex: '1',
        borderRadius: '10px',
        paddingBottom: '10px',
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
            entry="location"
            label="Chennai"
            value="Chennai"
            onClick={handleClick}

          >Chennai</button>
          <button
            label="Hyderabad"
            value="Hyderabad"
            entry="location"
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
            entry="location"
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
            entry="gender"
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
            entry="gender"
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
      <div>
        <button
        label="clearfilters"
        onclick = {() => {
          setFilterObj({
            location: '',
            gender : '',
            date : ''
          })
        }}
          style={{
            border: 'none',
            borderRadius: '0px',
            height: '30px',
            fontWeight: 'bold',
            backgroundColor: 'white',
            marginRight: '10px',
            marginLeft: '14px',
          }}
        >
          {'Clear all filters'}
        </button>
      </div>
    </div>
  )
}

// export default Dropdown