import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="mainError flex justify-center items-center h-screen">
      <div className="childError text-2xl font-poppins font-bold leading-9">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <b className="text-red-500">
            {error.status} : {error.statusText}
          </b>
        </p>

        <button className="mt-3 px-2 py-2 rounded-md hover:bg-cyan-200">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
