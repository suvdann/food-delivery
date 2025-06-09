import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronLeft } from "lucide-react";

export const LoginEmail = () => {
  return (
    <div className="flex flex-col  justify-center gap-6  w-[416px] h-full">
      <div className="flex items-start justify-start w-full">
        <Button variant="outline">
          <ChevronLeft />
        </Button>
      </div>
      <h1 className="font-semibold text-[24px]">Log in </h1>
      <p className="text-[#71717A]">Log in to enjoy your favorite dishes.</p>
      <form>
        <div className="flex flex-col gap-4">
          <Input className=" " placeholder="Enter your email address"></Input>
          <Input placeholder="Password"></Input>
        </div>
      </form>
      <div>
      <Button variant="link" className="">Forgot password</Button>
        </div>
      <Button>Let's Go</Button>
      
    <div className="flex justify-center items-center">
    <p className="text-[#71717A]">Don't have an account?<Button variant="link" className="text-[#2563EB]" >Sign up</Button></p>
    </div>
    </div>
  );
};
