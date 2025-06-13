"use client";
import React, { useState } from "react";
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

const Page = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="pb-24">
      <div className="w-full">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="h-[95vh] p-1 rounded-xl">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem className="h-full" key={index}>
                <div className=" w-full h-full relative">
                  <div className="absolute inset-0 w-full rounded-lg overflow-hidden h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={
                        "https://images.unsplash.com/photo-1738491096331-cffcf91bcf5b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt={"blog"}
                    />
                  </div>
                  <BgLayer color="bg-slate-900/20" />
                  <div className="relative  z-20 flex items-end justify-between container py-9 w-full h-full">
                    <div>
                      <span className="p-2 text-xs bg-dimondra-black text-slate-50 rounded-lg">
                        Machine learning
                      </span>
                      <h1 className="text-6xl max-w-xl mt-3 text-slate-50 tracking-tighter font-[500]">
                        This is a Heading for Blog Detail Page
                      </h1>
                      <p className="text-slate-50 mt-3 max-w-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa harum dolorum tempora natus similique fuga,
                        numquam quisquam soluta repellat aspernatur, quia minus
                        ut doloribus voluptas nisi provident? Dolore, nulla
                        tenetur!
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-slate-200 rounded-full">
                          <User className="size-[16px]" />
                        </div>
                        <p className="text-slate-50">Author Name</p>
                      </div>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="p-2 bg-slate-200 rounded-full">
                          <Calendar className="size-[16px]" />
                        </div>
                        <p className="text-slate-50 mt-2">11 June 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="container my-10">
        <h2 className="font-[600] text-4xl text-dimondra-black tracking-tighter">
          Blogs Topics
        </h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum
          repellat quae.
        </p>
      </div>
      <div className="container">
        <BlogTopic />
      </div>
    </div>
  );
};

export default Page;

const BlogTopic = () => {
  const topics = ["All", "AI", "Machine Learning", "Development"];

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Shaping Design",
      topic: "AI",
      desc: "Explore how artificial intelligence is changing the way we design.",
    },
    {
      id: 2,
      title: "Getting Started with React",
      topic: "Development",
      desc: "A beginner's guide to building apps with React.",
    },
    {
      id: 3,
      title: "Intro to Machine Learning",
      topic: "Machine Learning",
      desc: "Learn the fundamentals of ML and how it applies to real-world problems.",
    },
    {
      id: 4,
      title: "Advanced React Patterns",
      topic: "Development",
      desc: "Dive into powerful patterns for building scalable apps in React.",
    },
  ];
  const [activeTopic, setActiveTopic] = useState("All");

  const filteredPosts =
    activeTopic === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.topic === activeTopic);
  return (
    <div className="mt-2">
      {/* Topic Selector */}
      <div className="flex flex-wrap gap-3 mb-8">
        {topics.map((topic) => (
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
        {filteredPosts.map((post) => (
          <div key={post.id} className="p-1 w-full relative">
            <Card className="w-full">
              <CardContent className="w-full px-1 pt-1 pb-5 ">
                <div className="h-[250px] lg:h-[220px] w-full rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      "https://images.unsplash.com/photo-1709338573013-1d8b14702620?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt={`blog ${post.id + 1}`}
                  />
                </div>
                <div className="mt-3 px-2">
                  <h3 className=" font-bold line-clamp-2">{post.title}</h3>
                  <p className="mt-2 text-sm  line-clamp-2">{post.desc}</p>
                  <button className="absolute right-4 bottom-1 translate-y-1/2 bg-dimondra-teal hover:bg-dimondra-tealDark text-dimondra-white rounded-lg p-2">
                    <MoveUpRight />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
