import { useForm } from "@inertiajs/react";

export const SignUp = () => {
  const { data, setData, post, errors } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/register");
  };

  return (
    <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Sign Up</h1>
        <p className="text-gray-300">Enter your information to create an account</p>
      </div>
      <div className="space-y-4">
        {['name', 'email', 'password'].map((field) => (
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
        <button type="submit" className="w-full p-2 rounded-md bg-white hover:bg-zinc-300">Sign Up</button>
      </div>
    </form>
  );
};
