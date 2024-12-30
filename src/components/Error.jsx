import React from "react";

export const Error= ({ message }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  );
};