"use client"

import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";

export default function RegisterPage() {
    const router =useRouter()
    const path = usePathname()
    const handleRegister =async(e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const payload = {
            name,email,password
        }
        const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await res.json()
        if(result.acknowleged){
            alert("Registration Successful Please Login")
            router.push(`/login?callbackUrl=${path}`)

        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Join Hero Kidz and start your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full focus:input-primary"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full focus:input-primary"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full focus:input-primary"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 text-base"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
