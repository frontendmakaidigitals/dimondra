"use client";
import { User } from "lucide-react";
import React, { useEffect, useState } from "react";
import Blogs from "../../(homepage)/Blogs";
import { db } from "@/config/firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useParams } from "next/navigation";
import { Editor } from "@/components/blocks/editor-00/editor";
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
  return (
    <div>
      {" "}
      <div className="bg-teal-800">
        <div className="h-[90dvh] container w-full relative">
          <img
            src={blog?.imageURL}
            alt={blog?.title}
            className="w-full h-[650px] object-cover absolute top-1/3  left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
      <div className="mt-[250px] container ">
        <div className="flex items-center justify-between ">
          <ul className="flex justify-start items-center gap-4">
            <li className="p-2 text-xs bg-dimondra-black text-slate-50 rounded-lg">
              {blog?.category}
            </li>
          </ul>
          <p>{blog?.createdAt.toDate().toLocaleDateString()}</p>
        </div>

        <div className="mt-8">
          <h1 className="text-6xl mb-9 tracking-tighter font-[500]">
            {blog?.title}
          </h1>
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
          <div className="mt-12 flex items-center gap-3">
            <div className="w-fit p-2 rounded-full bg-slate-200">
              <User />
            </div>
            <p>{blog?.author}</p>
          </div>
        </div>
        <Blogs />
      </div>
    </div>
  );
};

export default Page;
