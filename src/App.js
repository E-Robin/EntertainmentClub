import React from "react";
import "./styles.css";
import { useState } from "react";

const entertainmentCLub = {
  Movies: [
    { name: " The Dark Knight", rating: "4/5" },
    { name: "Baahubali: The Beginning", rating: "4.5/5" }
  ],

  Webseries: [
    {
      name: "The Legend of Hanuman",
      rating: "5/5"
    },
    {
      name: " Game of Thrones",
      rating: "5/5"
    }
  ],
  Cartoon: [
    {
      name: "Pokemon",
      rating: "3.5/5"
    },
    {
      name: "Blue Dragon",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Cartoon");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📺 Entertainment club </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favourite movies ,shows and animation. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(entertainmentCLub).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {entertainmentCLub[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
