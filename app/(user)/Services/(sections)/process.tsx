import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import BgLayer from "../../app_chunks/BgLayer";
const Process = () => {
  return (
    <div className="my-28">
      <div className="container blogTrigger">
        <h1 className="text-5xl blogText mt-1 !leading-[5.3rem] font-[600] text-dimondra-black">
          Title for the work process
        </h1>
        <div className="mt-4">
          <Carousel
            opts={{
              align: "start",
            }}
            className=" w-full "
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 pb-6 lg:basis-1/4"
                >
                  <div className="p-1 w-full relative">
                    <Card className="w-full">
                      <CardContent className="w-full h-[400px] overflow-hidden !px-0 !py-0 flex flex-col justify-between relative">
                        <img
                          src={
                            "https://images.unsplash.com/photo-1723296050269-ef50cb0ad178?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          }
                          alt={"prcoess"}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <BgLayer />
                        <p className="text-5xl font-[600] relative z-10 text-white/80 p-3">
                          0{index + 1}
                        </p>
                        <div className="relative z-10 bg-gradient-to-t from-white/90 from-[80%] to-transparent p-3">
                          <div className="mt-3 ">
                            <h3 className=" font-bold text-lg">
                              Title heading
                            </h3>
                            <p className="text-sm mt-2">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ipsum repellat possimus, dolorem
                              velit enim provident rem, architecto alias nostrum
                              beatae omnis explicabo esse autem nisi itaque
                              voluptatem a quod! Recusandae!
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
