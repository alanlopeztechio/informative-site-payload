"use client";

import React from "react";
import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export const Carousel = ({
  titulo,
  imagenes,
}: {
  titulo: string;
  imagenes: { imagen: string; alt?: string }[];
}) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{titulo}</h2>
      <div className="max-w-xl mx-auto">
        <ShadCarousel className="w-full">
          <CarouselContent>
            {imagenes.map((img, i) => (
              <CarouselItem key={i} className="flex justify-center items-center">
                <img
                  src={img.imagen}
                  alt={img.alt || ""}
                  className="w-full h-64 object-cover rounded-lg border"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
        </ShadCarousel>
      </div>
    </section>
  );
};
