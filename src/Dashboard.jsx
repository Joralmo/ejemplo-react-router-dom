import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (response.status == 200) {
      const users = await response.json();
      setUsers(users);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const navigateToDetail = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="list-users">
        {users.map((user) => (
          <button onClick={() => navigateToDetail(user.id)} key={user.id}>
            {user.email}
          </button>
          // <Link key={user.id} to={`/user/${user.id}`}>
          //   {user.email}
          // </Link>
        ))}
      </div>
      <Link to="/">Ir al home</Link>
    </main>
  );
};
