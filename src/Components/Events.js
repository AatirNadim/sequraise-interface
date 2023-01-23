import React, { useEffect } from "react";

import { db } from "../firebaseConfig";

import { filterState } from "./atoms/filterAtom";


// import { getDatabase, ref, onValue} from "firebase/database";
import { getDatabase, ref, child, get, set } from "firebase/database";
import Display from "./Display";
import ProfileCard from "./profileCard";

import { displayState } from "./atoms/displayAtom";
import { Dropdown } from "./Dropdown";
import { useRecoilState } from "recoil";
import { countState } from "./atoms/countAtom";

export const Events = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const [showFilterMenu, setShowFilterMenu] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [count, setCount] = useRecoilState(countState);
  const [filter, setFilter] = useRecoilState(filterState);

  const filterData = () => {
    let filteredArray = data;
    if (filter.location === "All") {
      setData(filteredArray);
    }
    else {
      if (filter.location !== "All") {
        filteredArray = filteredArray.filter((item) => item.value.Location === filter.location);
        setData(filteredArray);
      }
      if (filter.date !== "All") {
        filteredArray = filteredArray.filter((item) => item.value.Date === filter.date);
        setData(filteredArray);

      }
      if (filter.gender !== "All") {
        filteredArray = filteredArray.filter((item) => item.value.Gender === filter.gender);
        setData(filteredArray);
      }
    }
  }




  const getData = () => {
    setLoading(true);
    let arr = [];
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/`)).then((snapshot) => {
      if (snapshot.exists()) {
        const obj = snapshot.val();
        arr = Object.entries(obj).map(
          // ([key, value]) => ({ key, value })
          //add only those items which are according to the filter          
          ([key, value]) => ({ key, value })
        );
        var countBoys = 0;
        var countGirls = 0;
        arr?.forEach((item) => {
          if (item.value.Gender === "Male") {
            countBoys++;
          }
          else {
            countGirls++;
          }
        });
        setData(arr);
        setCount({ countBoys: countBoys, countGirls: countGirls })
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    setLoading(false);

  }

  useEffect(() => {
    getData();
  }, [])


  useEffect(() => {
    filterData();
  }, [, filter])

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
              onClick={(e) => {
                // console.log(e);
                setShowFilterMenu(!showFilterMenu);
              }
              }
              style={{
                backgroundColor: "#fff",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <img src="/filter.png" alt="filter_menu"
                style={{
                  height: "50px",


                }}
              />
              {showFilterMenu && <Dropdown />}
            </div>
            {/* <Dropdown/> */}

          </div>
          {/* <button onClick={getData}>Get Data</button> */}
          {/* {loading ? (<div>Loading...</div>) : ( */}
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
              data?.map((item) => (
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
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

