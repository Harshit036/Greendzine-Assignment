import React, { useState, useEffect } from "react";
import Photo from "./components/Photo";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=2`).then((response) => {
      setData(response.data.data);
      // console.log(response);
      // console.log(data);
    });
  }, []);

  return (
    <div className="mainContainer">
      <div className="searchBox">
        <input
          className="searchField"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </div>
      <div className="photoList">
        {data
          .filter((val) => {
            if (searchText === "") {
              return val;
            } else if (
              val.first_name.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return val;
            } else {
              return "";
            }
          })
          .map((data, index) => (
            <Photo
              key={index}
              id={data.id}
              avatar={data.avatar}
              first_name={data.first_name}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
