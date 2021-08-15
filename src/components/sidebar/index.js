import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";
import Footer from "../footer";

export default function Sidebar() {
  // const {
  //   user: { fullName, username, userId },
  // } = useUser();
  const { user } = useUser();
  return (
    <div className="invisible p-4 fixed left-2/3 lg:visible h-10">
      {/* <User /> */}
      {/* <Suggestions /> */}

      <User username={user?.username} fullName={user?.fullName} />
      <Suggestions
        userId={user?.userId}
        following={user?.following}
        loggedInUserDocId={user?.docId}
      />
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
}
