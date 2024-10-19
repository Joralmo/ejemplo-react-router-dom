import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <main>
      <h1>Pagina no encontrada</h1>
      <h2>404</h2>
      <p>{error?.statusText || error?.message}</p>
      <Link to="/">Ir al home</Link>
    </main>
  );
};
