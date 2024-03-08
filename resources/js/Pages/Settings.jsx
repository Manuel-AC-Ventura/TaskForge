import { Head } from "@inertiajs/react"
import { Navbar } from "@/Components/Navbar";
import { Sidebar } from "@/Components/Sidebar";

export default function Settings ({ auth }){
  return(
    <div className="w-full min-h-screen bg-zinc-950">
      <Head title="Home" />
      <div className="w-2/12 float-left">
        <Sidebar />
      </div>
      <div className="w-10/12 min-h-screen float-right">
        <Navbar />
        <main className="w-full min-h-full p-5 text-white">
          <h1 className="text-2xl font-semibold">Settings</h1>
        </main>
      </div>
    </div>
  )
}