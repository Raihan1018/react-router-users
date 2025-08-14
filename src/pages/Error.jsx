import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-3xl">
      <p>
        <i className="text-red-500">{error.statusText || error.message}</i>
      </p>
      <h2 className="text-red-500">{error.data}</h2>
      <Link className="text-purple-500 underline" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
