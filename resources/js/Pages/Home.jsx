import { Head } from "@inertiajs/react"
import { Navbar } from "@/Components/Navbar";



export default function Home ({ auth }){
  return(
    <div className="w-full min-h-screen bg-zinc-950">
      <Head title="Home" />
      <Navbar name={auth.user.name} />
    </div>
  )
}