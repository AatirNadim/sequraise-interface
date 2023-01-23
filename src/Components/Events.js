import React, { useEffect } from "react";

import { db } from "../firebaseConfig";

import { filterState } from "./atoms/filterAtom";


// import { getDatabase, ref, onValue} from "firebase/database";
import Display from "./Display";
import ProfileCard from "./profileCard";
import { Dropdown } from "./Dropdown";
import { useRecoilState } from "recoil";
import { countState } from "./atoms/countAtom";


export const Events = ({ props }) => {
  const [selected, setSelected] = React.useState(null);
  const [showFilterMenu, setShowFilterMenu] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [filter, setFilter] = useRecoilState(filterState);
  const [arr, setArr] = React.useState(props);
  const [loading, setLoading] = React.useState(false);
  const [count, setCount] = useRecoilState(countState);


  const filterData = () => {
    setLoading(true);
    let filteredArray = props;
    if (filter.location === "ALL" && filter.date === "ALL" && filter.gender === "ALL") {
      setArr(props);
    }
    if (filter.location !== "ALL") {
      filteredArray = filteredArray.filter((item) => item.value.Location === filter.location);
      setArr(filteredArray);
    }
    if (filter.date !== "ALL") {
      filteredArray = filteredArray.filter((item) => item.value.Date === filter.date);
      setArr(filteredArray);
    }
    if (filter.gender !== "ALL") {
      filteredArray = filteredArray.filter((item) => item.value.Gender === filter.gender);
      setArr(filteredArray);
    }
    var countBoys = 0;
    var countGirls = 0;
    filteredArray?.forEach((item) => {
      if (item.value.Gender === "Male") {
        countBoys++;
      }
      else {
        countGirls++;
      }
    });
    setCount({ countBoys: countBoys, countGirls: countGirls })
    setLoading(false);
  }

  useEffect(() => {
    filterData();
  }, [props, filter.date, filter.gender, filter.location])


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "93vh",
        padding: "0",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          flex: "65%",
          height: "93vh",
          // backgroundColor: "red",
        }}
      >
        {selected ?
          <ProfileCard
            key={selected?.key}
            props={selected}
          /> : <div
            style={{
              fontSize: "3vh",
              fontWeight: "bold",
              paddingTop: "2vh",
              paddingLeft: "2vh",
            }}
          >No data item selected</div>
        }
      </div>

      {/* the right section */}
      <div
        style={{
          flex: "35%",
          backgroundColor: "#d9d9d9",
          padding: "0 10px",
        }}
      >
        <div
          style={{

            // border: "1px solid black",
            height: '97%',
            padding: "0 20px",
            // boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
            // borderRadius: "2px",
            overflow: "auto",
            marginTop: "10px",
            boxSizing: "border-box",
            backgroundColor: "#fff",
            // paddingTop: "2px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1
              style={{
                marginTop: "12px",
                fontSize: "3vh",
              }}
            >Events</h1>

            {/* add onclick event to img */}
            <div
              style={{
                backgroundColor: "#fff",
                // cursor: "pointer",
                position: "relative",
              }}
            >
              <div

              style={{
                cursor: "pointer",
              }}
                onClick={(e) => {
                  console.log("clicked");
                  setShowFilterMenu(!showFilterMenu);

                }
                }
              >

                <img src="/filter.png" alt="filter_menu"
                  style={{
                    height: "50px",


                  }}
                />
              </div>
              {showFilterMenu && <Dropdown />}
            </div>
            {/* <Dropdown/> */}

          </div>
          {/* <button onClick={getData}>Get Data</button> */}
          {loading ? (<div>Loading...</div>) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                gap: "10px",
                marginTop: "10px"
              }}
            >
              {
                arr?.map((item) => (
                  <div
                    style={{

                    }}
                    onClick={() => {
                      setActiveIndex(item.key)
                      setSelected(item)
                    }}
                  >
                    {item.key === activeIndex ?
                      <Display key={item.key} props={{ ...item, active: true }} />
                      :
                      <Display key={item.key} props={{ ...item, active: false }} />
                    }
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

