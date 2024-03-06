import { Link } from "@inertiajs/react";
import { LuFileText, LuSettings, LuMountain, LuLayoutDashboard } from "react-icons/lu";
import { RiStackLine } from "react-icons/ri";
import { FaRegFolder, FaChevronDown } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

const MenuItem = ({ Icon, label }) => (
  <li className="flex gap-3 items-center cursor-pointer text-zinc-300 hover:text-white">
    <Icon size={24} />
    <span>{label}</span>
  </li>
);

export const Sidebar = () => {
  return (
    <aside className="bg-zinc-900 w-2/12 min-h-screen p-8 flex flex-col justify-between">
      <ul>
        <li>
          <h1>
            <Link href="/home" className="flex gap-3 text-white items-center cursor-pointer">
              <LuMountain size={24} />
              <span className="text-xl font-semibold">TaskForge</span>
            </Link>
          </h1>
        </li>
        <li className="mt-16">
          <ul className="flex flex-col gap-6">
            <MenuItem Icon={LuLayoutDashboard} label="Dashboard" />
            <MenuItem Icon={RiStackLine} label="Projects" />
            <MenuItem Icon={LuFileText} label="Report" />
            <li className="flex items-center justify-between cursor-pointer text-zinc-300">
              <details open>
                <summary className="flex gap-3 items-center hover:text-white" style={{ listStyle: 'none' }}>
                  <IoRocketOutline size={24} />
                  <span>Work Space</span>
                  <FaChevronDown size={16} />
                </summary>
                <summary className="py-2 px-5 mt-2 flex gap-2 items-center hover:text-white">
                  <FaRegFolder size={16} />
                  <span className="text-sm">Empty folder</span>
                </summary>
                <summary className="py-2 px-5 flex gap-2 items-center hover:text-white">
                  <FaRegFolder size={16} />
                  <span className="text-sm">Homework</span>
                </summary>
                <summary className="py-2 px-5 flex gap-2 items-center hover:text-white">
                  <LuPlus size={16} />
                  <span className="text-sm">Create more</span>
                </summary>
              </details>
            </li>
            <MenuItem Icon={LuSettings} label="Settings" />
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
  );
};
