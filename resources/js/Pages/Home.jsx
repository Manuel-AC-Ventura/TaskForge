import { Head } from "@inertiajs/react"
import { Navbar } from "@/Components/Navbar";
import { Sidebar } from "@/Components/Sidebar";



export default function Home ({ auth }){
  return(
    <div className="w-full min-h-screen bg-zinc-950">
      <Head title="Home" />
      <Navbar />
      <Sidebar />
    </div>
  )
}