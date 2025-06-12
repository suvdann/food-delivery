"use client"
import { redirect } from "next/dist/server/api-utils"
import { useAuth } from "./_components/UserProvider"
import { useRouter } from "next/navigation"
export default function  Homepage(){
const router=useRouter()
  const {user}=useAuth()
  console.log(user)
  if(!user){
    router.push("/login")
  }
  return <div>
  <p>Homepagel</p>

      {user?.userId}
  </div>
}
// export default Homepage
//user id baihgui bol login ruu pushlen