"use client";
import { useState } from "react";
import { LoginEmail } from "./_components/LoginEmail";
import { RightPhoto } from "./_components/RightPhoto";
import { ResetPassword } from "./ResetPassword";
import { Dispatch, SetStateAction } from "react";
import { useAuth } from "../_components/UserProvider";
import { redirect } from "next/navigation";
// import { redirect } from "next/dist/server/api-utils";

type LoginProps = {
  changeHandler: () => void;
setEmail: Dispatch<SetStateAction<string>>;
};

const LoginPage = () => {
  const {user, tokenChecker}=useAuth()
  const [index, setIndex] = useState(0);
  
  const changeHandler = () => {
    setIndex((prev) => prev + 1);
  };
  
 if (user){
  redirect("/")
 }
  return (
    <div className="w-screen h-screen flex p-5">
      <div className=" flex-1/5 h-full justify-center">
        <LoginEmail  />
      </div>
      <div className="flex-2/5 h-full">
        <RightPhoto />
      </div>
    </div>
  );
};
export default LoginPage;
