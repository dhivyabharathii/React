import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [movies, setMovie] = useContext(MovieContext);

  const [name, setName] = useState("");
  const [empid, setEmpid] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateid = (e) => {
    setEmpid(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovie((prevMovies) => [...prevMovies, { name: name },{ empid :empid }]);
  };
  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" onChange={updateName} />
      <input type="text" name="price" onChange={updateid} />
      <button>Submit</button>
    </form>
  );
};
export default AddMovie;