import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="grid place-content-center">
      <p className="text-bold text-3xl">Pagina no encontrada</p>
      <p className="text-bold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}