import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "@inertiajs/react";

export const ForgetPassword = () => {
  const { data, setData, post, errors } = useForm({
    email: '',
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/forgot-password");
  };

  return (
    <Dialog>
      <DialogTrigger className="text-zinc-400 hover:text-zinc-600 underline">
        Forgot your password?
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border-zinc-700 text-white p-4 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">Forget my password</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="w-4/5 mx-auto space-y-3 py-3">
          <input 
            type="email"
            name="email"
            placeholder="Your email..."
            className="w-full px-3 py-2 bg-zinc-800 border-zinc-700 rounded-md outline-none"
            onChange={handleChange}
          />
          {Object.values(errors).map((error, index) => (
            <p key={index} className="text-red-500">{error}</p>
          ))}
          <button type="submit" className="w-full p-2 rounded-md bg-white hover:bg-zinc-300 text-black">Send</button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
