import { Link } from "@inertiajs/react";
import { FaRegBell } from "react-icons/fa";
import { LuMountain } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";

export const Navbar = (name)=>{
  
  return(
		<header className="w-full text-zinc-300 flex items-center justify-between py-7 px-16 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-transparent via-zinc-900 to-transparent">
      <h1 className="flex gap-3 items-center font-semibold cursor-pointer">
        <LuMountain size={30}/>
      </h1>

      <ul className="flex gap-7 flex-row text-md font-semibold">
        <li className="text-zinc-400 cursor-pointer hover:text-white">Tasks</li>
        <li className="text-zinc-400 cursor-pointer hover:text-white">Calendar</li>
        <li className="text-zinc-400 cursor-pointer hover:text-white">Files</li>
        <li>
          <Link
            href="/logout"
            method="post" 
            as="button" 
            type="button"
          >
            <HiOutlineLogout size={26} />
          </Link>
        </li>
      </ul>
		</header>
	)
}