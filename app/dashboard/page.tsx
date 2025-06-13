"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";

const DashboardPage = () => {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "admin-auth=; Max-Age=0; path=/"; // Clear the cookie
    router.push("/dashboard/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li className="hover:text-dimondra-teal cursor-pointer">Blogs</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>

          {/* Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 bg-dimondra-teal/90 text-white rounded-md hover:bg-dimondra-tealDark">
              Admin ▾
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-md hidden group-hover:block z-10">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Page Body */}
        <main className="p-6">
          <p className="text-lg">Welcome to the admin dashboard!</p>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
