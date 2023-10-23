import Image from "next/image"
import img from "@/public/next.svg"

export const Logo = () => {
    return(
        <Image 
        src={img}
        alt="logo"
        height={130}
        width={130}
        />
    )
}