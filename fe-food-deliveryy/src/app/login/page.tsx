import { LoginEmail } from "./_components/LoginEmail"
import { RightPhoto } from "./_components/RightPhoto"

const Login=()=>{
return <div className="w-screen h-screen flex p-5">
    <div className=" flex-1/5 h-full justify-center"><LoginEmail/></div>
    <div className="flex-2/5 h-full"><RightPhoto/></div>
</div>

}
export default Login
