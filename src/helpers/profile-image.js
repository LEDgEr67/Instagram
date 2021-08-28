// import { pathExists } from "path-exists";
import fs from "fs";

export default function ProfileImage({ fileName, className }) {
  const path = `/images/avatars/${fileName}.jpg`;
  // try {
  //   if (path.exists()) {
  //     console.log("thoufic it is there");
  //   } else {
  //     console.log("thoufic it is not there");
  //   }
  // } catch (err) {
  //   console.log("thoufic", err);
  // }

  // try {
  //   if (fs.existsSync(path)) {
  //     //file exists
  //     console.log("thoufic it is there");
  //   }
  // } catch (err) {
  //   console.error("thoufic", err);
  // }
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
