"use client";

import Link from "next/link";

export default function LoginPage() {
    const handleLogin=(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const payload={
            email,password
        }
        console.log(payload)
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Login to continue to Hero Kidz
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
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

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 text-base"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-sm text-gray-400">OR</div>

        {/* Google Sign In */}
        <button className="btn btn-outline w-full flex items-center gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.7 1.22 9.19 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.11 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24.5c0-1.67-.15-3.27-.43-4.83H24v9.14h12.7c-.55 2.97-2.2 5.48-4.7 7.18l7.25 5.63C43.87 37.38 46.5 31.52 46.5 24.5z"
            />
            <path
              fill="#FBBC05"
              d="M10.54 28.59c-.48-1.44-.76-2.98-.76-4.59s.28-3.15.76-4.59l-7.98-6.19C.92 16.96 0 20.36 0 24s.92 7.04 2.56 10.78l7.98-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.14 15.9-5.81l-7.25-5.63c-2.01 1.35-4.58 2.14-8.65 2.14-6.26 0-11.57-3.61-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
