import CustomInput from "./CustomInput"
import Logo from '@/app/assets/neuragileLogo.png'
import Image from "next/image"
import Link from "next/link"
import { UserCircle } from "lucide-react"

const NavBar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 h-24 px-24 border-b justify-center items-center flex border-neutral-200 w-full">
        <div className="justify-between flex flex-row items-center w-full max-w-7xl">
          <Link href={'/'}>
            <Image src={Logo} alt="logo" className="h-16 w-32 object-contain"/>
          </Link>
          <CustomInput/>
          <Link href={'/profile'}>
            <UserCircle className="text-neutral-400 cursor-pointer hover:text-neutral-500" size={24}/>
          </Link>
        </div>
    </nav>
  )
}

export default NavBar