"use client";
import { ArrowUpRight, Circle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { db } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  content: string;
  imageURL: string;
  createdAt: string;
  author: string;
};
export interface contacts {
  id: string;
}

const DashboardPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [contact, setContact] = useState<contacts[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "blogs"));
        const blogsData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title ?? "",
            content: data.content ?? "",
            imageURL: data.imageURL ?? "",
            createdAt: data.createdAt ?? "",
            author: data.author ?? "",
            ...data,
          };
        });
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const snapshot = await getDocs(collection(db, "contact"));
        const blogsData = snapshot.docs.map((doc) => {
          const Data = doc.data();
          return {
            id: doc.id,
            ...Data,
          };
        });
        setContact(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchContact();
  }, []);

  return (
    <div className="min-h-screen w-full ">
      <h1 className="text-2xl mb-3 font-[500]">
        <Circle className="inline-block size-[12px] fill-black align-middle" />{" "}
        Your Stats
      </h1>
      <div className="grid grid-cols-4  gap-7">
        <div className="border border-slate-900/40 rounded-3xl p-4">
          <h2 className="text-lg font-[600]">Blogs</h2>
          <p className="text-7xl mt-4">{blogs.length}</p>
          <Link
            href={"dashboard/Blogs"}
            className="flex items-center w-fit mt-6 gap-3 rounded-2xl bg-teal-800 hover:bg-teal-700  text-dimondra-white px-4  py-2"
          >
            <span>View All</span>
            <span>
              <ArrowUpRight className="" />
            </span>
          </Link>
        </div>
        <div className="border border-slate-900/40 rounded-3xl p-4">
          <h2 className="text-lg font-[600]">Videos</h2>
          <p className="text-7xl mt-4">0</p>
          <button className="flex items-center mt-6 gap-3 rounded-2xl bg-teal-800 hover:bg-teal-700  text-dimondra-white px-4  py-2">
            <span>View All</span>
            <span>
              <ArrowUpRight className="" />
            </span>
          </button>
        </div>
        <div className="border border-slate-900/40 rounded-3xl p-4">
          <h2 className="text-lg font-[600]">Queries</h2>
          <p className="text-7xl mt-4">{contact.length}</p>
          <Link
            href={"/dashboard/Queries"}
            className="flex items-center w-fit mt-6 gap-3 rounded-2xl bg-teal-800 hover:bg-teal-700  text-dimondra-white px-4  py-2"
          >
            <span>View All</span>
            <span>
              <ArrowUpRight className="" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
