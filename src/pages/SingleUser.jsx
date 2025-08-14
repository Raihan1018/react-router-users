import React from "react";

const SingleUser = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div className="text-xl border p-5 m-5 rounded-md hover:scale-105 transition-all duration-200 hover:bg-slate-800">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default SingleUser;
