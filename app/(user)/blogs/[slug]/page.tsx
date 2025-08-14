"use client";
import { User, Facebook, Twitter } from "lucide-react";
import React, { useEffect, useState } from "react";
import Blogs from "../../(homepage)/Blogs";
import { db } from "@/config/firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useParams } from "next/navigation";
import { Editor } from "@/components/blocks/editor-00/editor";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Page = () => {
  function slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/—/g, "-") // replace em dash
      .replace(/[^\w\s-]/g, "") // remove punctuation
      .replace(/\s+/g, "-"); // replace spaces with -
  }
  const params = useParams();
  const [blog, setBlog] = useState<{
    author: string;
    category: string;
    content: string;
    id: string;
    [key: string]: any;
    createdAt: Timestamp;
    imageURL: string;
    metaDesc: string;
    metaTitle: string;
    title: string;
  }>();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "blogs"));

        const blogsData = snapshot.docs
          .filter(
            (doc) =>
              slugify(doc.data().title) ===
              slugify(
                decodeURIComponent(
                  typeof params.slug === "string"
                    ? params.slug
                    : Array.isArray(params.slug)
                      ? (params.slug[0] ?? "")
                      : ""
                )
              )
          )
          .map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              author: data.author ?? "",
              category: data.category ?? "",
              content: data.content ?? "",
              createdAt: data.createdAt ?? Timestamp.now(),
              imageURL: data.imageURL ?? "",
              metaDesc: data.metaDesc ?? "",
              metaTitle: data.metaTitle ?? "",
              title: data.title ?? "",
              ...data,
            };
          });
        setBlog(blogsData[0]);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  function calculateReadTime(text: string) {
    const wordsPerMinute = 200; // average reading speed
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }

  const pathname = usePathname();
  const blogURL = `https://yourwebsite.com${pathname}`;
  const blogTitle = blog?.title || "";

  return (
    <main className="pt-28 relative container ">
      <div className="flex flex-col items-center">
        <p className="p-2 text-xs bg-teal-100 text-teal-700 rounded-lg font-bold font-quicksand text-center mb-2">
          {blog?.category}
        </p>
        <h1 className="text-6xl tracking-tighter font-[600] text-center">
          {blog?.title}
        </h1>
      </div>

      <div className="flex flex-col items-center mt-8">
        <ul className="flex items-center gap-4 text-sm divide-x divide-slate-300">
          <li className="flex items-center gap-3 ">
            <div className="w-fit p-2 rounded-full bg-slate-200">
              <User size={16} />
            </div>
            <p>{blog?.author}</p>
          </li>
          <li className="pl-3">{blog?.createdAt.toDate().toDateString()}</li>
          <li className="pl-3">
            {blog?.content ? calculateReadTime(blog?.content) : null}
          </li>
        </ul>

        <ul className="flex justify-center items-center mt-5">
          <li className="flex items-center gap-3">
            <Link
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogTitle)}&url=${encodeURIComponent(blogURL)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 flex text-slate-50 items-center gap-2 py-[.4rem] border border-slate-200 rounded-lg  bg-[#1DA1F2]">
                <Twitter /> Tweet
              </button>
            </Link>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogURL)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 text-slate-50 flex items-center gap-2 py-[.4rem] border border-slate-200 rounded-lg bg-[#1877F2]">
                <Facebook /> Share
              </button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full h-[580px] mt-12 rounded-xl overflow-hidden">
        <img
          src={blog?.imageURL}
          alt={blog?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-5xl mx-auto ">
        <div className="mt-8">
          {blog?.content ? (
            <Editor
              editorSerializedState={
                typeof blog.content === "string"
                  ? JSON.parse(blog.content)
                  : null
              }
              readOnly
              blogPage={true}
            />
          ) : null}
        </div>
      </div>
      <Blogs />
    </main>
  );
};

export default Page;
