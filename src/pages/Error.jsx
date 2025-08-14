import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-3xl">
      <h2>Something wrong</h2>
      <Link className="text-purple-500 underline" to="/">Go Back</Link>
    </div>
  );
};

export default Error;
