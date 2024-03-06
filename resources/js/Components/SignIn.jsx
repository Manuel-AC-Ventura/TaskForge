import { useState } from "react";
import { Link } from "@inertiajs/react"
import { router, useForm } from "@inertiajs/react";

export const SignIn = ()=> {
  const [errors, setErrors] = useState({});
  const { data, setData} = useForm({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      router.post("/login", data, {
        onError: (error)=>{
          console.log(error)
          setErrors(error)
        }
      })
    } catch (error) {
      console.error("Erro ao fazer a solicitação:", error);
    }
  };

  return(
    <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Sign In</h1>
        <p className="text-gray-300">Sign in to your account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2 text-white">
          <label className="block" htmlFor="singInEmail">Email</label>
          <input
            type="email"
            name="email"
            id="singInEmail"
            onChange={handleChange}
            placeholder="example@email.com"
            className="bg-zinc-900 p-2 rounded-md w-full outline-none" 
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="space-y-2 text-white">
          <label className="block" htmlFor="singInpassword">Password</label>
          <input
            type="password"
            name="password"
            id="singInpassword"
            onChange={handleChange}
            placeholder="**************"
            className="bg-zinc-900 p-2 rounded-md w-full outline-none" 
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <button className="w-full p-2 rounded-md bg-white hover:bg-zinc-300">Sign In</button>
        <div className="text-left">
          <Link className="text-zinc-400 hover:text-zinc-600 underline" href="#">
            Forgot your password?
          </Link>
        </div>
      </div>
    </form>
  )
}