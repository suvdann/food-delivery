import Image from "next/image"

export const RightPhoto=()=>{
    return <div className="relative flex-2/5 h-full">
        <Image src="/signup.png" alt="photo" fill></Image>
    </div>
}