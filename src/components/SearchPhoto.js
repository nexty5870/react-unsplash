import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const API_KEY = `${process.env.REACT_APP_UNSPLASH_API_KEY}`;

const unsplash = new Unsplash({
  accessKey: API_KEY,
});

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState("");
  // console.log(query);
  const searchP = async (e) => {
    e.preventDefault();
    // console.log("submitting request");
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        console.log(json);
        setPics(json.results);
      });
  };
  return (
    <div>
      <form className="form" onSubmit={searchP}>
        <label htmlFor="query" className="label">
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try searching "landscape" or "Warsaw"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics ? (
          pics.map((pic) => (
            <div className="card" key={pic.id}>
              <img
                src={pic.urls.full}
                alt={pic.alt_description}
                className="card-image"
                width="50%"
                height="50%"
              ></img>
            </div>
          ))
        ) : (
          <p>Awaiting request...</p>
        )}
      </div>
    </div>
  );
}
