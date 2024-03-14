import { useState , Suspense, lazy } from "react";
import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import { Sidebar } from "@/Components/Sidebar";
import { Account } from "@/Components/Settings/Account";



export default function Settings({ auth }){
  const menu = ["Account", "Security", "Privacy", "Email", "Billing"];
  const [active, setActive] = useState(menu[0])

  const TabRender = () =>{
    switch(active){
      case "Account":
        return <Account auth={auth} />

      default:
        return null;
    }
  }

  return(
    <div className="bg-zinc-950 flex">
      <Head title="Settings" />
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12">
        <Navbar />

        <nav className="h-8 mt-5 pl-8">
          <ul className="flex gap-8">
          {menu.map((item, index) => (
            <li 
              key={index}
              onClick={() => setActive(item)}
              className={`text-zinc-500 pb-2 cursor-pointer transition hover:text-blue-600 ${
                active === item ? 'text-blue-600 border-b-2 border-b-blue-600 font-semibold' : ''
              }`}
            >
              {item}
            </li>
            ))}
          </ul>
        </nav>

        <main className="flex gap-8 mx-8 mt-5">
          <div className="w-9/12 bg-zinc-900 rounded-md p-5">
            <Suspense fallback={<div>Loading...</div>}>
              {TabRender()}
            </Suspense>
          </div>
          
          <div className="w-3/12 h-64 bg-zinc-900 rounded-md p-5">

          </div>
        </main>
      </div>
    </div>
  )
}