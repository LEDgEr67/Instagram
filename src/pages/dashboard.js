import { useEffect } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Stories from "../components/stories";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);

  return (
    <div className="bg-white sm:bg-gray-background">
      <Header />
      <div className="pt-20 grid grid-cols-2 gap-4 justify-between mx-auto max-w-screen-lg lg:grid-cols-3">
        <div className="flex flex-col col-span-2 min-w-full  m-auto">
          <Stories />
          <Timeline />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
