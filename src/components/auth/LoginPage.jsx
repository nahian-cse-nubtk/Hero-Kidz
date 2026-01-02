"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import SocialButton from "../buttons/SocialButton";
import { useSearchParams } from "next/navigation";
export default function LoginPage() {
  const parmas = useSearchParams()
  const callbackUrl = parmas.get("callbackUrl")||"/"
  const handleLogin = async (e) => {

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await signIn('credentials', {

      email,
      password,
      redirect: false,
      callbackUrl: callbackUrl
    });

    if (result.ok) {
      Swal.fire({
        title: "Login Successful",
        icon: "success",
        draggable: true,
      }).then(() => {
      window.location.href = callbackUrl;
      });
    }
    else{
        Swal.fire("error","email and password donot match","error")
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary/10 to-secondary/10 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to continue to Hero Kidz</p>
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
        <SocialButton></SocialButton>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
            href={`/register?callbackUrl=${callbackUrl}`}
            className="text-primary font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
