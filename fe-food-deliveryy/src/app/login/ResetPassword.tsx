import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft } from "lucide-react"

export const ResetPassword=()=>{
    return <div>
        <Button><ChevronLeft/></Button>
        <h1> Reset your password </h1>
        <p>Enter your email to receive a password reset link.</p>
        <Input placeholder="example@gamil.com"></Input>
        <Button type="submit">Send Link</Button>
        <p>Don’t have an account?<Button variant="link" className="text-[#2563EB]"> Sign up</Button></p>
    </div>
} 