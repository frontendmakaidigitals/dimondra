"use client";
import { Plus } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  Firestore,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/config/firebase";
const BlogListPage = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  interface Blog {
    id: string;
    title: string;
    content: string;
    imageURL: string;
    [key: string]: any;
    createdAt: Timestamp;
    author: string;
  }
  const [blogs, setBlogs] = useState<Blog[]>([]);
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
  const handleDeleteBlog = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };
  return (
    <div className="">
      <div className="fixed bottom-5 right-5">
        <motion.button
          onClick={() => router.push("/dashboard/Blogs/add")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{ width: isHovered ? "7.8rem" : "3rem" }}
          className=" h-12 group bg-lime-500 hover:bg-lime-600 rounded-full flex justify-center items-center gap-2"
        >
          <Plus />
          {isHovered ? (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.2 },
              }}
              exit={{ opacity: 0, x: 10 }}
              className=""
            >
              Add blog
            </motion.span>
          ) : null}
        </motion.button>
      </div>
      <h1 className="text-2xl font-semibold mb-6">All Blogs</h1>

      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="text-left px-6 py-3">Image</th>
              <th className="text-left px-6 py-3">Title</th>
              <th className="text-left px-6 py-3">Date</th>
              <th className="text-left px-6 py-3">Category</th>
              <th className="text-left px-6 py-3">Author</th>
              <th className="text-left px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">
                  <img
                    src={blog.imageURL}
                    alt={blog.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 font-medium">{blog.title}</td>
                <td className="px-6 py-4">
                  ``
                  {blog.createdAt.toDate().toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-2 py-1 text-xs rounded bg-teal-100 text-teal-800">
                    {blog.category}
                  </span>
                </td>
                <td className="px-6 py-4">{blog.author}</td>
                <td className="px-6 py-4 ">
                  <div className="flex flex-wrap gap-2">
                    {" "}
                    <button
                      onClick={() =>
                        router.push(`/dashboard/Blogs/edit/${blog.id}`)
                      }
                      className="px-3 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(blog.id)} // Replace with your delete handler
                      className="px-3 py-1 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogListPage;
