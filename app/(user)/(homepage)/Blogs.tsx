"use client";
import React from "react";
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
const Blogs = () => {
  const articles = [
    {
      title: "Top Business Support Services Every Startup Needs in 2025",
      description:
        "Discover the essential services like HR, IT, and admin support that can help your startup run smoother and grow faster.",
      img: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "How to Get Help with Your Career: A Simple Guide for Job Seekers",
      description:
        "Learn how career advisory services can boost your job search, build your confidence, and help you land the right role.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Why Your Business Needs Professional HR Services",
      description:
        "See how outsourcing HR can save time, ensure compliance, and improve employee satisfaction in your company.",
      img: "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Best Digital Tools to Grow Your Small Business Online",
      description:
        "Explore easy-to-use digital tools that can help your business attract more customers and work more efficiently.",
      img: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

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
        <h1 className="text-5xl blogText lg:text-6xl mt-1 !leading-[5.3rem] font-[600] text-dimondra-black">
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
              {articles.map((blog, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 pb-6 lg:basis-1/4"
                >
                  <div className="p-1 w-full relative">
                    <Card className="w-full">
                      <CardContent className="w-full px-1 pt-1 pb-5 ">
                        <div className="h-[250px] lg:h-[220px] w-full rounded-lg overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            src={blog.img}
                            alt={`blog ${index+1}`}
                          />
                        </div>
                        <div className="mt-3 px-2">
                          <h3 className=" font-bold line-clamp-2">
                            {blog.title}
                          </h3>
                          <p className="mt-2 text-sm  line-clamp-2">
                            {blog.description}
                          </p>
                          <button className="absolute right-4 bottom-1 translate-y-1/2 bg-dimondra-teal hover:bg-dimondra-tealDark text-dimondra-white rounded-lg p-2">
                            <MoveUpRight />
                          </button>
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
