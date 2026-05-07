import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("All required fields must be filled");
      return;
    }

    if (!validateEmail(form.email)) {
      toast.error("Invalid email format");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://waitlist-system.onrender.com/api/waitlist",
        form
      );

      toast.success(res.data.message);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600 px-4">
    
    <div className="w-full max-w-md">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl transition duration-300 hover:scale-[1.02]">
        
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Join Waitlist 🚀
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your message *"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className={`py-3 rounded-lg font-semibold transition duration-300 shadow-lg
              ${loading 
                ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
                : "bg-white text-blue-700 hover:bg-gray-200 hover:shadow-blue-400/30"
              }`}
          >
            {loading ? "Submitting..." : "Join Waitlist"}
          </button>
        </form>
        
      </div>

      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-blue-500"></div>
    </div>
  </div>
)}

export default App;