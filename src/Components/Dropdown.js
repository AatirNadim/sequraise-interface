import React, { useEffect } from 'react'

import { useRecoilState } from 'recoil'
import { months } from './atoms/constants'
import { filterState } from './atoms/filterAtom'

export const Dropdown = () => {
  const [filterType, setFilterType] = useRecoilState(filterState)

  const handleClick = (e) => {
    e.preventDefault()
    setFilterType({ ...filterType, [e.target.getAttribute('entry')]: e.target.getAttribute('value') })
  }
  // abhi add kiya
  // useEffect(() => {
  //   console.log(filterType)
  // }, [filterState])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '25vw',
        height: '36vh',
        backgroundColor: "#d9d9d9",
        position: 'absolute',
        top: "8vh",
        right: "0",
        zIndex: '1',
        borderRadius: '10px',
        paddingBottom: '10px',
        overflow: 'auto',
        border: '1px solid black',
        boxShadow: '0 0 5px 0 rgba(0,0,0,0.5)', 
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
              backgroundColor: `${filterType.location === 'Chennai' ? '#8c8c8c' : 'white'}`,
              marginRight: '10px',
              marginLeft: '4px',
              // width: '8vw',
              color: `${filterType.location === 'Chennai' ? 'white' : 'black'}`,
              cursor: 'pointer',
              borderRadius: '5px',
              boxShadow: `${filterType.location === 'Chennai' ? '0 0 5px 0 rgba(0,0,0,0.5)' : 'none'}`
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
              backgroundColor: `${filterType.location === 'Hyderabad' ? '#8c8c8c' : 'white'}`,
              marginRight: '10px',
              color: `${filterType.location === 'Hyderabad' ? 'white' : 'black'}`,
              cursor: 'pointer',
              borderRadius: '5px',
              boxShadow: `${filterType.location === 'Hyderabad' ? '0 0 5px 0 rgba(0,0,0,0.5)' : 'none'}`
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
              backgroundColor: `${filterType.location === 'Bangalore' ? '#8c8c8c' : 'white'}`,
              marginRight: '10px',
              color: `${filterType.location === 'Bangalore' ? 'white' : 'black'}`,
              cursor: 'pointer',
              borderRadius: '5px',
              boxShadow: `${filterType.location === 'Bangalore' ? '0 0 5px 0 rgba(0,0,0,0.5)' : 'none'}`
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
              backgroundColor: `${filterType.gender === 'Male'? '#8c8c8c' : 'white'}`,
              marginRight: '10px',
              marginLeft: '4px',
              color:`${filterType.gender === 'Male'? 'white' : 'black'}`,
              cursor: 'pointer',
              borderRadius: '5px',
              boxShadow: `${filterType.gender === 'Male' ? '0 0 5px 0 rgba(0,0,0,0.5)' : 'none'}`
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
              backgroundColor: `${filterType.gender === 'Female'? '#8c8c8c' : 'white'}`,
              marginRight: '10px',
              color:`${filterType.gender === 'Female'? 'white' : 'black'}`,
              cursor: 'pointer',
              borderRadius: '5px',
              boxShadow: `${filterType.gender === 'Female' ? '0 0 5px 0 rgba(0,0,0,0.5)' : 'none'}`
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
          borderRadius: '5px',
        }}
      >
        <input
          onChange={(e) => {
            const a = (e.target.value).split('-')
            setFilterType({ ...filterType, date: `${a[2][0] === '0' ? a[2][1] : a[2]}-${months[a[1] - 1]}-${a[0].substring(2, 4)}` })
          }
          }
          type="date" />
      </div>
      <div>
        <button
          label="clearfilters"
          onClick={() => {
            setFilterType({
              location: 'ALL',
              gender: 'ALL',
              date: 'ALL',
              
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
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Clear all filters
        </button>
      </div>
    </div>
  )
}

// export default Dropdown