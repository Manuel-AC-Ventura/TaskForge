import { Head } from "@inertiajs/react"
import { SignIn } from "@/Components/SignIn"
import { SignUp } from "@/Components/SignUp"

export default function Sign(){

  return(
    <div className="w-full min-h-screen flex items-center justify-center bg-zinc-950">
      <Head title="Sign" />
      <meta name="description" content="Sign page for TaskForge" />
      <div className="grid gap-16 grid-cols-2 w-3/4 p-16 rounded-xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-transparent via-zinc-900 to-transparent">
        <SignIn/>
        <SignUp/>
      </div>
    </div>
  )
}
