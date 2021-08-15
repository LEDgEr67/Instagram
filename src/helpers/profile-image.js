// import { pathExists } from "path-exists";
import fs from "fs";

export default function ProfileImage({ fileName, className }) {
  var path = `/images/avatars/${fileName}.jpg`;
  // const fs = require("fs");
  const fileExistsSync = (file) => {
    try {
      if (fs.existsSync(path)) {
        // Do something
        console.log("Thoufic present");
        return true;
      }
    } catch (err) {
      console.log("Thoufic error", fs, err);

      return false;
    }
  };
  fileExistsSync(path);

  // const checkexists = async (path) => {
  //   return await pathExists(path);
  // };
  // console.log("thoufic", checkexists(path));

  return (
    <>
      {/* isFilePresent ? (
      <img
        className={className}
        src={`/images/avatars/${fileName}.jpg`}
        alt={`${fileName}`}
      ></img>
      ) : ( */}
      <img
        className={className}
        src={`/images/avatars/default.png`}
        alt={`default `}
      ></img>
      {/* )} */}
    </>
  );
}
