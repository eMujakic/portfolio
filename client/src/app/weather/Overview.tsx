"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/utils";

const Overview = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div
        className="mt-34 md:mt-40 max-h-screen
                    max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-white"
      >
        <h1 className="section-heading">Project Overview</h1>
        <p className="text-center text-lg mb-4 md:mb-2">
        A comprehensive Internet of Things (IoT) solution was developed to monitor temperature and humidity levels.
        This project utilized an ESP32 device to collect data from sensors and transmit it to a web application.
        A user-friendly interface was created to display real-time environmental metrics,
        making it easy for users to access the information.
        </p>
        <div className="p-0 md:p-6 mt-2">
          <Carousel
            opts={{
              loop: true,
            }}
            className=""
          >
            <CarouselContent className="">
              <CarouselItem className="">
                <img src="/placeholder.jpg" alt="" className="slider-img" />
              </CarouselItem>
              <CarouselItem className="">
                <img src="/placeholder.jpg" alt="" className="slider-img" />
              </CarouselItem>
              <CarouselItem className="">
                <img src="/placeholder.jpg" alt="" className="slider-img" />
              </CarouselItem>
            </CarouselContent>
            <div className="">
              <CarouselPrevious className="slider-button" />
              <CarouselNext className="slider-button" />
            </div>
          </Carousel>
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
