"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
const validEmail = "admin";
const validPassword = "12345678";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email === validEmail && password === validPassword) {
      console.log(email)
      document.cookie = `admin-auth=true; path=/; max-age=${7 * 24 * 60 * 60}`;
      router.push("/dashboard");
    } else {
      console.log("error");
      setError("Invalid user or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <img
        src={"/login.svg"}
        className="opacity-[.7] w-full absolute h-full object-cover inset-0 "
      />
      <form
        onSubmit={handleLogin}
        className="w-full border border-slate-100 max-w-md relative z-20 bg-white/30 backdrop-filter backdrop-blur-lg p-8 rounded-lg "
      >
        <h1 className="text-3xl text-dimondra-black font-semibold mb-10 text-start">
          Admin Login
        </h1>

        {error && (
          <p className="text-red-600 mb-4 text-sm text-center">{error}</p>
        )}

        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          label="User"
          size="sm"
          variant="faded"
        />
        <Input
          type="password"
          className="mt-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="faded"
          size="sm"
          label={"password"}
        />
        <Button
          className="w-full mt-10 bg-dimondra-teal/50 hover:bg-dimondra-tealDark hover:text-dimondra-white"
          type="submit"
          size="lg"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
