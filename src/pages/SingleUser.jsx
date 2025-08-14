import React from "react";
import { Link } from "react-router-dom";

const SingleUser = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="text-xl border p-5 m-5 rounded-md hover:scale-105 transition-all duration-200 hover:bg-slate-800 flex flex-col">
      <h2 className="text-xl">Name:{name}</h2>
      <p className="text-xl">email: {email}</p>
      <p className="text-xl">Phone: {phone}</p>
      <Link className="text-purple-500 underline mt-auto" to={`/user/${id}`}>
        Details
      </Link>
    </div>
  );
};

export default SingleUser;
