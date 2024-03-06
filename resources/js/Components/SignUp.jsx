import { useState } from "react";
import { router, useForm } from "@inertiajs/react";

export const SignUp = () => {
  const [errors, setErrors] = useState({});
  const { data, setData} = useForm({
    name: '',
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
      router.post("/register", data, {
        onError: (error)=>{
          console.log(error)
          setErrors(error)
        }
      })
    } catch (error) {
      console.error("Erro ao fazer a solicitação:", error);
    }
  };
  

  return (
    <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Sign Up</h1>
        <p className="text-gray-300">Enter your information to create an account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2 text-white">
          <label className="block" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required={false}
            value={data.name}
            placeholder="Enter your name"
            onChange={handleChange}
            className="bg-zinc-900 p-2 rounded-md w-full outline-none"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="space-y-2 text-white">
          <label className="block" htmlFor="signUpEmail">Email</label>
          <input
            type="email"
            name="email"
            required={false}
            id="signUpEmail"
            value={data.email}
            placeholder="example@email.com"
            onChange={handleChange}
            className="bg-zinc-900 p-2 rounded-md w-full outline-none"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="space-y-2 text-white">
          <label className="block" htmlFor="signUpPassword">Password</label>
          <input
            type="password"
            name="password"
            required={false}
            id="signUpPassword"
            value={data.password}
            placeholder="**************"
            onChange={handleChange}
            className="bg-zinc-900 p-2 rounded-md w-full outline-none"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <button type="submit" className="w-full p-2 rounded-md bg-white hover:bg-zinc-300">Sign Up</button>
      </div>
    </form>
  );
};
