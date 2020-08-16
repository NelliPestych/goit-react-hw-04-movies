import React from "react";

const Reviews = ({ review }) => (
  <div>
    {review.length > 0 && (
      <ul>
          {review.map((result) => (
      <li key={result.id}>
        <h3>{result.author}</h3>
        <p>
        {result.content}
        </p>
        </li>
          ))}
        </ul>
    )}
    {review.length === 0 && (
      <p>NO REVIEWS</p>
    )}
  </div>
);

export default Reviews;
