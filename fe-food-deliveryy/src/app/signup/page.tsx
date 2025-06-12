"use client";
import { useState } from "react";
import { SignLeft } from "../signup/_components/SignLeft";
import { SignRight } from "../signup/_components/SignRight";
import { CreatePassword } from "./_components/Password";
import { useAuth } from "../_components/UserProvider";
import { redirect } from "next/navigation";



const Homepage = () => {
  const arr = [SignLeft, CreatePassword];
  const [index, setIndex] = useState(0);
  const changeHandler = () => {
    setIndex((prev) => prev + 1);
  };
  const backHandler = () => {
    setIndex((prev) => prev - 1);
  };
  const Stepper = arr[index];

  const [email, setEmail] = useState("");
 const {user, tokenChecker}=useAuth()
 if(user){
  redirect("/")
 }
  return (
    <div className="w-screen h-screen flex p-5">
      <div className=" flex-1/5 h-full justify-center">
        <Stepper
          changeHandler={changeHandler}
          backHandler={backHandler}
          email={email}
          setEmail={setEmail}
        />
      </div>
      <div className="flex-2/5 h-full">
        <SignRight />
      </div>
    </div>
  );
};
export default Homepage;
