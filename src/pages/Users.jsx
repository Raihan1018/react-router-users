import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {users.map((user) => (
        <SingleUser user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
