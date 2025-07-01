"use client";
import clsx from "clsx";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
type ServiceItem = {
  title: string;
  desc: string;
};

type ServiceCategory = {
  title: string;
  desc: string;
  arr: ServiceItem[];
  img: string;
  grid: string;
  wifth: string;
};

const Service = ({ data }: { data: ServiceCategory[] }) => {
  return (
    <>
      {data.map((item, idx) => (
        <section
          key={idx}
          className={`pb-14  ${idx % 2 === 0 ? "" : "bg-dimondra-grayDark"}`}
        >
          <div className="grid container place-items-center grid-cols-1 lg:grid-cols-2 gap-16">
            <div
              className={`${idx % 2 == 0 ? "order-1 lg:order-2" : "order-2 lg:order-1"}`}
            >
              {" "}
              <h1 className="text-5xl font-[500] font-dmSans">{item.title}</h1>
              <p className=" mx-auto mt-2 ">{item.desc}</p>
            </div>
            <img
              src={item.img}
              alt={""}
              className={`h-[400px] ${idx % 2 == 0 ? "order-2 lg:order-1" : "order-1 lg:order-2"}`}
              style={{
                objectFit: "cover",
                maskImage: "url('/strategyMask.svg')",
                maskRepeat: "url('/strategyMask.svg')",
                maskSize: "cover",
              }}
            />
          </div>

          <div className="">
            <div className={clsx(`mt-20 container`)}>
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  {data.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-1 md:basis-1/2  lg:basis-1/3 "
                    >
                      <div className="p-1 h-full">
                        <Card className="h-full flex flex-col">
                          <CardContent className="p-6 flex flex-col h-full">
                            <h2 className="text-3xl font-[500] font-dmSans">
                              {item.title}
                            </h2>
                            <p className="mt-2">{item.desc}</p>
                            {/* This pushes content up and ensures flex fill */}
                            <div className="flex-grow" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Service;
