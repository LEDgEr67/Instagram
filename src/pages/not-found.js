import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found - Instagram";
  }, []);

  return (
    <div className="bg-gray-background">
      <div className=" mx-auto max-w-screen-lg">
        <p className="text-center text-2xl my-10 font-bold">
          Sorry, this page isn't available.
        </p>
        <p className="text-center">
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </p>
      </div>
    </div>
  );
}
