import { LuBell } from "react-icons/lu"
import { GrFormSearch } from "react-icons/gr";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export const Navbar = ()=>{
  return(
    <header className="w-10/12 h-20 px-5 text-white float-right bg-zinc-900">
      <nav className="h-full flex py-2 items-center justify-between">
        <a href=""></a>
        <form className="h-3/5 w-96 flex gap-2 px-3 items-center bg-zinc-800 rounded-md">
          <input 
            type="text"
            placeholder="Search anything..."
            className="w-11/12 h-full px-2 bg-transparent outline-none"
          />
          <button><GrFormSearch className="text-zinc-400" size={30} /></button>
        </form>
        <ul className="flex gap-8 items-center">
          <li><LuBell size={24} /></li>
          <li>
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </li>
        </ul>
      </nav>
    </header>
  )
}