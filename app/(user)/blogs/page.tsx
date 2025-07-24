"use client";
import React, { useState, useEffect, useMemo } from "react";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import BgLayer from "../app_chunks/BgLayer";
import { Calendar, MoveUpRight, User } from "lucide-react";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Editor } from "@/components/blocks/editor-00/editor";
import Link from "next/link";
interface Blog {
  id: string;
  title: string;
  content: string;
  imageURL: string;
  [key: string]: any;
  createdAt: Timestamp;
  author: string;
  category: string;
}
const Page = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

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
            category: data.category ?? "",
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

  return (
    <div className="pb-24">
      <div className="w-full overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="h-[70vh] lg:h-[95vh] p-1 rounded-xl">
            {blogs
              .sort((a, b) => {
                const aTime =
                  a.createdAt && typeof a.createdAt.toMillis === "function"
                    ? a.createdAt.toMillis()
                    : 0;
                const bTime =
                  b.createdAt && typeof b.createdAt.toMillis === "function"
                    ? b.createdAt.toMillis()
                    : 0;
                return bTime - aTime;
              })
              .slice(0, 3)
              .map((blog) => (
                <CarouselItem className="h-full" key={blog.id}>
                  <Link
                    href={`/blogs/${encodeURIComponent(blog.title.toLowerCase().replace(/\s+/g, "-"))}`}
                  >
                    <div className=" w-full h-full relative">
                      <BgLayer color={"bg-slate-900/40 z-10"} />
                      <div className="absolute inset-0 w-full rounded-lg overflow-hidden h-full">
                        <img
                          className="w-full h-full object-cover"
                          src={blog.imageURL}
                          alt={blog.title}
                        />
                      </div>
                      <BgLayer color="bg-slate-900/20" />
                      <div className="relative  z-20 flex flex-col lg:flex-row items-end justify-end lg:justify-between container py-9 w-full h-full">
                        <div>
                          <span className="p-2 text-xs bg-dimondra-white text-slate-900 rounded-lg">
                            {blog.category}
                          </span>
                          <h1 className="text-4xl lg:text-6xl max-w-2xl mt-3 text-slate-50 tracking-tighter font-[500]">
                            {blog.title}
                          </h1>
                          <div>
                            <div className="mt-1 max-w-3xl ">
                              {blog.content ? (
                                <Editor
                                  editorSerializedState={
                                    typeof blog.content === "string"
                                      ? JSON.parse(blog.content)
                                      : blog.content
                                  }
                                  readOnly
                                  clampLines={2}
                                  blogPage={false}
                                  text="text-slate-50"
                                />
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 lg:mt-0">
                          <div className=" flex items-center gap-4">
                            <div className="p-2 bg-slate-200 rounded-full">
                              <User className="size-[16px]" />
                            </div>
                            <p className="text-slate-50">{blog.author}</p>
                          </div>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="p-2 bg-slate-200 rounded-full">
                              <Calendar className="size-[16px]" />
                            </div>
                            <p className="text-slate-50 mt-2">
                              {blog.createdAt.toDate().toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>

          <div className="absolute top-1/2 left-2 lg:-left-10 flex items-center justify-center">
            <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
          </div>
          <div className="absolute top-1/2 right-2 lg:-right-10 flex items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
          </div>
        </Carousel>
      </div>
      <div className="container my-10">
        <h2 className="font-[600] text-4xl text-dimondra-black tracking-tighter">
          Blogs Topics
        </h2>
        <p className="text-sm mt-2">
          Discover blogs categorized by themes — from AI breakthroughs to modern
          web development trends.
        </p>
      </div>
      <div className="container">
        <BlogTopic blogs={blogs} />
      </div>
    </div>
  );
};

export default Page;

const BlogTopic = ({ blogs }: { blogs: Blog[] }) => {
  const [activeTopic, setActiveTopic] = useState("All");
    console.log(blogs)
  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => {
      const bTime = b.createdAt?.toMillis?.() || 0;
      const aTime = a.createdAt?.toMillis?.() || 0;
      return bTime - aTime;
    });
  }, [blogs]);

  // Skip the first 3 recent blogs
  const remainingBlogs = sortedBlogs.slice(3);

  const allTopics = useMemo(() => {
    const topicsSet = new Set<string>(["All"]);
    remainingBlogs.forEach((blog) => {
      if (blog.category) {
        topicsSet.add(blog.category);
      }
    });
    return Array.from(topicsSet);
  }, [remainingBlogs]);

  const filteredBlogs =
    activeTopic === "All"
      ? remainingBlogs
      : remainingBlogs.filter((blog) => blog.category === activeTopic);
  return (
    <div className="mt-2">
      {filteredBlogs.length > 0 ? (
        <>
          <div className="flex flex-wrap gap-3 mb-8">
            {allTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-medium border",
                  activeTopic === topic
                    ? "bg-dimondra-teal text-dimondra-white border-dimondra-tealDark"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                )}
              >
                {topic}
              </button>
            ))}
          </div>
          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="p-1 w-full relative">
                <Card className="w-full">
                  <CardContent className="w-full px-1 pt-1 pb-5 ">
                    <div className="h-[250px] lg:h-[220px] w-full rounded-lg overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={blog.imageURL}
                        alt={`blog ${blog.id + 1}`}
                      />
                    </div>
                    <div className="mt-3 px-2">
                      <h3 className=" font-bold line-clamp-2">{blog.title}</h3>
                      <div className="mt-1">
                        {blog.content ? (
                          <Editor
                            editorSerializedState={
                              typeof blog.content === "string"
                                ? JSON.parse(blog.content)
                                : blog.content
                            }
                            readOnly
                            clampLines={2}
                            blogPage={false}
                          />
                        ) : null}
                      </div>
                      <Link
                        href={`/blogs/${encodeURIComponent(blog.title.toLowerCase().replace(/\s+/g, "-"))}`}
                      >
                        <button className="absolute right-4 bottom-1 translate-y-1/2 bg-dimondra-teal hover:bg-dimondra-tealDark text-dimondra-white rounded-lg p-2">
                          <MoveUpRight />
                        </button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center items-center h-[150px]">
          <h3>No new Blogs Found</h3>
        </div>
      )}
    </div>
  );
};
