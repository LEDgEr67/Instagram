import React from "react";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./post";

export default function Timeline() {
  const { photos } = usePhotos();
  console.log("photos", photos);
  return (
    <div className="container ml-0 col-span-2 sm:ml-1">
      {!photos ? (
        <>
          <Skeleton count={4} className="mb-5 w-screen h-80 sm:w-20 sm:h-80" />
        </>
      ) : photos?.length > 0 ? (
        photos?.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos!</p>
      )}
    </div>
  );
}
