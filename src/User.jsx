import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const User = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getInfo = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (response.status == 200) {
      setUserInfo(await response.json());
    } else {
      setErrorMessage("Usuario no encontrado");
    }
  };

  useEffect(() => {
    if (id) {
      getInfo(id);
    }
  }, [id]);

  return (
    <main>
      {userInfo && <h1>Usuario {userInfo.name}</h1>}
      {errorMessage && <h3>{errorMessage}</h3>}
    </main>
  );
};
