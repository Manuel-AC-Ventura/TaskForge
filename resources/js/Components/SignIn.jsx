import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { ForgetPassword } from "./ForgetPassword";

export const SignIn = () => {
  const { data, setData, post, errors } = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/login");
  };

  return (
    <div className="space-y-4 w-full max-w-md">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Sign In</h1>
          <p className="text-gray-300">Sign in to your account</p>
        </div>
        <div className="space-y-4">
          {['email', 'password'].map((field) => (
            <div key={field} className="space-y-2 text-white">
              <label className="block" htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                id={field}
                type={field}
                name={field}
                value={data[field]}
                placeholder={`Enter your ${field}`}
                onChange={(e) => setData(field, e.target.value)}
                className="bg-zinc-900 p-2 rounded-md w-full outline-none"
              />
              {errors[field] && <p className="text-red-500">{errors[field]}</p>}
            </div>
          ))}
          <button type="submit" className="w-full p-2 rounded-md bg-white hover:bg-zinc-300">Sign In</button>
        </div>
      </form>
      <div className="text-left">
        <ForgetPassword />
      </div>
    </div>
  );
};
