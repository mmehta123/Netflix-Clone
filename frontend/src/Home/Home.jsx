import React, { useState, useEffect } from 'react';
import axios from "axios";
import Featured from '../Components/Featured/Featured';
import List from '../Components/List/List';
import Navbar from "../Components/Navbar/Navbar";
import "./home.scss"

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? `?type=${type}` : ""}${genre ? `&genre=${genre}` : ""}`,
          {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWIwOGJkMGFjNzVlOWRhNTM0OGYwMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjgxMDkxNCwiZXhwIjoxNjYzMjQyOTE0fQ.mGWaQdlqSBzqDYKvGqUDMkl_mw1pfy7Aj_-5Nbmw6qk"
            }
          });
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {
        lists.map((list, i) => {
          return <List key={i} list={list} />
        })
      }
    </div>
  )
}
export default Home;
