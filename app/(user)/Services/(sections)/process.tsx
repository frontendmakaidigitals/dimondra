import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import BgLayer from "../../app_chunks/BgLayer";
interface processProps {
  title: string;
  description: string;
  imgUrl: string;
}
const Process = ({
  data,
  heading,
  subHeading,
}: {
  data: processProps[];
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="my-28">
      <div className="container blogTrigger">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-dmSans tracking-tighter blogText text-center mt-1 !leading-[3.4rem] font-[600] text-dimondra-black">
            {heading}
          </h1>
          <p className="text-center mt-2 text-sm font-quicksand font-[600]">
            {subHeading}
          </p>
        </div>
        <div className="mt-8">
          <Carousel
            opts={{
              align: "start",
            }}
            className=" w-full "
          >
            <CarouselContent>
              {data.map((process, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 pb-6 lg:basis-1/4"
                >
                  <div className="p-1 w-full relative">
                    <Card className="w-full">
                      <CardContent className="w-full h-[350px] overflow-hidden !px-0 !py-0 flex flex-col justify-between relative">
                        <img
                          src={process.imgUrl}
                          alt={"prcoess"}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <BgLayer />
                        <p className="text-5xl font-[600] relative z-10 text-white/80 p-3">
                          0{index + 1}
                        </p>
                        <div className="relative z-10 bg-gradient-to-t from-slate-950/80 via-slate-800/80 to-transparent p-3">
                          <div className="mt-3 ">
                            <h3 className=" font-semibold text-dimondra-white font-rubik text-xl">
                              {process.title}
                            </h3>
                            <p className="text-sm mt-2 font-quicksand text-dimondra-white font-[500]">
                              {process.description}
                            </p>
                          </div>
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

export default Process;
