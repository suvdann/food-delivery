"use client";

import { useAuth } from "./_components/UserProvider";
import { redirect } from "next/navigation";

export default function Homepage() {
  const { user } = useAuth();

  if (user && !user) {
    redirect("/login");
  }

  return (
    <div>
      <p>Homepage</p>

      {user?.userId}
    </div>
  );
}
// export default Homepage
//user id baihgui bol login ruu pushlen
