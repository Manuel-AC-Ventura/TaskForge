import { useForm } from "@inertiajs/react";



export const Account = ({ auth }) => {
  const user = auth.user;
  const { data, setData, put, errors, processing, reset } = useForm({
    name: user.name,
    email: user.email,
    password: '',
    password_confirmation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put('account', {
      onSuccess: ()=>{
        setData({
          ...data,
          password: '',
          password_confirmation: ''
        });
      }
    });
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="text-white">
      <h2 className="text-lg font-semibold mb-5">Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          <picture>
            {/* Adicionar a imagem do usuário se desejar */}
            <label htmlFor="img">
              <img className="h-14 cursor-pointer rounded-md" src="https://github.com/shadcn.png" alt="" />
            </label>
            <input id="img" type="file" hidden />
          </picture>
          <div className="flex space-x-4">
            <div className="space-y-2 flex-1">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={data.name}
                onChange={handleInputChange}
                placeholder="Enter your Name"
                className={`bg-zinc-800 p-2 rounded-md w-full outline-none ${
                  errors.name ? 'border border-red-500' : ''
                }`}
              />
              {errors.name && <div className="text-red-500">{errors.name}</div>}
            </div>
            <div className="space-y-2 flex-1">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={handleInputChange}
                placeholder="Enter your Email"
                className={`bg-zinc-800 p-2 rounded-md w-full outline-none ${
                  errors.email ? 'border border-red-500' : ''
                }`}
              />
              {errors.email && <div className="text-red-500">{errors.email}</div>}
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="space-y-2 flex-1">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={handleInputChange}
                placeholder="Enter your Password"
                className={`bg-zinc-800 p-2 rounded-md w-full outline-none ${
                  errors.password ? 'border border-red-500' : ''
                }`}
              />
              {errors.password && <div className="text-red-500">{errors.password}</div>}
            </div>
            <div className="space-y-2 flex-1">
              <label htmlFor="password_confirmation">Confirm Password</label>
              <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                value={data.password_confirmation}
                onChange={handleInputChange}
                placeholder="Confirm your Password"
                className={`bg-zinc-800 p-2 rounded-md w-full outline-none ${
                  errors.password_confirmation ? 'border border-red-500' : ''
                }`}
              />
              {errors.password_confirmation && <div className="text-red-500">{errors.password_confirmation}</div>}
            </div>
          </div>
          <button type="submit" disabled={processing} className="mt-4 bg-zinc-900 border-2 border-zinc-700 hover:bg-white hover:text-black hover:border-0 text-white p-2 rounded-md">
            {processing ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};