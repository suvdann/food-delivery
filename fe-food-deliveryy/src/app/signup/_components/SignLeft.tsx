"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useFormik } from "formik"; //
import * as Yup from "yup"; //
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .required()
    .test(
      "email",
      "Invalid email. Use a format like example@email.com",
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      }
    ),
});
type signRightProps = {
  changeHandler: () => void;
  setEmail: Dispatch<SetStateAction<string>>;
};
export const SignLeft = ({ changeHandler, setEmail }: signRightProps) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchemaLogin,
    onSubmit: async (values) => {
      setEmail(values.email);
      changeHandler();
  
    },
  });
  const emailInputProps = {
    placeholder: "Enter your email address",
    name: "email",
    value: formik.values.email,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
  };
  const isButtonDisabled = !formik.errors.email;
  return (
    <div className="flex flex-col  justify-center gap-6  w-[416px] h-full">
      <div className="flex items-start justify-start w-full">
        <Button variant="outline">
          <ChevronLeft />
        </Button>
      </div>
      <div className=" ">
        <h3 className="font-bold text-[24px]">Create your account</h3>
        <p className="text-[#71717A]">
          Sign up to explore your favorite dishes.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input {...emailInputProps} />
          <div className="text-red-500">
            {formik.touched && formik.errors.email}
          </div>
          <Button type="submit" disabled={!isButtonDisabled}>
            Let's Go
          </Button>
        </div>
      </form>
      <div className="flex justify-center items-center gap-1">
        <p className="text-[#71717A]">Already have an account?</p>
        <Button variant="link" className="text-[#2563EB] "  onClick={()=>router.push("/login")}>
          Log in
        </Button>
      </div>
    </div>
  );
};
