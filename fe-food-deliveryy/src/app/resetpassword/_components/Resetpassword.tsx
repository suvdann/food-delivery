import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

export const Resetpassword = () => {
  return (
    <div className="flex flex-col  justify-center gap-6  w-[416px] h-full">
      <div className="flex items-start justify-start w-full">
        {" "}
        <Button variant="outline">
          <ChevronLeft />
        </Button>
      </div>

      <h1 className="font-semibold text-[24px]"> Reset your password </h1>
      <p className="text-[#71717A]">Enter your email to receive a password .</p>
      <Input placeholder="example@gmail.com"></Input>
      <Button type="submit">Send code</Button>
      <p>
        Don’t have an account?
        <Button variant="link" className="text-[#2563EB]">
          Sign up
        </Button>
      </p>
    </div>
  );
};
