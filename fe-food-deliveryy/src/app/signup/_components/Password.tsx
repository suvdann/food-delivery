"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useFormik } from "formik"; //
import * as Yup from "yup"; //
import axios from "axios";
import { useRouter } from "next/navigation";
const validationSchemaLogin = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .test(
      "password-strength",
      "Password must be at least 8 characters, include upper/lowercase and number",
      (value) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(value);
      }
    ),

  confirm: Yup.string().oneOf([Yup.ref("password")], "password must match"),
});

type Props = {
  backHandler: () => void;
  email: string
};
export const CreatePassword = ({ backHandler, email }: Props) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm: "",
    },
    validationSchema: validationSchemaLogin,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:8000/signup", {
          email: email,
          password: values.password,
        });

       
        console.log(response, "response");
        router.push("/");
      } catch (err) {
        console.log(err);
        alert(err.response.data.message);
      }
    },
  });
  const passwordInputProps = {
    type: showPassword ? "text" : "password",
    placeholder: "Password",
    name: "password",
    value: formik.values.password,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    handleSubmit: formik.handleSubmit,
  };
  const passwordconfirmProps = {
    type: showPassword ? "text" : "password",
    name: "confirm",
    placeholder: "confirm",
    value: formik.values.confirm,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
  };
  return (
    <div className="flex flex-col  justify-center gap-6  w-[416px] h-full">
      <div className="flex items-start justify-start w-full">
        <Button variant="outline" onClick={backHandler}>
          <ChevronLeft />
        </Button>
      </div>
      <div className=" ">
        <h3 className="font-bold text-[24px]">Create a strong password</h3>
        <p className="text-[#71717A]">
          Create a strong password with letters, numbers.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input {...passwordInputProps} />
          <div className="text-red-500">
            {formik.touched && formik.errors.password}
          </div>

          <Input {...passwordconfirmProps} />
          <div className="text-red-500">
            {formik.touched && formik.errors.confirm}
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="showPassword"
              checked={showPassword}
              onCheckedChange={() => setShowPassword(!showPassword)} //  toggle
            />
            <label
              htmlFor="showPassword"
              className="text-[#71717A] cursor-pointer"
            >
              Show password
            </label>
          </div>

          <div className="text-red-500"></div>
          <Button type="submit">Let's Go</Button>
        </div>
      </form>
      <div className="flex justify-center items-center gap-1">
        <p className="text-[#71717A]">Already have an account?</p>
        <Button variant="link" className="text-[#2563EB] ">
          Log in
        </Button>
      </div>
    </div>
  );
};
