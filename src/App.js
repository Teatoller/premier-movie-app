import { useState, useEffect } from "react";
import api from "./api/axiosConfig";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log("res---", response.data);
      setMovies(response.data);
    } catch (error) {
      console.log("err...",error);
    }
  };

  useEffect(() => {
    getMovies()
  }, [])
  
  return <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />}></Route>
      </Route>
      
    </Routes>
  </div>;
}

export default App;
