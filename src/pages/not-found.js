import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";
export default function NotFound() {
  const history = useHistory();
  useEffect(() => {
    document.title = "Page Not Found - Instagram";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className=" mx-auto max-w-screen-lg">
        <p className="text-center text-2xl my-10 font-bold">
          Sorry, this page isn't available.
        </p>
        <p className="text-center">
          The link you followed may be broken, or the page may have been
          removed.{" "}
          <span>
            <button
              className="text-blue-medium"
              onClick={() => {
                console.log("clicked");
                history.push(ROUTES.DASHBOARD);
              }}
            >
              Go back to Instagram.
            </button>
          </span>
        </p>
      </div>
    </div>
  );
}
