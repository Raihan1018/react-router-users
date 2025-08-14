import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, company } = user;
  return (
    <div>
      <h2 className="underline">User details</h2>
      <div className="text-3xl">
        <h2>Name:{name}</h2>
        <p>Company: {company.name}</p>
      </div>
      <button className="text-purple-500 py-1 px-4 rounded-md">
        <Link to={-1}>Back</Link>
      </button>
    </div>
  );
};

export default UserDetails;
