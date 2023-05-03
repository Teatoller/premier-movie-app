import { useState, useEffect } from "react";
import api from "./api/axiosConfig";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./header/Header";
import Trailer from "./trailer/Trailer";

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (error) {
      console.log("err...",error);
    }
  };

  useEffect(() => {
    getMovies()
  }, [])
  
  return (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home movies={movies} />}></Route>
      <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
      </Route>
      
    </Routes>
  </div>);
}

export default App;
