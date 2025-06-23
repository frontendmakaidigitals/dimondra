"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";
import { useSplitText } from "@/app/hooks/useSplitTExt";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Editor } from "@/components/blocks/editor-00/editor";
import { Timestamp } from "firebase/firestore";
import Link from "next/link";

const Blogs = () => {
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

  useSplitText({
    selector: ".blogText",
    duration: 0.8,
    y: 80,
    alpha: 0,
    stagger: 0.01,
    trigger: ".blogTrigger",
    type: "chars, lines",
    linesClass: "line-wrapper++",
  });

  return (
    <div className="my-28">
      <div className="container blogTrigger">
        <h1 className="text-5xl blogText font-dmSans tracking-tight lg:text-6xl mt-1 !leading-[5rem] font-[600] text-dimondra-black">
          Latest from the blog
        </h1>
        <div className="mt-8">
          <Carousel
            opts={{
              align: "start",
            }}
            className=" w-full "
          >
            <CarouselContent>
              {blogs.map((blog: Blog, index: number) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 pb-6 lg:basis-1/4"
                >
                  <div className="p-1 w-full relative">
                    <Card className="w-full">
                      <CardContent className="w-full px-1 pt-1 pb-5 ">
                        <div className="h-[250px] lg:h-[220px] w-full rounded-lg overflow-hidden">
                          {blog.imageURL ? (
                            <img
                              className="w-full h-full object-cover"
                              src={blog.imageURL}
                              alt={`blog ${index + 1}`}
                            />
                          ) : null}
                        </div>
                        <div className="mt-3 px-2">
                          <h3 className=" font-bold line-clamp-2">
                            {blog.title}
                          </h3>

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
                          <div className="flex mt-2 text-xs  items-center justify-between ">
                            <span>{blog.author}</span>
                            <span className="">
                              {blog.createdAt && blog.createdAt.toDate
                                ? blog.createdAt.toDate().toLocaleDateString()
                                : "Unknown"}
                            </span>
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
      </div>
    </div>
  );
};

export default Blogs;
