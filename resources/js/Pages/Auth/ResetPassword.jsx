import { FaAngleLeft } from "react-icons/fa";
import { Head, Link, useForm } from "@inertiajs/react"

export default function ResetPassword ({ token, email }){

  const { data, setData, post, errors } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/reset-password');
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-evenly bg-zinc-950">
      <Head title="Reset password" />
      <Link href="/" className="text-zinc-400 px-10 font-semibold flex float-left">
        <FaAngleLeft size={24} />
        <span>Back</span>
      </Link>

      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="grid gap-5 grid-cols-1 w-2/6 p-16 rounded-xl bg-[conic-gradient(var(--tw-gradient-stops))] from-zinc-900 via-transparent to-zinc-900">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Reset Password</h1>
            <p className="text-gray-300">Reset your password</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2 text-white">
              <label className="block" htmlFor="email">Email</label>
              <input
                readOnly
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="bg-zinc-900 p-2 rounded-md w-full outline-none"
                />
            </div>
            <div className="space-y-2 text-white">
              <label className="block" htmlFor="password">New Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="New password"
                onChange={(e) => setData('password', e.target.value)}
                className="bg-zinc-900 p-2 rounded-md w-full outline-none"
                />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <div className="space-y-2 text-white">
              <label className="block" htmlFor="password_confirmation">Confirm New Password</label>
              <input
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                placeholder="Confirm new password"
                onChange={(e) => setData('password_confirmation', e.target.value)}
                className="bg-zinc-900 p-2 rounded-md w-full outline-none"
                />
              {errors.password_confirmation && <p className="text-red-500">{errors.password_confirmation}</p>}
            </div>
            <button type="submit" className="w-full p-2 rounded-md bg-white hover:bg-zinc-300">Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}
