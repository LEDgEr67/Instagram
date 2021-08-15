export default function Footer() {
  const options = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Location",
    "Top",
    "Accouts",
    "Hashtags",
    "Language",
    "Locations",
    "Beauty",
    "Dance",
    "Fitness",
    "Food & Drink",
    "Home & Garden",
    "Music",
    "Visual Arts",
  ];
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center text-center text-xs text-gray-primary">
        <div className="flex w-full justify-center mb-2">
          <ul className="flex flex-wrap text-center justify-center break-normal p-2 sm:max-w-lg">
            {options.map((item) => {
              return (
                <li className="mr-3 " id={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <p>© 2021 INSTAGRAM FROM THOUFIC </p>
      </div>
    </>
  );
}
