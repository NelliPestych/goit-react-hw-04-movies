import React from "react";

const CastList = ({ cast }) => (
  <div>
    {cast.length > 0 && (
      <ul>
        {cast.map((cast) => (
          <li key={cast.id}>
            <img width="200" src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="actor" />
            <h3>{cast.name}</h3>
            <p>
              character: 
              {cast.character}
            </p>
          </li>
        ))}
      </ul>
    )}
    {cast.length === 0 && (
      <p>NO CASTS</p>
    )}
  </div>
);

export default CastList;
