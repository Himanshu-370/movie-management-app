import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function Add({ users, setusers, setIsAdding }) {
  const [MovieName, setMovieName] = useState("");
  const [Genre, setGenre] = useState("");
  const [Rating, setRating] = useState("");

  const textInput = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!MovieName || !Genre || !Rating) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = users.length + 1;
    const newuser = {
      id,
      MovieName,
      Genre,
      Rating,
    };
    users.push(newuser);
    setusers(users);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${MovieName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Movie</h1>
        <label htmlFor="MovieName">Movie Name</label>
        <input
          id="MovieName"
          type="text"
          ref={textInput}
          name="MovieName"
          value={MovieName}
          placeholder="Enter Movie"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <label htmlFor="Genre">Genre</label>
        <input
          id="Genre"
          type="text"
          name="Genre"
          value={Genre}
          placeholder="Enter Genre"
          onChange={(e) => setGenre(e.target.value)}
        />
        <label htmlFor="Rating">Rating</label>
        <input
          id="Rating"
          type="number"
          name="Rating"
          value={Rating}
          placeholder="Enter Rating"
          onChange={(e) => setRating(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
