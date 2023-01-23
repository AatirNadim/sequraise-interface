import React, { useEffect } from "react";

import { db } from "../firebaseConfig";

import { filterState } from "./atoms/filterAtom";


// import { getDatabase, ref, onValue} from "firebase/database";
import { getDatabase, ref, child, get, set } from "firebase/database";
import Display from "./Display";
import ProfileCard from "./profileCard";

import { Dropdown } from "./Dropdown";
import { useRecoilState } from "recoil";
import { countState } from "./atoms/countAtom";

export const Events = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const [showFilterMenu, setShowFilterMenu] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState(null);

  const [count, setCount] = useRecoilState(countState);


  // is this allowed
  const [filterObj, setFilterObj] = useRecoilState(filterState);

  const getData = () => {
    setLoading(true);
    let arr = [];
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/`)).then((snapshot) => {
      if (snapshot.exists()) {
        const obj = snapshot.val();
        arr = Object.entries(obj).map(
          ([key, value]) => ({ key, value })
        );
        var countBoys = 0;
        var countGirls = 0;
        arr.forEach((item) => {
          if (item.value.Gender === "Male") {
            countBoys++;
          }
          else {
            countGirls++;
          }
        });
        setCount({ countBoys: countBoys, countGirls: countGirls })
        setData(arr);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    setLoading(false);

  }

  const getImagePerson = (name) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/`)).then((snapshot) => {
      if (snapshot.exists()) {
        const obj = snapshot.val();
        const arr = Object.entries(obj).map(
          ([key, value]) => ({ key, value })
        );
        const person = arr.find((item) => item.value.name === name);
        setSelected(person);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }


  // React.useEffect(() => {
  //   if (selected?.Name) {
  //     getImagePerson(selected.Name)
  //   }
  // }, [selected?.Name]);

  useEffect(() => {
    getData();
  }, [filterObj])
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
                    setSelected(item)
                  }}
                >
                  <Display key={item.key} props={item} />
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

