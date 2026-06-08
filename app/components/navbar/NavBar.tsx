import CustomInput from "./CustomInput"
import Logo from '@/app/assets/neuragileLogo.png'
import Image from "next/image"
import Link from "next/link"
import { UserCircle, MessagesSquare } from "lucide-react"
import LocaleSwitcher from "../LocaleSwitcher"

const NavBar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 h-auto min-h-20 py-4 md:py-0 md:h-24 px-4 md:px-24 border-b flex justify-center items-center border-neutral-200 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl gap-4 md:gap-0">
        
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href={'/'}>
            <Image src={Logo} alt="logo" className="h-12 w-24 md:h-16 md:w-32 object-contain"/>
          </Link>
          
          <div className="flex gap-4 md:hidden">
             <Link href={'/chat'}>
              <MessagesSquare className="text-neutral-400" size={24}/>
            </Link>
            <Link href={'/profile'}>
              <UserCircle className="text-neutral-400" size={24}/>
            </Link>
            <LocaleSwitcher/>

          </div>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/2 px-2 md:px-0">
          <CustomInput />
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <Link href={'/chat'}>
            <MessagesSquare className="text-neutral-400 cursor-pointer hover:text-neutral-500 transition-colors" size={24}/>
          </Link>
          <Link href={'/profile'}>
            <UserCircle className="text-neutral-400 cursor-pointer hover:text-neutral-500 transition-colors" size={24}/>
          </Link>
          <LocaleSwitcher/>
        </div>

      </div>
    </nav>
  )
}

export default NavBar