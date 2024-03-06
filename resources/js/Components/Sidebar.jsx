import { Link } from "@inertiajs/react"
import { LuFileText } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuMountain } from "react-icons/lu";
import { RiStackLine } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";


export const Sidebar = ()=>{
  return(
    <aside className="bg-zinc-900 w-2/12 min-h-screen p-8 flex flex-col justify-between">
      <ul>
        <li>
          <h1>
            <Link
              href="/home"
              className="flex gap-3 text-white items-center cursor-pointer"
            >
              <LuMountain size={24}/>
              <span className="text-xl font-semibold" >TaskForge</span>
            </Link>
          </h1>
        </li>
        <li className="mt-16">
          <ul className="flex flex-col gap-6">
            <li className="flex gap-3 items-center cursor-pointer text-zinc-300 hover:text-white">
              <LuLayoutDashboard size={24} />
              <span>Dashboard</span>
            </li>
            <li className="flex gap-3 items-center cursor-pointer text-zinc-300 hover:text-white">
              <RiStackLine size={24} />
              <span>Projects</span>
            </li>
            <li className="flex gap-3 items-center cursor-pointer text-zinc-300 hover:text-white">
              <LuFileText size={24} />
              <span>Report</span>
            </li>
            <li className="flex items-center justify-between cursor-pointer text-zinc-300">
              <details>
                <summary className="flex gap-3 items-center hover:text-white" style={{ listStyle: 'none' }}>
                  <IoRocketOutline size={24} />  
                  <span>Work Space</span>
                  <FaChevronDown size={16} />
                </summary>
                <summary className="py-2 px-5 mt-2 flex gap-2 items-center hover:text-white">
                  <FaRegFolder size={16} />
                  <span className="text-sm">Empy folder</span>
                </summary>
                <summary className="py-2 px-5 flex gap-2 items-center hover:text-white">
                  <FaRegFolder size={16} />
                  <span className="text-sm">Homework</span>
                </summary>
              </details>
            </li>
            <li className="flex gap-3 items-center cursor-pointer text-zinc-300 hover:text-white">
              <LuSettings size={24} />
              <span>Settings</span>
            </li>
          </ul>
        </li>
      </ul>

      <Link
        as="button"
        method="post"
        type="button"
        href="/logout"
        className="text-red-500 w-full flex items-center gap-3 p-2 rounded-md border border-red-600 hover:text-white hover:bg-red-600"
      >
        <MdOutlineLogout className="ml-2" size={24} />
        <span>Logout</span>
      </Link>
    </aside>
  )
}