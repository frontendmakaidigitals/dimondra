// app/blog/[slug]/page.tsx (server component)
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Metadata } from "next";
import BlogClient from "./BlogClient";

type Blog = {
  id: string;
  title: string;
  author?: string;
  category?: string;
  content?: string;
  metaTitle?: string;
  metaDesc?: string;
  imageURL?: string;
  createdAt?: string | null; // 🔹 only keep createdAt
  updatedAt?: string | null;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/—/g, "-")
    .replace(/[^\w\s-]/g, "") // remove punctuation
    .replace(/\s+/g, "-");
}

async function getBlogs(): Promise<Blog[]> {
  const snapshot = await getDocs(collection(db, "blogs"));
  return snapshot.docs.map((doc) => {
    const data = doc.data() as Blog;

    return {
      ...data,
      createdAt: data.createdAt
        ? (data.createdAt as any).toDate().toLocaleDateString() // 🔹 ensure plain string
        : null,
      updatedAt: data.updatedAt
        ? (data.updatedAt as any).toDate().toISOString() // 🔹 ensure plain string
        : null,
    };
  });
}

// 🔹 Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const blogs = await getBlogs();
  const { slug } = await params;
  const blog = blogs.find(
    (b) => slugify(b.title) === slugify(decodeURIComponent(slug))
  );

  return {
    title: blog?.title || "Blog Title",
    description: blog?.metaDesc || "",
    openGraph: {
      title: blog?.metaTitle || blog?.title,
      description: blog?.metaDesc || "",
      images: blog?.imageURL ? [blog.imageURL] : [],
      url: `https://dimondra.com/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.metaTitle || blog?.title,
      description: blog?.metaDesc || "",
      images: blog?.imageURL ? [blog.imageURL] : [],
    },
  };
}

// 🔹 Page
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find(
    (b) => slugify(b.title) === slugify(decodeURIComponent(slug))
  );

  if (!blog) {
    return <div className="p-8 text-center text-gray-500">Blog not found</div>;
  }

  return <BlogClient blog={blog} />;
}
